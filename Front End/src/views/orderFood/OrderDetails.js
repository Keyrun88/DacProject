import { CBadge, CCard, CCardBody, CCardHeader, CContainer } from "@coreui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import PageHeading from "src/components/PageHeading"
import { getOrderById } from "src/services/OrderService"

const OrderDetails = () => {

    const param = useParams()
    const [orderDetails, setOrderDetails] = useState({})

    const loadOrderDetails = () => {
        getOrderById(param.id).then(rs => {

            setOrderDetails(rs.data[0])
        })
    }
    console.log(orderDetails)
    useEffect(() => {
        loadOrderDetails()
    }, [param])

    return <>
        <CCard>
            <CCardHeader>
                <PageHeading>Order Details</PageHeading>
            </CCardHeader>
            <CCardBody>
                <CContainer className="d-flex justify-content-center">
                    <div>
                        <div className="d-flex justify-content-center">
                            {orderDetails.Status === 'accepted' && <img width="200" height="200" src="https://listimg.pinclipart.com/picdir/s/160-1600707_picture-library-chef-food-pan-time-transprent-png.png" />}
                            {orderDetails.Status === 'processing' && <img width="200" height="200" src="https://cdn.dribbble.com/users/2434139/screenshots/4881008/cook-4x3.gif" />}
                            {orderDetails.Status === 'ready' && <img width="200" height="200" src="https://display.orderready.app/images/logoReady.jpg" />}
                            {orderDetails.Status === 'completed' && <img width="200" height="200" src="https://gifdb.com/images/high/animated-green-verified-check-mark-k3et2jz52jyu2v22.gif" />}
                            {orderDetails.Status === 'cancelled' && <img width="200" height="200" src="https://images.template.net/74803/880.gif" />}
                        </div>
                        <h5 className="text-center">Your order is {orderDetails.Status}</h5>
                        {orderDetails.Status === 'ready' ? <h5 className="text-center">Please collect your order from counter!</h5> : null}
                    </div>
                </CContainer>
                <hr />
                <div className="d-flex justify-content-center">
                    <div>
                        <h6>Food Items : {orderDetails.FoodItems ? orderDetails.FoodItems.split(",").map(x => {
                            return <><CBadge color="primary">{x}</CBadge>&nbsp;</>
                        }) : null}</h6>
                        <h6>Bil Amount : {orderDetails.BillAmount}</h6>
                        <h6>Discount % : {orderDetails.Discount}%</h6>
                        <h6>Order at &nbsp;&nbsp;&nbsp;&nbsp; : {new Date(orderDetails.DateAndTime).toLocaleTimeString() + ", " + new Date(orderDetails.DateAndTime).toDateString()}</h6>
                    </div>
                </div>
            </CCardBody>
        </CCard>
    </>
}

export default OrderDetails