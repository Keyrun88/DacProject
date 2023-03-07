import { useEffect, useState } from "react"
import { addFootItem } from "src/services/FootItemService"
import Swal from "sweetalert2"
import Rating from 'react-rating'
import CIcon from "@coreui/icons-react"
import { cilStar, cilStarHalf } from "@coreui/icons"
const { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CFormInput, CFormSelect, CFormTextarea } = require("@coreui/react")

const Feedback = ({ visible, setVisible, callback }) => {

    const [rating, setRating] = useState(0)
    const [feedback, setFeedback] = useState("")

    const onAdd = () => {
        callback(rating, feedback)
    }

    return <>
        <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
                <CModalTitle>Give Feedback</CModalTitle>
            </CModalHeader>
            <CModalBody className="d-flex justify-content-center">
                <div className="w-100">
                    <div className="d-flex justify-content-center">
                        <Rating
                            onChange={e => setRating(e)}
                            initialRating={rating}
                            emptySymbol={<CIcon icon={cilStar} size="xxl" />}
                            fullSymbol={<CIcon icon={cilStar} size="xxl" className="text-warning" />}
                        />
                    </div>
                    <CFormTextarea 
                        defaultValue={feedback}
                        onChange={e => setFeedback(e.target.value)}
                        className="w-100" 
                        placeholder="Give your feedback here.."
                    />
                </div>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                </CButton>
                <CButton color="primary" onClick={onAdd}>Add</CButton>
            </CModalFooter>
        </CModal>
    </>
}

export default Feedback