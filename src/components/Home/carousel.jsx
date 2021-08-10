import { Carousel } from "react-bootstrap";
import "./carousel.css";

const CarouselComponent = () => {
  return (
    <Carousel interval="2000" indicators="false">
      <Carousel.Item>
        <img
          className="carousel_images"
          src="/images/advisory/advisory_nippon.png"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_images"
          src="/images/advisory/advisory_nuvoco.png"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_images"
          src="/images/advisory/advisory_sectoral.png"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
