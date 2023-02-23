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
import { login } from 'src/services/UserService'
import Swal from 'sweetalert2'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [type, setType] = useState("user")

  const navigate = useNavigate()

  const onLogin = () => {

    login(loginData.email, loginData.password, type).then(res => {
      if (res.data.length) {
        if (type === "user") {
          localStorage.setItem("user", JSON.stringify(res.data[0]))
          navigate("/dashboard")
        } else {
          localStorage.setItem("user", JSON.stringify(res.data[0]))
          navigate("/canteen-manager")
        }
      } else {
        Swal.fire({
          title: 'Failed',
          text: 'Incorrect email and password',
          icon: 'error',
          confirmButtonColor: '#581845'
        })
      }
    })
  }

  return (
    <div className="bg-primary-25 min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard>
                <CCardBody className='p-0 border border-5 border-primary'>
                  <h2 className="text-center bg-primary text-white border border-4" style={{ "height": "50px" }}>Login {type !== 'user' ? 'as Canteen Manager' : 'as User'}</h2>
                  <CForm>
                    <img className="sidebar-brand-full p-3" src={logo} height="150px" width="100%" />
                    <div className='px-5 pb-5'>
                      <CInputGroup className="my-3 mt-4">
                        <CInputGroupText>
                          <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput placeholder="Email" autoComplete="username" defaultValue={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} />
                      </CInputGroup>
                      <CInputGroup className="my-3 mt-4">
                        <CInputGroupText>
                          <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput placeholder="Password" autoComplete="username" defaultValue={loginData.password} onChange={e => setLoginData({ ...loginData, password: window.btoa(e.target.value) })} />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={12} className="d-flex justify-content-between">
                          <CCol xs={7}>
                            <CButton color="primary" className="px-4" onClick={onLogin}>
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs={5} className="d-flex justify-content-end">
                            <CButton color="link" className="px-0" onClick={() => type === 'user' ? setType('canteenManager') : setType('user')}>
                              Forgot Password
                            </CButton>
                          </CCol>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={12} className="d-flex justify-content-center p-0 m-0">
                          <CButton color="link" className="px-0" onClick={() => type === 'user' ? setType('canteenManager') : setType('user')}>
                            Login as {type === 'user' ? 'Canteen Mananger' : 'User'}
                          </CButton>
                        </CCol>
                        <CCol xs={12} className="d-flex justify-content-center p-0 m-0">
                        Are you a new user ? &nbsp;<CButton color="link" className="p-0 m-0" >
                            Create Account
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
