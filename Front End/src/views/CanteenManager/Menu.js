import { cilPen, cilTrash } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useEffect } from "react"
import { useState } from "react"
import PageHeading from "src/components/PageHeading"
import { deleteFoodItem, getFoodItems } from "src/services/FootItemService"
import Swal from "sweetalert2"
import AddMenu from "./Models/AddMenu"
import UpdateMenu from "./Models/UpdateMenu"

const Menu = () => {
    const [visible, setVisible] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [foodItems, setFoodItems] = useState([])
    const [updateData, setUpdateData] = useState({})

    const loadData = () => {
        getFoodItems().then(rs => {
            setFoodItems(rs.data)
        })
    }

    const callBackOnUpdate = () => {
        loadData()
    }

    const onDelete = (x) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel please!",
        }).then(rs => {
            if (rs.isConfirmed) {
                debugger
                deleteFoodItem(x.ItemID).then(rs => {
                    Swal.fire({
                        title: "Success",
                        text: "Food Item deleted successfully!",
                        icon: "success",
                        confirmButtonColor: "#006f95"
                    }).then(e => {
                        loadData()
                    })
                }).catch(err => {
                    Swal.fire({
                        title: "Failed",
                        text: "Failed to delete food Item please try again!",
                        icon: "error",
                        confirmButtonColor: "#006f95"
                    })
                })
            }
        })
    }

    const onClickUpdate = (x) => {
        setUpdateData(x)
        setIsUpdate(!isUpdate)
    }

    useEffect(() => {
        if (!visible)
            loadData()
    }, [visible])

    return <>
        <CCard>
            <CCardHeader>
                <div className="d-flex justify-content-between">
                    <PageHeading>Canteen Menu</PageHeading>
                    <CButton onClick={e => setVisible(!visible)}>Add New Item</CButton>
                </div>
            </CCardHeader>
            <CCardBody>
                {/* <CRow>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span><b>Item</b></span>
                            <span><b>Category</b></span>
                            <span><b>Price</b></span>
                            <span><b>Action</b></span>
                        </div>
                    </CCol>
                </CRow> */}
                <CRow>
                    {foodItems.map(x => {
                        return <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                            <div className="d-flex justify-content-between">
                                <img src={x.ImageURL} width={40} height={40} />
                                <span>{x.Name}</span>
                                <span><small><i>{x.Category}</i></small></span>
                                <span><small><i>{x.Price} Rs.</i></small></span>
                                <span>
                                    <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} onClick={e => onClickUpdate(x)} />
                                    <CIcon className="mx-1 text-danger" style={{ marginTop: '3px' }} icon={cilTrash} onClick={() => onDelete(x)} />
                                </span>
                            </div>
                        </CCol>
                    })}

                </CRow>
            </CCardBody>
        </CCard>
        <UpdateMenu visible={isUpdate} setVisible={setIsUpdate} updateData={updateData} callBack={callBackOnUpdate} />
        <AddMenu visible={visible} setVisible={setVisible} />
    </>
}
export default Menu