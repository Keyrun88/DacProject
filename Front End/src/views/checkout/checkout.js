import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardFooter, CCardImage, CImage, CCardText, CCardTitle, CCardSubtitle, CCol, CContainer, CForm, CFormInput, CFormLabel, CListGroup, CRow } from "@coreui/react"


function checkout(props) {

  let [quantity, setquantity] = useState(1);

  let handleIncrement = () => {
    if (quantity < 10) {
      setquantity(quantity + 1);
    }
  };
  let handleDecrement = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    }
  };


  let [cquantity, csetquantity] = useState(1);

  let chandleIncrement = () => {
    if (cquantity < 10) {
      csetquantity(cquantity + 1);
    }
  };
  let chandleDecrement = () => {
    if (cquantity > 0) {
      csetquantity(cquantity - 1);
    }
  };






  return <>
    <CContainer fluid>
      <CRow>
        <CCol sm="7">
          <CCard>
            <CCardHeader>
              Order Details
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol sm="4">
                  <CImage align="center" rounded src="/images/tea.png" width={70} height={70} />

                </CCol>
                <CCol sm="8">
                  Tea  Quantity
                  <CCol>

                    <body>
                      <div className="btn-group mr-1" role="group" aria-label="Second group" >
                        <button type="button" onClick={handleDecrement} className="btn btn-secondary decre" >-</button>
                        <div className="form-control text-centre">{quantity}</div>
                        <button type="button" onClick={handleIncrement} className="btn btn-secondary incre">+</button>
                      </div>
                    </body>

                  </CCol>
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="4">
                  <CImage align="center" rounded src="/images/coffee.png" width={70} height={70} />
                </CCol>
                <CCol sm="8">
                  Coffee Quantity
                  <CCol>

                    <body>
                      <div className="btn-group mr-1" role="group" aria-label="Second group" >
                        <button type="button" onClick={chandleDecrement} className="btn btn-secondary decre" >-</button>
                        <div className="form-control text-centre">{cquantity}</div>

                        <button type="button" onClick={chandleIncrement} className="btn btn-secondary incre">+</button>
                      </div>
                    </body>
                  </CCol>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol sm="4">
          <CCard>
            <CCardHeader>
              PRICE DETAILS
            </CCardHeader>
            <CCardBody>
              <CCardText>
                <CCol>
                  Price
                </CCol>
              </CCardText>
            </CCardBody>
            <CCardFooter>
              Total Amount =
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>

  </>
}

export default checkout
