import React, { useEffect, useState } from 'react'
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
import { cilLockLocked, cilPhone } from '@coreui/icons'
import logo from 'src/assets/images/Logo.png'
import { AppFooter } from 'src/components'

const Login = () => {
  

  return (
    <div className="bg-primary-25 min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard>
                <CCardBody className='p-0 border border-5 border-primary'>
                  <h2 className="text-center bg-primary text-white border border-4" style={{"height":"40px"}}>Login</h2>
                  <CForm>
                    <img className="sidebar-brand-full p-3" src={logo} height="150px" width="100%" />
                    <div className='px-5 pb-5'>
                      <CInputGroup className="my-3 mt-4">
                        <CInputGroupText>
                          <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput  placeholder="Mobile Number" autoComplete="username" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={12} className="d-flex justify-content-center">
                          <CButton color="primary" className="px-4">
                            Verify
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  </CForm>
                  <AppFooter />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
