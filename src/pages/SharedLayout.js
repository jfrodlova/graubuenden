import { Outlet } from "react-router-dom"
import NavbarB from "../components/NavbarB"
import Footer from "../components/Footer"

const SharedLayout = () => {
  return (
    <div>
        <NavbarB />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout
