import { useEffect, useState } from "react"
import { addFootItem } from "src/services/FootItemService"
import Swal from "sweetalert2"

const { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CFormInput, CFormSelect } = require("@coreui/react")

const AddMenu = ({ visible, setVisible }) => {

    const [data, setData] = useState({
        name: "",
        imageURL: "https://media.istockphoto.com/id/1199024795/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment.jpg?s=170667a&w=0&k=20&c=OOGRbw9GNagCFYI4egFt26chL8F9V59tqfSrKx0jyJQ=",
        category: "",
        price: ""
    })

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onloadend = () => {
                setData({ ...data, imageURL: reader.result });
            };
        }
    }

    const onAdd = () => {
    
        if (!data.name || !data.category || !data.price) {
            Swal.fire({
                title: "Warning",
                text: "Please enter the item name, category and price.",
                icon: "warning",
                confirmButtonColor: "#006f95"
            })
            return
        }
        addFootItem(data).then(res => {
            Swal.fire({
                title: "Success",
                text: "Food Item added successfully!",
                icon: "success",
                confirmButtonColor: "#006f95"
            }).then(() => {
                setVisible(false)
            })
        }).catch(err => {
            Swal.fire({
                title: "Failed",
                text: "Failed to add food item please try again!",
                icon: "error",
                confirmButtonColor: "#006f95"
            })
        })
    }

    useEffect(() => {
        if (visible) {
            setData({
                name: "",
                imageURL: "https://media.istockphoto.com/id/1199024795/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment.jpg?s=170667a&w=0&k=20&c=OOGRbw9GNagCFYI4egFt26chL8F9V59tqfSrKx0jyJQ=",
                category: "",
                price: ""
            })
        }
    }, [visible])

    return <>
        <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
                <CModalTitle>Add New Item</CModalTitle>
            </CModalHeader>
            <CModalBody>

                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-left m-2">
                        <img src={data.imageURL} width={140} height={140} />
                    </div>
                    <div className="ml-2">
                        <CFormInput
                            className="mb-3"
                            type="text"
                            label="You can enter the image url or upload image"
                            onChange={e => setData({ ...data, imageURL: e.target.value })}
                        />
                        <CButton className="d-block" onClick={() => document.getElementById("file").click()}>Upload Food Image</CButton>
                    </div>
                </div>
                <CFormInput
                    className="my-3"
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                />
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Item Name"
                    defaultValue={data.name}
                    onChange={e => setData({...data, name : e.target.value})}
                    placeholder="Kachori"
                />
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Amount in Rs"
                    defaultValue={data.price}
                    onChange={e => setData({...data, price : e.target.value})}
                    placeholder="20"
                />
                <CFormSelect
                    className="mb-3"
                    label="Select Category"
                    onChange={e => setData({...data, category : e.target.value})}
                    options={[
                        { label: 'Snacks', value: 'Snacks' },
                        { label: 'Breakfast', value: 'Breakfast' },
                        { label: 'Main Course', value: 'Main Course' },
                        { label: 'Desserts', value: 'Desserts' },
                        { label: 'Drinks', value: 'Drinks' },
                    ]}
                />

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

export default AddMenu