import RandomParagraph from "./RandomParagraph";
import data from "../data";

const Header = () => {
  return <section>
      <div>
        <h1>Why to go to Graubünden?</h1>
        <div className="header-img"></div>
        <RandomParagraph text={data.text} id={data.id} />
      </div>
    </section>
};

export default Header;
