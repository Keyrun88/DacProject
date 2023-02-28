import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/UserDashboard'))
const ManagerDashboard = React.lazy(() => import('./views/CanteenManager/ManagerDashboard'))
const OrderFood = React.lazy(() => import('./views/orderFood/OrderFood'))
const Logout = React.lazy(() => import('./views/auth/Logout'))
const CanteenManagerOrders = React.lazy(() => import('./views/CanteenManager/Orders'))
const CanteenMenu = React.lazy(() => import('./views/CanteenManager/Menu'))
const CanteenDiscount = React.lazy(() => import('./views/CanteenManager/Discount'))
const CanteenFeedback = React.lazy(() => import('./views/CanteenManager/Feedback'))
const history = React.lazy(() => import('./views/History/history'))
const profile = React.lazy(() => import('./views/Profile/profile'))
const checkout = React.lazy(() => import('./views/checkout/checkout'))


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
  { path: '/logout', name: 'Logout', element: Logout},
  { path: '/History', name: 'History', element: history},
  { path: '/Profile', name: 'Profile', element: profile },
  { path: '/checkout', name: 'checkout', element: checkout },

]

export default routes
