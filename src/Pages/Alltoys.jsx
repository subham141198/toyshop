
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';
import { Container, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';


export default function AllToysComponent() {
    const [loadingdata, setloadingdata] = useState(false)
    const [alltoys, setalltoys] = useState([])
    const [search, setsearch] = useState("")
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(search);
    }

    useEffect(() => {
        setloadingdata(true);
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/alltoys`)
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
                setloadingdata(false);
            });
    }, []);

    useEffect(() => {
        setloadingdata(true);
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/toybyname/${search}`)
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
                setloadingdata(false);
            });
    }, [search]);

    return (
        <>
            <Header handleSubmit={handleSubmit} setsearch={setsearch}/>
            <Container>
                {
                    loadingdata? <Spinner animation="border" variant="primary" /> :
                
                <div className="row row-cols-md-3  row-cols-1 gy-2">
                    {
                        alltoys.map((singleToy, index) => (
                            <div key={singleToy._id}className="col">
                                <Card>
                                    <Card.Img height={400} variant="top" src={singleToy.imageurl} />
                                    <Card.Body>
                                        <Card.Title>{singleToy.toyName}<h5>by {singleToy.sname}</h5></Card.Title>
                                        <Card.Text>
                                            {singleToy.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item><span className="fw-bold" >Price: </span> &#36;{singleToy.price} </ListGroup.Item>
                                        <ListGroup.Item><span className="fw-bold" >Catagory: </span>{singleToy.category}</ListGroup.Item>
                                        <ListGroup.Item><span className="fw-bold" >Available Quantity: </span>{singleToy.quantity} </ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Link className="btn btn-outline-primary"  to="/view" state={singleToy} >View Details</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                </div>
}
            </Container>
            <Footer />
        </>
    );
}