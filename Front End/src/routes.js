import React from 'react'

const ManagerDashboard = React.lazy(() => import('./views/CanteenManager/ManagerDashboard'))
const OrderFood = React.lazy(() => import('./views/OrderFood/OrderFood'))
const Logout = React.lazy(() => import('./views/auth/Logout'))
//const Logout = React.lazy(() => import('./views/auth/Logout'))
const CanteenManagerOrders = React.lazy(() => import('./views/CanteenManager/Orders'))
const CanteenMenu = React.lazy(() => import('./views/CanteenManager/Menu'))
const CanteenDiscount = React.lazy(() => import('./views/CanteenManager/Discount'))
const CanteenFeedback = React.lazy(() => import('./views/CanteenManager/Feedback'))
const History = React.lazy(() => import('./views/History/History'))
const Profile = React.lazy(() => import('./views/Profile/profile'))
const Settings = React.lazy(() => import('./views/Setting/Settings'))
const OrderDetails = React.lazy(() => import('./views/OrderFood/OrderDetails'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/order-food/:id', name: 'Order Food', element: OrderFood },
  { path: '/canteen-manager', name: 'Canteen Manager Dashboard', element: ManagerDashboard },
  { path: '/canteen-orders', name: 'Canteen Orders', element: CanteenManagerOrders },
  { path: '/canteen-menu', name: 'Canteen Menu', element: CanteenMenu },
  { path: '/canteen-discount', name: 'Canteen Discount', element: CanteenDiscount },
  { path: '/canteen-feedback', name: 'Canteen Feedback', element: CanteenFeedback },
  { path: '/logout', name: 'Logout', element: Logout},
  { path: '/History', name: 'History', element: History},
  { path: '/Profile', name: 'Profile', element: Profile },
  // { path: '/checkout:id', name: 'checkout', element: Checkout },
  { path: '/setting', name: 'setting', element: Settings},
  { path: '/order-details/:id', name: 'Order Details', element: OrderDetails}
  

]

export default routes
