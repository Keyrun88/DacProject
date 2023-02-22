import React from 'react'
import { CBadge, CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter> 
      <div className="ms-auto">
        <span className="me-1"><CBadge color='primary'></CBadge></span>
        {/* <a href="http://vishal-surgade.unaux.com/" target="_blank" rel="noopener noreferrer">
          Vishal Surgade
        </a> */}
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
