// import './Navbar.css'
// import { GiMountains } from "react-icons/gi";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className='flex-container'>
//       <div className="flex-icon">
//         <NavLink to="/">
//           <GiMountains className="icon" size={100} />
//         </NavLink>
//       </div>
//       <div>
//         <NavLink>Explore Switzerland</NavLink>
//       </div>
        
//         <ul>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//         </ul>
      
//     </nav>
//   );
// }

// export default Navbar
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { GiMountains } from "react-icons/gi";

function NavbarB() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><GiMountains className="icon" size={80} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./">About</Nav.Link>
            <Nav.Link href="/weather">Weather</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarB;