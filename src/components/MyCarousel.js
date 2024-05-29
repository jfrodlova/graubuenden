import "./MyCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/fabrizio-conti-b5rPuIBFeME-unsplash.jpg";
import img2 from "../img/roberto-nickson-YCW4BEhKluw-unsplash.jpg";
import img3 from "../img/claudio-schwarz-8EfaUXB8qw4-unsplash.jpg";
import img4 from "../img/s-b-vonlanthen-U3rnc_wrtMc-unsplash.jpg";

const MyCarousel = () => {
  return (
      <Carousel className="carousel-box" data-bs-theme="light" slide={true}>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={img1} alt="alpine ibex" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={img2} alt="woman in a bathtub" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={img3} alt="raclette cheese" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={img4}
            alt="little girl hiking in mountains"
          />
        </Carousel.Item>
      </Carousel>
  );
};

export default MyCarousel;