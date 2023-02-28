import { CCard, CCardBody, CCardHeader, CCol, CFormInput, CRow } from "@coreui/react"
import PageHeading from "src/components/PageHeading"

const Discount = () => {
    return <>
        <CCard>
            <CCardHeader>
                <PageHeading>Discount</PageHeading>
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol> 
                        <CFormInput
                            className="mb-3"
                            type="text"
                            label="Student Discount (%)"
                            defaultValue="10 %"
                        />
                    </CCol>
                    <CCol>
                        <CFormInput
                            className="mb-3"
                            type="text"
                            label="Staff Discount (%)"
                            defaultValue="20 %"
                        />
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    </>
}
export default Discount