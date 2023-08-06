import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div className="container">
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default MainLayout
