import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react"
import { json, useNavigate } from "react-router-dom"
import PageHeading from "src/components/PageHeading"
import { deleteAccount } from "src/services/UserService"
import Swal from "sweetalert2"

const Settings = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    const onLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    const delAccount = () => {
        deleteAccount(user.ID).then(rs => {
            Swal.fire({
                title: "Success",
                text: "User account deleted successfully!",
                icon: "success",
                confirmButtonColor: "#006f95"
            }).then(e => {
                localStorage.clear()
                onLogout()
            })
        }).catch(err => { 
            Swal.fire({
                title: "Failed",
                text: "Failed to delete please try again!",
                icon: "error",
                confirmButtonColor: "#006f95"
            })
        })
    }

    return <CCard>
        <CCardHeader>
            <PageHeading>Settings</PageHeading>
        </CCardHeader>
        <CCardBody>
            <div className="d-flex justify-content-left">
                <CButton color="primary" onClick={onLogout}>Log Out</CButton>&nbsp;&nbsp;
                <CButton color="danger" className="text-white" onClick={delAccount}>Delete Account</CButton>
            </div>
        </CCardBody>
    </CCard>
}

export default Settings