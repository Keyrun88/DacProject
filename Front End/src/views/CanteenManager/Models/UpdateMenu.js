import { useEffect, useState } from "react"
import { addFootItem, updateFoodItem } from "src/services/FootItemService"
import Swal from "sweetalert2"

const { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CFormInput, CFormSelect } = require("@coreui/react")

const UpdateMenu = ({ visible, setVisible, updateData, callBack }) => {

    const [data, setData] = useState({})

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onloadend = () => {
                setData({ ...data, ImageUrl: reader.result });
            };
        }
    }

    const onUpdate = () => {
    
        if (!data.Name || !data.Category || !data.Price) {
            Swal.fire({
                title: "Warning",
                text: "Please enter the item name, category and price.",
                icon: "warning",
                confirmButtonColor: "#006f95"
            })
            return
        }
        const reqObj = {
            name: data.Name,
            id: data.ItemID,
            imageURL: data.ImageURL,
            category: data.Category,
            price: data.Price 
        }
        updateFoodItem(reqObj).then(res => {
            Swal.fire({
                title: "Success",
                text: "Food Item update successfully!",
                icon: "success",
                confirmButtonColor: "#006f95"
            }).then(() => {
                setVisible(false)
                callBack()
            })
        }).catch(err => {
            Swal.fire({
                title: "Failed",
                text: "Failed to update food item please try again!",
                icon: "error",
                confirmButtonColor: "#006f95"
            })
        })
    }

    useEffect(() => {
        if (updateData) {
        
            setData(updateData)
        }
    }, [updateData])

    return <>
        <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
                <CModalTitle>Update Food Item</CModalTitle>
            </CModalHeader>
            <CModalBody>

                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-left m-2">
                        <img src={data.ImageURL} width={140} height={140} />
                    </div>
                    <div className="ml-2">
                        <CFormInput
                            className="mb-3"
                            type="text"
                            label="You can enter the image url or upload image"
                            onKeyUp={e => setData({ ...data, ImageURL: e.target.value })}
                            onChange={e => setData({ ...data, ImageURL: e.target.value })}
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
                    defaultValue={data.Name}
                    onChange={e => setData({ ...data, Name: e.target.value })}
                    placeholder="Kachori"
                />
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Amount in Rs"
                    defaultValue={data.Price}
                    onChange={e => setData({ ...data, Price: e.target.value })}
                    placeholder="20"
                />
                <CFormSelect
                    className="mb-3"
                    label="Select Category"
                    onChange={e => setData({ ...data, Category: e.target.value })}
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
                <CButton color="primary" onClick={onUpdate}>Update Food Item</CButton>
            </CModalFooter>
        </CModal>
    </>
}

export default UpdateMenu