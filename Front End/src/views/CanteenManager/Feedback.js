import { CButton, CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useState } from "react"
import { useEffect } from "react"
import PageHeading from "src/components/PageHeading"
import { getFeedback, deleteFeedback } from "src/services/FeedbackService"
import Swal from "sweetalert2"

const Feedback = () => {

    const [feedbackData, setFeedbackData] = useState([])

    const loadFeedbacks = () => {
        getFeedback().then(rs => {
            setFeedbackData(rs.data)
        })
    }

    const onDelete = (x) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel please!",
        }).then(rs => {
            if (rs.isConfirmed) {
                deleteFeedback(x.FeedbackId).then(rs => {
                    Swal.fire({
                        title: "Success",
                        text: "Feedback deleted successfully!",
                        icon: "success",
                        confirmButtonColor: "#006f95"
                    }).then(e => {
                        loadData()
                    })
                }).catch(err => {
                    Swal.fire({
                        title: "Failed",
                        text: "Failed to delete Feedback please try again!",
                        icon: "error",
                        confirmButtonColor: "#006f95"
                    })
                })
            }
        })
    }
    useEffect(() => {
        loadFeedbacks()
    }, [])

    return <>
        <CCard>
            <CCardHeader>
                <PageHeading>Feedback</PageHeading>
            </CCardHeader>
            <CCardBody>
                <CTable hover>
                    <CTableHead color="primary">
                        <CTableRow>
                            <CTableHeaderCell scope="col">Feedback by</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Food</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Feedback</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {feedbackData.map(x => (
                            <CTableRow>
                                <CTableHeaderCell scope="row">{x.FirstName} {x.LastName}</CTableHeaderCell>
                                <CTableDataCell>{x.FoodItems}</CTableDataCell>
                                <CTableDataCell>{x.Feedback}</CTableDataCell>
                                <CTableDataCell><CButton color="danger" onClick={() => onDelete(x)}>Delete</CButton></CTableDataCell>
                            </CTableRow>
                        ))}
                </CTableBody>
            </CTable>
        </CCardBody>
    </CCard>
    </>
}
export default Feedback