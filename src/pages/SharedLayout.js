import { Outlet } from "react-router-dom"
import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"

const SharedLayout = () => {
  return (
    <div>
        <MyNavbar />
        <Container >
          <Outlet />
        </Container>
        <Footer />
    </div>
  )
}

export default SharedLayout
