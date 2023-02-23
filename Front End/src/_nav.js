import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilBalanceScale,
  cilDrop,
  cilInfo,
  cilPeople,
  cilShareAlt,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const logout = () => {
  localStorage.clear();
  Navigate('/login')
}

export const _userNav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  }
]

export const _managerNav = [
  {
    component: CNavItem,
    name: 'Admin Dashboard',
    to: '/canteen-manager',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  }
]

