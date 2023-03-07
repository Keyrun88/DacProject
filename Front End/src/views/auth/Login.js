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
import { forgotPassword, login } from 'src/services/UserService'
import Swal from 'sweetalert2'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [type, setType] = useState("user")

  const navigate = useNavigate()

  const onLogin = () => {

    login(loginData.email, loginData.password, type !== "user").then(res => {
      if (res.data.length) {
        if (type === "user") {
          localStorage.setItem("user", JSON.stringify(res.data[0]))
          navigate("/order-food/1")
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

  const onForgot = async () => {
    const { value: email } = await Swal.fire({
      title: 'Enter your Email address',
      input: 'text',
      inputLabel: 'Your Email address',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })

    if (email) {
      debugger
      forgotPassword(email).then(async rs => {
        if (rs.data.length) {
          const { value: answer } = await Swal.fire({
            title: 'Enter answer for security question',
            input: 'text',
            inputLabel: rs.data[0].SecurityQ + " ?",
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
            }
          })
        } else {
          Swal.fire({
            text: "Email Id not found!! Please try to create an account.",
            icon:"info"
          })
        }

        if (answer) {
          if (answer === rs.data[0].Answer) {
            Swal.fire({
              title: 'Your Password',
              text: rs.data[0].Password
            })
          } else {
            Swal.fire({
              title: 'Wrong Answer',
              icon:"warning",
              text: "Please Enter correct answer"
            })
          }
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      if (JSON.parse(localStorage.getItem("user")).IsCanteenManager) {
        navigate("/canteen-manager")
      } else {
        navigate("/order-food/1")
      }
    }
  }, [])

  return (
    <div className="bg-primary-25 min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard>
                <CCardBody className='p-0 border border-5 border-primary'>
                  <h2 className="text-center bg-primary text-white border border-4" style={{ "height": "50px" }}>Login {type !== 'user' ? 'as Canteen Manager' : 'as Student / Staff'}</h2>
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
                        <CFormInput type="password" placeholder="Password" autoComplete="username" defaultValue={loginData.password} onChange={e => setLoginData({ ...loginData, password: window.btoa(e.target.value) })} />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={12} className="d-flex justify-content-between">
                          <CCol xs={7}>
                            <CButton color="primary" className="px-4" onClick={onLogin}>
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs={5} className="d-flex justify-content-end">
                            <CButton color="link" className="px-0" onClick={onForgot} >
                              Forgot Password
                            </CButton>
                          </CCol>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={12} className="d-flex justify-content-center p-0 m-0">
                          <CButton color="link" className="px-0" onClick={() => type === 'user' ? setType('canteenManager') : setType('user')}>
                            Login as {type === 'user' ? 'Canteen Mananger' : 'Student / Staff'}
                          </CButton>
                        </CCol>
                        <CCol xs={12} className="d-flex justify-content-center p-0 m-0">
                          Are you a new user ? &nbsp;<CButton color="link" className="p-0 m-0" onClick={() => navigate("/register")}>
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
