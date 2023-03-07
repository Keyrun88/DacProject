import { CBadge, CButton, CCard, CCardBody, CCardHeader, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import PageHeading from "src/components/PageHeading"
import { useState } from "react"
import { getAllOrders, updateOrderStatus } from "src/services/OrderService"
import { useEffect } from "react"

const Orders = () => {

    const [currentOrders, setCurrentOrders] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])

    const getData = () => {
        getAllOrders().then(rs => {
            const complOrder = rs.data.filter(x => x.Status === 'completed' || x.Status === 'cancelled')
            const currOrder = rs.data.filter(x => x.Status !== 'completed' && x.Status !== 'cancelled')
            complOrder.forEach(x => {
                x.DateAndTime = new Date(x.DateAndTime).toLocaleTimeString() + ", " + new Date(x.DateAndTime).toDateString()
            })
            currOrder.forEach(x => {
                x.DateAndTime = new Date(x.DateAndTime).toLocaleTimeString() + ", " + new Date(x.DateAndTime).toDateString()
            })
            debugger
            setCompletedOrders(complOrder)
            setCurrentOrders(currOrder)
        }).catch(err => {
            console.log("Error", err)
        })
    }

    const updateStatus = (order, status) => {
        updateOrderStatus(order.OrderID, status).then(rs => {
            getData()
        }).catch(err => {
            
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <CCard>
            <CCardHeader>
                <PageHeading>Current Orders</PageHeading>
            </CCardHeader>
            <CCardBody>
                <CTable hover>
                    <CTableHead color="primary">
                        <CTableRow>
                            <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Food</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Order By</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Date & Time</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody style={{ maxHeight : "200px", overflowY: "scroll"}}>
                        {currentOrders.map(x => (
                            <CTableRow>
                                <CTableHeaderCell scope="row">{x.OrderID}</CTableHeaderCell>
                                <CTableDataCell>{x.FoodItems}</CTableDataCell>
                                <CTableDataCell>{x.BillAmount} Rs.</CTableDataCell>
                                <CTableDataCell>{x.FirstName} {x.LastName}</CTableDataCell>
                                <CTableDataCell>{x.DateAndTime}</CTableDataCell>
                                <CTableDataCell>
                                    {x.Status === 'accepted' && <CBadge color={"success"} className="ms-auto">
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
                                    <CDropdown>
                                        <CDropdownToggle color="primary">Change Status</CDropdownToggle>
                                        <CDropdownMenu>
                                            <CDropdownItem onClick={() => updateStatus(x, 'processing')}>Processing</CDropdownItem>
                                            <CDropdownItem onClick={() => updateStatus(x, 'ready')}>Ready</CDropdownItem>
                                            <CDropdownItem onClick={() => updateStatus(x, 'completed')}>Delivered</CDropdownItem>
                                        </CDropdownMenu>
                                    </CDropdown>
                                    <CButton color="danger" onClick={() => updateStatus(x, 'cancelled')}>Cancel</CButton>
                                </CTableDataCell>
                            </CTableRow>))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
        <CCard className="mt-4">
            <CCardHeader>
                <PageHeading>Completed Orders</PageHeading>
            </CCardHeader>
            <CCardBody>
                <CTable hover>
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
                        {completedOrders.map(x => (
                            <CTableRow>
                                <CTableHeaderCell scope="row">{x.OrderID}</CTableHeaderCell>
                                <CTableDataCell>{x.FoodItems}</CTableDataCell>
                                <CTableDataCell>{x.BillAmount} Rs.</CTableDataCell>
                                <CTableDataCell>{x.FirstName} {x.LastName}</CTableDataCell>
                                <CTableDataCell>{x.DateAndTime}</CTableDataCell>
                                <CTableDataCell>
                                    {x.Status === 'completed' && <CBadge color={"success"} className="ms-auto">
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
    </>
}
export default Orders