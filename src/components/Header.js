import './Header.css'
import header_image from '../img/jairph-title.jpg'

const Header = () => {
  return (
    <div className='header-box'>
        <div className='header-text'>
            <h1>Explore Graubünden with locals</h1>
            <p className='random-heading'>Graubünden, located in Switzerland, is a beautiful destination known for its stunning landscapes, charming villages, and delicious cuisine.</p>
        </div>
        <div>
            <img src={header_image} alt="Swiss Alps panorama" />
        </div>
        <button>Learn more</button>
    </div>
  )
}

export default Header
