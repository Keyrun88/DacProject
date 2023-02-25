import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed, cilInfo, cilLockLocked, cilUser } from '@coreui/icons'
import { createUser } from 'src/services/UserService'
import Swal from 'sweetalert2'

const profile = () => {

  const [userData, setUserData] = useState({
    firstName : '',
    lastName : '',
    email : '',
  })
  
  const navigate = useNavigate()

  const onUpdate = () => {
    if (!userData.firstName || !userData.lastName || !userData.email ) {
      Swal.fire({
        title: "Warning",
        text: "All fields are mandetory",
        icon: "warning",
        confirmButtonColor: "#006f95"          
      })
      return
    }  
  }
  
  

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Profile</h1>
                   
                    <CRow>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput placeholder="First Name" autoComplete="First Name" defaultValue={userData.firstName} onChange={e => setUserData({...userData, firstName : e.target.value})}/>
                        </CInputGroup>
                      </CCol>
                      <CCol md={6} className="ml-0 pl-0">
                        <CInputGroup>
                          <CFormInput placeholder="Last Name" autoComplete="Last Name" defaultValue={userData.lastName} onChange={e => setUserData({...userData, lastName : e.target.value})}/>
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        defaultValue={userData.email} onChange={e => setUserData({...userData, email : e.target.value})}
                      />
                    
                    
                    
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" >
                          Update
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default profile