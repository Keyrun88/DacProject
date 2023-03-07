import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAlignLeft,
  cilCash,
  cilFastfood,
  cilHistory,
  cilSettings,
  cilSmilePlus,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const logout = () => {
  localStorage.clear();
  Navigate('/login')
}

export const _userNav = [ 
  {
    component: CNavItem,
    name: 'Order Food',
    to: '/order-food/1',
    icon: <CIcon icon={cilFastfood} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'History',
    to: '/history',
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
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
    name: 'Canteen Orders',
    to: '/canteen-orders',
    icon: <CIcon icon={cilFastfood} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Canteen Menu',
    to: '/canteen-menu',
    icon: <CIcon icon={cilAlignLeft} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Canteen Discount',
    to: '/canteen-discount',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Canteen Feedback',
    to: '/canteen-feedback',
    icon: <CIcon icon={cilSmilePlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  }
]

