import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBalanceScale,
  cilDrop,
  cilInfo,
  cilPeople,
  cilShareAlt,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  }
]

export default _nav
