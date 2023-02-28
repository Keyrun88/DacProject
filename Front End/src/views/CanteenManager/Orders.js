import { CButton, CCard, CCardBody, CCardHeader, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import PageHeading from "src/components/PageHeading"

const Orders = () => {
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
                            <CTableHeaderCell scope="col">Date & Time</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell> 
                                <CDropdown>
                                    <CDropdownToggle color="primary">Change Status</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem>Processing</CDropdownItem>
                                        <CDropdownItem>Prepared</CDropdownItem>
                                        <CDropdownItem>Ready</CDropdownItem>
                                        <CDropdownItem>Delivered</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CButton color="danger">Cancel</CButton>
                            </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
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
                            <CTableHeaderCell scope="col">Date & Time</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell> 
                            </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    </>
}
export default Orders