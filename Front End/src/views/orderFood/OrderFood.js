import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CContainer, CForm, CFormInput, CFormLabel, CListGroup, CRow } from "@coreui/react"


const OrderFood = () => {
    return <>
        <CCard>
            <CCardHeader>Order Food</CCardHeader>
            <CCardBody>
                <CContainer>
                    <CRow>
                        <CCol md={8} className="border">
                            1st col
                        </CCol>
                        <CCol md={4} className="border">
                            <CForm className="row g-3 mt-1"> 
                                <CCol xs="auto">
                                    <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                                        Search
                                    </CFormLabel>
                                </CCol>
                                <CCol xs="auto">
                                    <CFormInput type="text" id="inputPassword2" placeholder="Search" />
                                </CCol>
                                <CCol xs="auto">
                                    <CButton type="submit" className="mb-3">
                                        Search
                                    </CButton>
                                </CCol>
                            </CForm>
                        </CCol>
                    </CRow>
                    <CRow className="p-3 border ">
                        <CCol md={2} className=" mt-1">
                          <img width="200px" height="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc76t449ryhLPC887g_SNl15PZOMZtYxmAxKAa80Wz&s"/>
                        </CCol>
                        <CCol md={10} className="mt-1">
                           show food here
                        </CCol>
                        <CCol md={2} className=" mt-1">
                          <img width="200px" height="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc76t449ryhLPC887g_SNl15PZOMZtYxmAxKAa80Wz&s"/>
                        </CCol>
                        <CCol md={10} className="mt-1">
                           show food here
                        </CCol>
                        <CCol md={2} className=" mt-1">
                          <img width="200px" height="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc76t449ryhLPC887g_SNl15PZOMZtYxmAxKAa80Wz&s"/>
                        </CCol>
                        <CCol md={10} className="mt-1">
                           show food here
                        </CCol>
                        <CCol md={2} className=" mt-1">
                          <img width="200px" height="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc76t449ryhLPC887g_SNl15PZOMZtYxmAxKAa80Wz&s"/>
                        </CCol>
                        <CCol md={10} className="mt-1">
                           show food here
                        </CCol>
                    </CRow>
                </CContainer>
            </CCardBody>

        </CCard>
    </>
}

export default OrderFood