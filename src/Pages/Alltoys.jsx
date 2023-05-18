import { useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function AllToysComponent() {
   const [alltoys, setalltoys] = useState([])
  useEffect(() => {
    fetch("https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/alltoys")
      .then((Response) => Response.json())
      .then((data) => setalltoys(data));
  }, []);


  return (

  {
    alltoys
  }
    <Card>
      <div className="row">
        <div className="col-md-4">
          {/* <Card.Img variant="top" src={daskljhdkjas} /> */}
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>kajshdkjas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><span className="fw-bold" >Experience: </span>ajshdkjashd </ListGroup.Item>
            <ListGroup.Item><span className="fw-bold" >Likes: </span>asdjlajskd </ListGroup.Item>
            <ListGroup.Item><span className="fw-bold" >Recipies: </span>askdgasjkd </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {/* <Card.Link className="btn btn-warning" href={'/details/' + porps.chefdata.id}>View Recipes</Card.Link> */}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default AllToysComponent;
