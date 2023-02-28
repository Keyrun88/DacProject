import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/UserDashboard'))
const ManagerDashboard = React.lazy(() => import('./views/CanteenManager/ManagerDashboard'))
const OrderFood = React.lazy(() => import('./views/orderFood/OrderFood'))
const Logout = React.lazy(() => import('./views/auth/Logout'))
const CanteenManagerOrders = React.lazy(() => import('./views/CanteenManager/Orders'))
const CanteenMenu = React.lazy(() => import('./views/CanteenManager/Menu'))
const CanteenDiscount = React.lazy(() => import('./views/CanteenManager/Discount'))
const CanteenFeedback = React.lazy(() => import('./views/CanteenManager/Feedback'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/order-food', name: 'Dashboard', element: OrderFood },
  { path: '/canteen-manager', name: 'Canteen Manager Dashboard', element: ManagerDashboard },
  { path: '/canteen-orders', name: 'Canteen Orders', element: CanteenManagerOrders },
  { path: '/canteen-menu', name: 'Canteen Menu', element: CanteenMenu },
  { path: '/canteen-discount', name: 'Canteen Discount', element: CanteenDiscount },
  { path: '/canteen-feedback', name: 'Canteen Feedback', element: CanteenFeedback },
  { path: '/logout', name: 'Logout', element: Logout}
]

export default routes
