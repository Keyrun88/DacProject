const { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CFormInput, CFormSelect } = require("@coreui/react")

const AddMenu = ({ visible, setVisible }) => {
    return <>
        <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
                <CModalTitle>Add New Item</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Item Name"
                    placeholder="name@example.com"
                />
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Amount in Rs"
                    placeholder="20"
                />
                <CFormSelect
                    className="mb-3"
                    label="Select Category"
                    options={[
                        { label: 'Snacks', value: '1' },
                        { label: 'Main Course', value: '2' },
                        { label: 'Desserts', value: '2' },
                        { label: 'Drinks', value: '2' },
                        { label: 'Main Course', value: '2' },
                    ]}
                />

            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                </CButton>
                <CButton color="primary">Add</CButton>
            </CModalFooter>
        </CModal>
    </>
}

export default AddMenu