import React, { useEffect, useState } from 'react'

import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
} from '@coreui/icons'
import PageHeading from 'src/components/PageHeading'
import { getAllOrders } from 'src/services/OrderService'
import { useNavigate } from 'react-router-dom'
import { getFoodItems } from 'src/services/FootItemService'
import { getFeedback } from 'src/services/FeedbackService'

const ManagerDashboard = () => {

  const [recentOrders, setrecentOrders] = useState([])
  const [overallRevenue, setOverallRevenue] = useState(0)
  const [completedOrders, setCompletedOrders] = useState(0)
  const [cancelledOrders, setCancelledOrders] = useState(0)
  const [totalFoodItems, setTotalFoodItems] = useState(0)
  const [totalFeedback, setTotalFeedback] = useState(0)
  const [totalRating, setTotalRating] = useState(0)

  const navigate = useNavigate()

  const getData = () => {
    getAllOrders().then(rs => {
      const orders = rs.data
      orders.forEach(x => {
        x.DateAndTime = new Date(x.DateAndTime).toLocaleTimeString() + ", " + new Date(x.DateAndTime).toDateString()
      })
      setrecentOrders(orders)

      setCompletedOrders(rs.data.filter(x => x.Status === 'completed').length)
      setCancelledOrders(rs.data.filter(x => x.Status === 'cancelled').length)
      
      let count = 0
      debugger
      rs.data.forEach(x => {
        if (x.Status === 'completed') {
          count += x.BillAmount
        }
      })
      setOverallRevenue(count)
    }).catch(err => {
      console.log("Error", err)
    })
  }

  const loadDashboardData = () => {
    getFoodItems().then(rs => {
      setTotalFoodItems(rs.data.length)
    })
    getFeedback().then(rs => {
      setTotalFeedback(rs.data.length)
      let sum = 0
      let count = 0
      rs.data.forEach(function(x, index){
        count += x.Rating;
        sum += x.Rating * (index + 1);
      });

      setTotalRating(sum/count)
    })

  }

  useEffect(() => {
    getData()
    loadDashboardData()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <PageHeading>Admin Dashboard Data</PageHeading>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Completed Orders</div>
                        <div className="fs-5 fw-semibold">{completedOrders}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Cancelled Orders</div>
                        <div className="fs-5 fw-semibold">{cancelledOrders}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Overall Revenue</div>
                        <div className="fs-5 fw-semibold">{overallRevenue} Rs.</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Food Items</div>
                        <div className="fs-5 fw-semibold">{totalFoodItems}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Feedbacks</div>
                        <div className="fs-5 fw-semibold">{totalFeedback}</div>
                      </div>
                    </CCol>
                    <CCol sm={12}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Overall Rating</div>
                        <div className="fs-5 fw-semibold">{totalRating}</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
                <hr className="mt-0" />
              </CRow>
              <PageHeading>Recent 10 Orders &nbsp;&nbsp;&nbsp;&nbsp;
                <CButton color="link" className="p-0 m-0" onClick={() => navigate("/canteen-orders")}>
                  Check all orders
                </CButton></PageHeading>
              <CTable align="middle" className="m-0 border" hover responsive>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Food</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Order By</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date & Time</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {recentOrders.splice(1, 10).map(x => (
                    <CTableRow>
                      <CTableHeaderCell scope="row">{x.OrderID}</CTableHeaderCell>
                      <CTableDataCell>{x.FoodItems}</CTableDataCell>
                      <CTableDataCell>{x.BillAmount} Rs.</CTableDataCell>
                      <CTableDataCell>{x.FirstName} {x.LastName}</CTableDataCell>
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
                    </CTableRow>))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ManagerDashboard
