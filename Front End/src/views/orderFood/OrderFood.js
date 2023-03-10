import { cilCheck } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CButton, CCard, CCardBody, CCardHeader, CCardFooter, CCardImage, CImage, CCardText, CCardTitle, CCol, CContainer, CForm, CFormInput, CFormLabel, CListGroup, CRow, CCardGroup, CFormSelect } from "@coreui/react"
// import { CButton, CCard, CCardBody, CCardHeader, , CCardImage, , CCardText, CCardTitle, CCardSubtitle, CCol, CContainer, CForm, CFormInput, CFormLabel, CListGroup, CRow } from "@coreui/react"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PageHeading from "src/components/PageHeading"
import { getDiscount } from "src/services/DiscountService"
import { getFoodItems } from "src/services/FootItemService"
import { addOrder } from "src/services/OrderService"
import Swal from "sweetalert2"

const OrderFood = () => {

    const [foodItems, setFoodItems] = useState([])
    const [foodItemsCopy, setFoodItemsCopy] = useState([])

    const [discount, setDiscount] = useState(0)
    const [billTotal, setBillTotal] = useState(0)
    const [finalBill, setFinalBill] = useState(0)
    const [searchValue, setSearchValue] = useState("")

    const user = JSON.parse(localStorage.getItem("user"))

    const param = useParams()

    const navigate = useNavigate()

    const onAddItem = (item) => {
        setFoodItems([])
        setFoodItemsCopy([])
        const temp = foodItems
        temp.forEach(x => {
            if (x.ItemID === item.ItemID) {
                x.isAddedTocart = true
            }
        })
        setTimeout(() => {
            setFoodItems(temp)
            setFoodItemsCopy(temp)
        }, 200);
    }

    const onDeleteItem = (item) => {
        setFoodItems([])
        setFoodItemsCopy([])
        const temp = foodItems
        temp.forEach(x => {
            if (x.ItemID === item.ItemID) {
                x.isAddedTocart = false
                x.Quantity = 0
            }
        })
        setTimeout(() => {
            setFoodItems(temp)
            setFoodItemsCopy(temp)
        }, 200);
    }

    const loadData = () => {
        getFoodItems().then(rs => {
            setFoodItems(rs.data)
            setFoodItemsCopy(rs.data)
        })
        getDiscount().then(rs => {
            if (user.isStaffMember) {
                setDiscount(rs.data[0].StaffDiscount)
            } else {
                setDiscount(rs.data[0].StudentDiscount)
            }
        })
    }

    const filterByType = (type) => {
    
        const temp = foodItemsCopy.filter(x => x.Category === type)
        setFoodItems(temp)
    }

    const confirmOrder = () => {
        let tempFoodItems = ""

        foodItems.forEach(x => {
            if (x.isAddedTocart) {
                tempFoodItems += x.Name + ", "
            }
        })

        const reqObj = {
            status: "accepted",
            discount: discount,
            foodItems: tempFoodItems,
            userID: user.ID,
            billAmount: finalBill,
        }

        addOrder(reqObj).then(rs => {
            Swal.fire({
                title: "Success",
                text: "Your order is placed successfully!",
                icon: "success",
                confirmButtonColor: "#006f95"
            }).then(e => {
                navigate("/order-details/" + rs.data[0].OrderID)
            }) 
        }).catch(err => {
            Swal.fire({
                title: "Failed",
                text: "Failed to place your order, please try again!",
                icon: "error",
                confirmButtonColor: "#006f95"
            })
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        if (param.id === '2') {
            const temp = foodItems.filter(x => x.isAddedTocart)
            let total = 0
            temp.forEach(x => {
                total += x.Price * x.Quantity
            })
            setBillTotal(total)
            setFinalBill(total + 10 - ((total / 100) * discount))
        }
    }, [param])

    useEffect(() => {
        if (searchValue === "") {
            loadData()
        } else {
            const temp = foodItemsCopy.filter(x => x.Name.toLowerCase().includes(searchValue.toLowerCase()))
            setFoodItems(temp)
        }
    }, [searchValue])

    return <>
        {param.id === "1" ? <CCard>
            <CCardHeader>
                <div className="d-flex justify-content-between">
                    <PageHeading> Order Food </PageHeading>
                    <CButton onClick={() => navigate("/order-food/2")}><CIcon icon={cilCheck} /> Checkout ({foodItems.filter(x => x.isAddedTocart).length}) </CButton>
                </div>
            </CCardHeader>
            <CCardBody>
                <CContainer>
                    <CRow className="p-3 pr-5">
                        <CCol md={9}>
                            <CFormSelect
                                className="mb-3"
                                onChange={(e) => filterByType(e.target.value)}
                                options={[
                                    { label: 'Snacks', value: 'Snacks' },
                                    { label: 'Breakfast', value: 'Breakfast' },
                                    { label: 'Main Course', value: 'Main Course' },
                                    { label: 'Desserts', value: 'Desserts' },
                                    { label: 'Drinks', value: 'Drinks' },
                                ]}
                            />
                        </CCol>
                        <CCol md={3}>
                            <CCol xs="auto">
                                <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                                    Search
                                </CFormLabel>
                            </CCol>
                            <CCol xs="auto">
                                <CFormInput type="text" id="inputPassword2" placeholder="Search"
                                    defaultValue={searchValue}
                                    onChange={e => setSearchValue(e.target.value)}
                                />
                            </CCol>
                        </CCol>
                    </CRow>
                    {foodItems.length ? <CRow className="d-flex justify-content-center">
                        {foodItems.map((x, i) => (
                            <CCard style={{ width: '13rem' }} className="m-2 p-2" key={i}>
                                <CCardImage height="100px" orientation="top" src={x.ImageURL} />
                                <CCardBody>
                                    <CCardTitle>
                                        <div className="d-flex justify-content-between">
                                            <span>{x.Name}</span>
                                            <h6 className="text-secondary">{x.Price} Rs.</h6>
                                        </div>
                                    </CCardTitle>
                                    <CCardText>
                                        <span className="text-secondary"> {x.Category} </span>
                                    </CCardText>
                                    <CFormInput type="number" placeholder="Quantity" defaultValue={x.Quantity} onChange={e => x.Quantity = e.target.value} />
                                    {!x.isAddedTocart ? <CButton className="w-100 my-1" color="warning" onClick={() => onAddItem(x)} > Added to cart</CButton> :
                                    <CButton className="w-100 my-1" color="warning" onClick={() => onDeleteItem(x)} >Remove From Cart</CButton>}
                                </CCardBody>
                            </CCard>))}
                    </CRow> : <h4 className="text-center">No item found</h4>}
                </CContainer>
            </CCardBody>
        </CCard> : <>
            <div className="bg-light min-vh-200 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8}>
                            <CCard >
                                <CCardHeader>
                                    <PageHeading>Order List</PageHeading>
                                </CCardHeader>
                                <CCardBody>
                                    {foodItems.filter(x => x.isAddedTocart).map(x => {
                                        return <CRow className="p-2 m-2">
                                            <CCol md={2}>
                                                <img src={x.ImageURL} width="100px" height="80px" />
                                            </CCol>
                                            <CCol md={10}>
                                                <div className="d-flex justify-content-between">
                                                    <div><h6>{x.Name}</h6>
                                                        <span>{x.Category}</span>
                                                    </div>
                                                    <span>{x.Price} Rs. x {x.Quantity} = {x.Price * x.Quantity}</span>
                                                </div>
                                            </CCol>
                                        </CRow>
                                    })}

                                    <CButton onClick={e => navigate("/order-food/1")}>Back</CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol md={4}>
                            <CCard>
                                <CCardHeader>
                                    <PageHeading>Order Details</PageHeading>
                                </CCardHeader>
                                <CCardBody>
                                    <div className="d-flex justify-content-between">
                                        <span>Total Amount</span>
                                        <span>{billTotal} Rs</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Discount {discount}%</span>
                                        <span>-  {(billTotal / 100) * discount} Rs</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Tax</span>
                                        <span>+ 10 Rs</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span></span>
                                        <span>---------</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Bill Amount</span>
                                        <span>{finalBill} Rs.</span>
                                    </div>
                                    <CButton className="w-100 mt-4" onClick={confirmOrder}>Confirm Order</CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CContainer>
            </div >
        </>}
    </>
}

export default OrderFood