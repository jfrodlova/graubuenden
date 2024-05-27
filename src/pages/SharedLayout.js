import { Outlet } from "react-router-dom"
import NavbarB from "../components/NavbarB"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"

const SharedLayout = () => {
  return (
    <div>
        <NavbarB />
        <Outlet> 
          <Container fluid />
        </Outlet>
        <Footer />
    </div>
  )
}

export default SharedLayout
