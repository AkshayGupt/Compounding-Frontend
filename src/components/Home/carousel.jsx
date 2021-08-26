import { Carousel } from "react-bootstrap";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import "./carousel.css";

const CarouselComponent = () => {
  const iconForCarousel = (
    <div style={{ width: "20%", padding: 45, textAlign: "center" }}>
      <AnnouncementIcon
        style={{ transform: "scale(2.5)", justifyContent: "center" }}
      />
    </div>
  );
  return (
    <Carousel interval="2000" indicators={false} controls={false} >
      <Carousel.Item>
        <div className="carousel_container advisory-one">
          <div style={{ width: "80%" }}>
            <p> Advisory : Aug 8, 2021 4:35 PM</p>
            <strong>
              <h5>Nippon India Flexi Cap Fund NFO Closes Soon!</h5>
            </strong>
            <p> View Insights. Book Now!</p>
          </div>
          {iconForCarousel}
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel_container advisory-two">
          <div style={{ width: "80%" }}>
            <p> Advisory : 9 hours ago</p>
            <strong>
              <h5>Nuvoco Vistas IPO: Analysis !</h5>
            </strong>
            <p> IPO is open till Wednesday</p>
          </div>
          {iconForCarousel}
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel_container advisory-three">
          <div style={{ width: "80%" }}>
            <p> Advisory : Aug 2, 2021 3:04 PM</p>
            <strong>
              <h5>Earn ₹ 4.67 Lac extra on your saving account</h5>
            </strong>
            <p> Check Now !</p>
          </div>
          {iconForCarousel}
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel_container advisory-four">
          <div style={{ width: "80%" }}>
            <p> Advisory : 2 hours ago</p>
            <strong>
              <h5>Chemplast Sanmar IPO: Analysis!</h5>
            </strong>
            <p> IPO opens tomorrow!</p>
          </div>
          {iconForCarousel}
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
