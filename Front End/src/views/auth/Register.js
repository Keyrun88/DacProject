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
  CFormCheck,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed, cilInfo, cilLockLocked, cilUser } from '@coreui/icons'
import { createUser } from 'src/services/UserService'
import Swal from 'sweetalert2'
import logo from 'src/assets/images/Logo.png'
import { AppFooter } from 'src/components'

const Register = () => {

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    question: '',
    answer: ''
  })
  const [accType, setAccType] = useState("student")

  const navigate = useNavigate()

  const onSave = () => {
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.question || !userData.answer) {
      Swal.fire({
        title: "Warning",
        text: "All fields are mandetory",
        icon: "warning",
        confirmButtonColor: "#006f95"
      })
      return
    }
    const obj = userData
    obj['isStaffMember'] = accType === 'staff'
    obj['isCanteenManager'] = accType === 'canteenManager'
    createUser(obj).then(rs => {
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
          <CCol md={6}>
            <CCardGroup>
              <CCard>
                <CCardBody className='p-0 border border-5 border-primary'>
                  <h2 className="text-center bg-primary text-white border border-4" style={{ "height": "50px" }}>Register</h2>
                  <CForm>
                    <img className="sidebar-brand-full p-3" src={logo} height="150px" width="100%" />
                    <div className='px-5 pb-5'>
                      <CRow>
                        <CCol md={6}>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilUser} />
                            </CInputGroupText>
                            <CFormInput placeholder="First Name" autoComplete="First Name" defaultValue={userData.firstName} onChange={e => setUserData({ ...userData, firstName: e.target.value })} />
                          </CInputGroup>
                        </CCol>
                        <CCol md={6} className="ml-0 pl-0">
                          <CInputGroup>
                            <CFormInput placeholder="Last Name" autoComplete="Last Name" defaultValue={userData.lastName} onChange={e => setUserData({ ...userData, lastName: e.target.value })} />
                          </CInputGroup>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol md={6}>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilEnvelopeClosed} />
                            </CInputGroupText>
                            <CFormInput
                              type="email"
                              placeholder="Email"
                              defaultValue={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })}
                            />
                          </CInputGroup>
                        </CCol>
                        <CCol md={6}>
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              defaultValue={userData.password} onChange={e => setUserData({ ...userData, password: window.btoa(e.target.value) })}
                            />
                          </CInputGroup>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol md={6}>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilInfo} />
                            </CInputGroupText>
                            <CFormInput
                              type="text"
                              placeholder="Security Question"
                              defaultValue={userData.question} onChange={e => setUserData({ ...userData, question: e.target.value })}
                            />
                          </CInputGroup>
                        </CCol>
                        <CCol md={6}>
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="text"
                              placeholder="Answer"
                              defaultValue={userData.answer} onChange={e => setUserData({ ...userData, answer: e.target.value })}
                            />
                          </CInputGroup>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol md={12}>
                          <CInputGroup className="mb-3">
                            <CFormLabel className='d-block'>Create account as ? </CFormLabel>&nbsp;&nbsp;&nbsp;
                            <CFormCheck inline type="radio" name="typeOfAcc" id="inlineCheckbox1" value="option1" label="Student" defaultChecked onClick={() => setAccType('student')}/>
                            <CFormCheck inline type="radio" name="typeOfAcc" id="inlineCheckbox2" value="option2" label="Staff" onClick={() => setAccType('staff')}/>
                            <CFormCheck inline type="radio" name="typeOfAcc" id="inlineCheckbox2" value="option2" label="Canteen Manager" onClick={() => setAccType('canteenManager')}/>
                          </CInputGroup>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={onSave}>
                            Register
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="d-flex justify-content-end">
                          Already have account ? <CButton color="link" className="py-0 mb-4" onClick={() => navigate("/login")}>
                            Login
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

export default Register
