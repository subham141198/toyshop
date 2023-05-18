import Carousel from "react-bootstrap/Carousel";
import './Banner.css'
function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://www.brickfinder.net/wp-content/uploads/2020/02/DnVT5pOX4AEfOlq-1-1024x576.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wedding and Galals Event</h3>
            <p>If you want to become a great chef, you have to work with great chefs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://live.staticflickr.com/4128/5125579893_b8a1e3ea2d_b.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Special Events </h3>
            <p>Being a chef would be too much hard work.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://static.seibertron.com/images/toys/files/154/hasbro-cliffjumper-138.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Cooking Class</h3>
            <p>
            I always knew I wanted to be a chef.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
