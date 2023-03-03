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
  CInputGroupFile,
  CRow, CImage
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed, cilInfo, cilLockLocked, cilUser } from '@coreui/icons'
import { createUser, updateUser } from 'src/services/UserService'
import Swal from 'sweetalert2'

const profile = () => {

  const [userData, setUserData] = useState({})
  const [pass, setPass] = useState("")
  const [imageUrl, setImageUrl] = useState()

  const navigate = useNavigate()

  const onUpdate = () => {
    const reqObj = {
      firstName: userData.FirstName,
      lastName: userData.LastName,
      email: userData.Email,
      imageUrl: imageUrl,
      mobileNo: userData.MobileNo,
      userId: userData.ID
    }
    if (pass) {
      reqObj["password"] = pass
    }

    updateUser(reqObj).then((rs) => {
      localStorage.setItem("user", JSON.stringify(rs.data[0]))
      Swal.fire({
        title: "Success",
        text: "User account updated successfully!",
        icon: "success",
        confirmButtonColor: "#006f95"
      })
    }).catch(err => {
      Swal.fire({
        title: "Failed",
        text: "Failed to update user please try again!",
        icon: "error",
        confirmButtonColor: "#006f95"
      })
    })
  }

  const loadData = () => {
    setUserData(JSON.parse(localStorage.getItem('user')))
    setImageUrl(JSON.parse(localStorage.getItem('user')).ImageUrl)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="bg-light min-vh-200 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-1">
                <CCardBody>
                  <CForm>
                    <div className="min-vh-200">
                      <CImage align="center" rounded src={imageUrl || "https://cdn-icons-png.flaticon.com/512/6073/6073873.png"} width={200} height={200} />
                      <CButton className='w-100 mt-2' onClick={() => document.getElementById("file").click()}>Change Profile</CButton>
                      <input type="file" onChange={handleImageChange} accept="image/*" id="file" hidden />
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
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
                          <CFormInput placeholder="First Name" autoComplete="First Name" defaultValue={userData.FirstName} onChange={e => setUserData({ ...userData, FirstName: e.target.value })} />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6} className="ml-0 pl-0">
                        <CInputGroup>
                          <CFormInput placeholder="Last Name" autoComplete="Last Name" defaultValue={userData.LastName} onChange={e => setUserData({ ...userData, LastName: e.target.value })} />
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
                            placeholder="Mobile number"
                            defaultValue={userData.MobileNo} onChange={e => setUserData({ ...userData, MobileNo: e.target.value })}
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CFormInput
                            type="email"
                            placeholder="Email"
                            defaultValue={userData.Email} onChange={e => setUserData({ ...userData, Email: e.target.value })}
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilEnvelopeClosed} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="New Password"
                            autoComplete="current-password"
                            defaultValue={pass} onChange={e => setPass(window.btoa(e.target.value))}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" onClick={onUpdate} >
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
    </div >
  )
}
export default profile




