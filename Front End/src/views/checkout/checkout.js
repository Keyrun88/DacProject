import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader,CCardFooter ,CCardImage ,CImage,CCardText, CCardTitle, CCardSubtitle ,CCol, CContainer, CForm, CFormInput, CFormLabel, CListGroup, CRow } from "@coreui/react"

const checkout = () => { 
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
          <CImage align="center" rounded src="/images/tea.png" width={100} height={100} />
            
            </CCol>
            <CCol sm="8">
            Tea
            <CCol>
            <body>
    <div class="btn-group mr-1" role="group" aria-label="Second group" >
        <button type="button" class="btn btn-secondary incere" >+</button>
        <button type="button" class="btn btn-secondary" >select</button>
        <button type="button" class="btn btn-secondary decre">-</button>
      </div>
</body>
            </CCol>
            </CCol>
            </CRow>

            <CRow>
          <CCol sm="4">
          <CImage align="center" rounded src="/images/coffee.png" width={100} height={100} />
            </CCol>
            <CCol sm="8">
           Coffee
           <CCol>
           Quantity 1
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
