import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/UserDashboard'))
const ManagerDashboard = React.lazy(() => import('./views/CanteenManager/ManagerDashboard'))
const OrderFood = React.lazy(() => import('./views/orderFood/OrderFood'))
const Logout = React.lazy(() => import('./views/auth/Logout'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/order-food', name: 'Dashboard', element: OrderFood },
  { path: '/canteen-manager', name: 'Canteen Manager Dashboard', element: ManagerDashboard },
  { path: '/logout', name: 'Logout', element: Logout}
]

export default routes
