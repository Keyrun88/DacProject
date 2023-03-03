import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react"
import { useNavigate } from "react-router-dom"
import PageHeading from "src/components/PageHeading"

const Settings = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    return <CCard> 
        <CCardHeader>
            <PageHeading>Settings</PageHeading>
        </CCardHeader>
        <CCardBody>
                <div className="d-flex justify-content-left">
                    <CButton color="primary" onClick={onLogout}>Log Out</CButton>&nbsp;&nbsp;
                    <CButton color="danger" className="text-white">Delete Account</CButton>
                </div>
        </CCardBody>
    </CCard>
}

export default Settings