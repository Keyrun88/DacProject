import { CContainer, CCol, CRow, CCard, CCardHeader, CForm, CCardBody, CFormLabel, CButton, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CBadge } from "@coreui/react"
import { useState } from "react"
import { useEffect } from "react"
import { addFeedback, getFeedback } from "src/services/FeedbackService"
import { getOrderByUserId } from "src/services/OrderService"
import Swal from "sweetalert2"
import Feedback from "./Feedback"

const History = () => {

    const user = JSON.parse(localStorage.getItem("user"))
    const [orders, setOrders] = useState([])
    const [visible, setVisible] = useState(false)
    const [feedbackData, setFeedbckData] = useState({})

    const getOrders = () => {
        getOrderByUserId(user.ID).then(rs => {
            getFeedback().then(feedback => {
            
                const tempOrder = rs.data
                const feed = feedback.data
                tempOrder.forEach(o => {
                    feed.forEach(f => {
                        if (o.OrderID === f.OrderId) {
                            o.Feedback = f.Feedback
                        }
                    })
                })
                setOrders(tempOrder)
            })
        })
    }

    const callbackOnFeedback = (rating, feedback) => {
        setVisible(false)
        const reqObj = {
            orderId: feedbackData.OrderID,
            userId: user.ID,
            rating: rating,
            feedback: feedback
        }
        addFeedback(reqObj).then(rs => {
            Swal.fire({
                title: "Success",
                text: "Feedback added successfully!",
                icon: "success",
                confirmButtonColor: "#006f95"
            }).then(e => {
                getOrders()
            }) 
        }).catch(err => {
            Swal.fire({
                title: "Failed",
                text: "Failed to add feedback please try again!",
                icon: "error",
                confirmButtonColor: "#006f95"
            })
        })
    }

    const giveFeedback = (order) => {
        setFeedbckData(order)
    
        setVisible(true)
        
    }

    useEffect(() => {
        getOrders()
    }, [])

    return <>
        <CCard>
            <CCardHeader>History</CCardHeader>
            <CCardBody>
                <CTable align="middle" className="m-0 border" hover responsive>
                    <CTableHead color="primary">
                        <CTableRow>
                            <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Food</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Date & Time</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Feedback</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {orders.map(x => (
                            <CTableRow>
                                <CTableHeaderCell scope="row">{x.OrderID}</CTableHeaderCell>
                                <CTableDataCell>{x.FoodItems}</CTableDataCell>
                                <CTableDataCell>{x.BillAmount} Rs.</CTableDataCell>
                                <CTableDataCell>{x.DateAndTime}</CTableDataCell>
                                <CTableDataCell>
                                    {(x.Status === 'completed' || x.Status === 'accepted') && <CBadge color={"success"} className="ms-auto">
                                        {x.Status}
                                    </CBadge>}
                                    {x.Status === 'cancelled' && <CBadge color={"danger"} className="ms-auto">
                                        {x.Status}
                                    </CBadge>}
                                    {x.Status === 'processing' && <CBadge color={"warning"} className="ms-auto">
                                        {x.Status}
                                    </CBadge>}
                                    {x.Status === 'ready' && <CBadge color={"info"} className="ms-auto">
                                        {x.Status}
                                    </CBadge>}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {x.Feedback ? x.Feedback : <CBadge color="primary" className="cursor-pointer" onClick={() => giveFeedback(x)}>Give Feedback</CBadge>}
                                </CTableDataCell>
                            </CTableRow>))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
        <Feedback visible={visible} setVisible={setVisible} callback={callbackOnFeedback} />
    </>
}

export default History