import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer/Footer"


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
