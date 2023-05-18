import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Spinner from 'react-bootstrap/Spinner';
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2'

function AllToysComponent() {
  const [loadingdata, setloadingdata] = useState(false)
  const [alltoys, setalltoys] = useState([])

  useEffect(() => {
    setloadingdata(true);
    fetch("https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/alltoys")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setalltoys(data);
        setloadingdata(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setloadingdata(false);
        Swal.fire({
          icon: 'error',
          title: 'Error fetching data',
          text: error.message,
          confirmButtonText: 'Dismiss'
        })
        
      });
  }, []);


  console.log(alltoys)
  return (
    <>
      <Header></Header>
      {
        loadingdata ? <Spinner animation="border" variant="primary" /> :

          alltoys.map((alltoy, index) => (

            <Card key={alltoy._id} className="mb-3">
              <div className="row">
                <div className="col-md-4">
                  <Card.Img className="img-fluid" variant="top" src={alltoy.imageurl} />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title>{alltoy.toyName}</Card.Title>
                    <Card.Text>
                      by {alltoy.sname}
                    </Card.Text>
                    <Card.Title> &#36; {alltoy.price}</Card.Title>
                    <ReactStars
                      count={5}
                      edit={false}
                      value={parseInt(alltoy.rating)}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold" >Available Quantity: </span>{alltoy.quantity}</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold" >Recipies: </span>askdgasjkd </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    {/* <Card.Link className="btn btn-warning" href={'/details/' + porps.chefdata.id}>View Recipes</Card.Link> */}
                  </Card.Body>
                </div>
              </div>
            </Card>

          ))
      }
      <Footer></Footer>
    </>
  );
}

export default AllToysComponent;
