import './Navbar.css'
import { GiMountains } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav>
    <div className='nav-icon-and-heading'>
      <GiMountains className='icon' size={100} />
      <h2>Feel Graubünden</h2>
    </div>
  <ul>
    <li><Link to="/">About</Link></li>
    
    <li><Link to="/contact"></Link>Contact</li>
  </ul>
</nav>
}

export default Navbar
