import { CContainer,CCol,CRow,CCard,CCardHeader,CForm,CCardBody,CImg } from "@coreui/react"
const profile = () => {

    return<>
     <CCard>
            <CCardHeader>Profile</CCardHeader>
            <CCardBody>
                <CContainer>
                    <CRow>
                        <CCol md={3} className="border">
                        <CCardBody>
                        <CImg
                          src="https://picsum.photos/1024/480/?image=54"
                          fluid
                          className="mb-2"
                         />                                    
                      </CCardBody>
                        
                        </CCol>
                        <CCol md={9} className="border">
                            <CForm className="row g-3 mt-1">
                                <CCol xs="auto">
                                    <CCardBody>
                                                                      
                                    </CCardBody>
                                </CCol>
                                </CForm>
                                </CCol>
                        </CRow>
                        </CContainer>
                        </CCardBody>
            </CCard>
    </>
}

export default profile