import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import PageHeading from "src/components/PageHeading"

const Feedback = () => {
    return <>
        <CCard>
            <CCardHeader>
                <PageHeading>Feedback</PageHeading>
            </CCardHeader>
            <CCardBody> 
                <CTable hover>
                    <CTableHead color="primary">
                        <CTableRow>
                            <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Food</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Feedback</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Delete</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Delete</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    </>
}
export default Feedback