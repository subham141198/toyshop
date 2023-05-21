import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Spinner from 'react-bootstrap/Spinner';
import ReactStars from "react-rating-stars-component";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import Banner from '../Components/Banner/Banner';




function Home() {
  const [loadingdata, setloadingdata] = useState(false)
  const [alltoys, setalltoys] = useState([])
  const [activeTab, setActiveTab] = useState("transformer")
  const [categoryToys, setcategoryToys] = useState([])
  const [modalShow, setModalShow] = useState(false);
  let allcategory = [];


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
    const url = `https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/categorytoys/${activeTab}`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setcategoryToys(data);
        setloadingdata(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setloadingdata(false);

      });
  }, [activeTab]);

  alltoys.map(alltoy => (
    allcategory = allcategory.includes(alltoy.category) ? [...allcategory] : [...allcategory, alltoy.category]
  ))
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      {
        <Container>
          <h1 className="p-4 text-center ">Shop By Category</h1>
          <Tabs defaultActiveKey={allcategory[0]} id="fill-tab-example" className="mb-3" fill onClick={(e) => { console.log(e); setActiveTab(e.target.innerText.toLowerCase()) }}
          >
            {
              allcategory.map((category, index) => (
                <Tab key={index} eventKey={category} title={category.charAt(0).toUpperCase() + category.slice(1)} >
                  <div className="row row-cols-lg-5">
                    {loadingdata ? <div className="row  justify-content-center align-items-center"><Spinner animation="border" variant="primary" size="lg" /></div> :
                      <>
                        {categoryToys.map((singleToy, index) => (

                          <div className="col" key={index}>
                            <Card  >
                              <Card.Img height={300} variant="top" src={singleToy.imageurl} />
                              <Card.Body>
                                <Card.Title>{singleToy.toyName}</Card.Title>
                                <ReactStars count={5} edit={false} value={parseInt(singleToy.rating)} size={24} activeColor="#ffd700"
                                />
                                <Link className="btn btn-outline-primary" to="/view" state={singleToy} >Go somewhere</Link>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </>
                    }
                  </div>
                </Tab>
              ))
            }

          </Tabs>
      
        </Container>
      

      }
       <h2 className="p-4 text-center" >Gallery</h2>
          <div className="d-flex">
          
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        </div>

      <Footer></Footer>

    </>
  );

}

export default Home;
