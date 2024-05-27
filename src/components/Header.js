import "./Header.css";
// import header_image from "../img/jairph-title.jpg";
import RandomParagraph from "./RandomParagraph";
import data from "../data";
import titleImage from "../img/jairph-title.jpg"


const Header = () => {
  return <div className="header-container">
      <div className="header-item">
        <h1>Why to go to Graubünden?</h1>
        <div className="header-img"></div>
        <RandomParagraph text={data.text} id={data.id} />
      </div>
    </div>
};

export default Header;
