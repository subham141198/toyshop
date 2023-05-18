import Carousel from "react-bootstrap/Carousel";
import './Banner.css'
function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/title_bg.jpg?id=452"
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
            src="	https://alanzo.ancorathemes.com/wp-content/uploads/2018/01/sliders_1.jpg"
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
            src="https://img.freepik.com/free-photo/dietary-salad-with-mussels-quail-eggs-cucumbers-radish-lettuce-healthy-food-seafood-salad-top-view-flat-lay_2829-6494.jpg?w=1380&t=st=1683023902~exp=1683024502~hmac=28ae585db91833663d0f8cbaf67264073b1e87c18838c8f6c301d173296996dd"
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
