import { cilPen, cilTrash } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useState } from "react"
import PageHeading from "src/components/PageHeading"
import AddMenu from "./Models/AddMenu"

const Menu = () => {
    const [visible, setVisible] = useState(false)

    return <>
        <CCard>
            <CCardHeader>
                <div className="d-flex justify-content-between">
                    <PageHeading>Canteen Menu</PageHeading>
                    <CButton onClick={e => setVisible(!visible)}>Add New Item</CButton>
                </div>
            </CCardHeader>
            <CCardBody>
                {/* <CRow>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span><b>Item</b></span>
                            <span><b>Category</b></span>
                            <span><b>Price</b></span>
                            <span><b>Action</b></span>
                        </div>
                    </CCol>
                </CRow> */}
                <CRow>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4} style={{ borderRight: '1px solid grey' }}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                    <CCol className="px-4 py-3" sm={4}>
                        <div className="d-flex justify-content-between">
                            <span>Samosa</span>
                            <span><small><i>Snacks</i></small></span>
                            <span><small><i>10 Rs.</i></small></span>
                            <span>
                                <CIcon className="mx-1" style={{ marginTop: '3px' }} icon={cilPen} />
                                <CIcon className="mx-1 text-danger"style={{ marginTop: '3px' }} icon={cilTrash} />
                            </span>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
        <AddMenu visible={visible} setVisible={setVisible} />
    </>
}
export default Menu