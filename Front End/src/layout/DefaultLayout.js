import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login")
    } else {
      if (JSON.parse(localStorage.getItem("user")).IsCanteenManager) {
        navigate("/canteen-manager")
      } else {
        navigate("/order-food/1")
      }
    }
  }, [])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
