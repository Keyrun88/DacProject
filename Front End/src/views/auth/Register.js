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

const Register = () => {

  const [userData, setUserData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    question : '',
    answer : ''
  })
  const navigate = useNavigate()

  const onSave = () => {
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.question || !userData.answer ) {
      Swal.fire({
        title: "Warning",
        text: "All fields are mandetory",
        icon: "warning",
        confirmButtonColor: "#006f95"          
      })
      return
    }
    createUser(userData).then(rs => {
      Swal.fire({
        title: "Success",
        text: "User account created successfully!",
        icon: "success",
        confirmButtonColor: "#006f95"          
      }).then(x => {
        navigate("/login")
      })
    }).catch(err => {
      Swal.fire({
        title: "Failed",
        text: "Failed to create user please try again!",
        icon: "error",
        confirmButtonColor: "#006f95"          
      })
    })
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
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
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
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        defaultValue={userData.password} onChange={e => setUserData({...userData, password : window.btoa(e.target.value)})}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilInfo} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Security Question"
                        defaultValue={userData.question} onChange={e => setUserData({...userData, question : e.target.value})}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilInfo} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Answer"
                        defaultValue={userData.answer} onChange={e => setUserData({...userData, answer : e.target.value})}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={onSave}>
                          Register
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
