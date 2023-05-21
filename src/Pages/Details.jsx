import { useLocation } from "react-router-dom"
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ReactStars from "react-rating-stars-component";
import { Container, ListGroup } from "react-bootstrap";


function Detials() {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <Header />
      <Container>
        <div className="row">
          <div className="col-sm-6 p-0 d-flex justify-content-center ">
            <img className="img-fluid" src={location.state.imageurl} alt="" />
          </div>
          <div className="col-sm-6 infoContainer">
            <div className="row">
              <div className="col-12">
                <h2 className="banner-title text-center py-3"><span className="YellowColor">{location.state.toyName}</span> </h2>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p className="banner-bio">{location.state.description}</p>
                </div>
              </div>
              <div className="row">
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-white list-style"><strong className="YellowColor"> Seller Name: </strong> {location.state.sname}</ListGroup.Item>
                  <ListGroup.Item className="text-white list-style"><strong className="YellowColor"> Seller Email: </strong> {location.state.email}</ListGroup.Item>
                  <ListGroup.Item className="text-white list-style"><strong className="YellowColor"> Price: </strong> &#36; {location.state.price}</ListGroup.Item>
                  <ListGroup.Item className="text-white list-style"><strong className="YellowColor"> Available Quantity: </strong> {location.state.quantity}</ListGroup.Item>
                  <ListGroup.Item className="list-style"><strong className="YellowColor">Rating: </strong><ReactStars count={5} edit={false} value={parseInt(location.state.rating)} size={24} activeColor="#ffd700" /></ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </Container>


      <Footer />

    </>

  );
}
export default Detials;