import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormInput, CRow } from "@coreui/react"
import { useState } from "react"
import { useEffect } from "react"
import PageHeading from "src/components/PageHeading"
import { getDiscount, updateDiscount } from "src/services/DiscountService"
import Swal from "sweetalert2"

const Discount = () => {

    const [data, setData] = useState({})

    const getData = () => {
        getDiscount().then(rs => {
            setData(rs.data[0])
        })
    }

    const onUpdate = () => {
        updateDiscount(data.StudentDiscount, data.StaffDiscount).then(rs => {
            Swal.fire({
                title: "Success",
                text: "Discount updated successfully!",
                icon: "success",
                confirmButtonColor: "#006f95"
            })
        }).catch(err => {
            Swal.fire({
                title: "Failed",
                text: "Failed to update discount please try again!",
                icon: "error",
                confirmButtonColor: "#006f95"
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <CCard>
            <CCardHeader>
                <PageHeading>Discount</PageHeading>
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol>
                        <CFormInput
                            className="mb-3"
                            type="number"
                            label="Student Discount (%)"
                            defaultValue={data.StudentDiscount}
                            onChange={e => setData({ ...data, StudentDiscount: e.target.value })}
                        />
                    </CCol>
                    <CCol>
                        <CFormInput
                            className="mb-3"
                            type="number"
                            label="Staff Discount (%)"
                            defaultValue={data.StaffDiscount}
                            onChange={e => setData({ ...data, StaffDiscount: e.target.value })}
                        />
                    </CCol>
                </CRow>
                <CRow className="d-flex justify-content-center">
                    <CButton className="w-50" onClick={onUpdate}>Update</CButton>
                </CRow>
            </CCardBody>
        </CCard>
    </>
}
export default Discount



