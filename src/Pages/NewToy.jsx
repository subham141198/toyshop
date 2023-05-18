import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { Card } from "react-bootstrap";


export default function NewToy() {
    const [imageUrl, setimageUrl] = useState("")
    const [toyName, settoyName] = useState("")
    const [subCategory, setsubCategory] = useState("")
    const [sellerName, setsellerName] = useState("")
    const [price, setprice] = useState("")
    const [quantity, setquantity] = useState("")
    const [sellerEmail, setsellerEmail] = useState("")
    const [rating, setrating] = useState("")
    const [description, setdescription] = useState("")

    function handleAddNewToy() {

    }
    return (
        <>
            <Header />

            <Row>
                <Col className="bg-dark d-flex justify-content-center align-items-center">
                    <h1 className="text-white"> Add New Toy</h1>
                </Col>
                <Col>
                    <Card.Body>
                        <Form onSubmit={handleAddNewToy}>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingImageUrl" label="Image Url" className="mb-3">
                                        <Form.Control name="imageurl" size="lg" type="text" placeholder="Image Url Of the Toy" onChange={ (e)=> {setimageUrl(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingToyName" label="Name Of the Toy" className="mb-3">
                                        <Form.Control name="toyName" size="lg" type="text" placeholder="Toy Name" onChange={ (e)=> {settoyName(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingSellerName" label="Seller Name" className="mb-3">
                                        <Form.Control name="sname" size="lg" type="text" placeholder="Seller Name" onChange={ (e)=> { setsellerName(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingEmail" label="Seller Email" className="mb-3">
                                        <Form.Control name="email" size="lg" type="email" placeholder="Seller Email" onChange={ (e)=> {setsellerEmail(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingCategory" label="Sub Category" className="mb-3">
                                        <Form.Control name="category" size="lg" type="text" placeholder="Sub Category" onChange={ (e)=> {setimageUrl(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingPrice" label="Price" className="mb-3">
                                        <Form.Control name="price" size="lg" type="number" placeholder="Price" onChange={ (e)=> {setprice(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingRating" label="Rating" className="mb-3">
                                        <Form.Control size="lg" type="number" placeholder="Rating (out of 5)" onChange={ (e)=> {setrating(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingQuantity" label="Available Quantity" className="mb-3">
                                        <Form.Control size="lg" type="number" placeholder="Quantity" onChange={ (e)=> {setquantity(e.target.value)}}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <FloatingLabel controlId="floatingDesctiption" label="Description" className="mb-3">
                                <Form.Control size="lg" type="textarea" placeholder="Description" onChange={ (e)=> {setdescriptio(e.target.value)}}/>
                            </FloatingLabel>
                            <Button className="mb-3 px-3 rounded-bottom" type="submit" variant="outline-primary">Add</Button>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
            <Footer />
        </>
    );
}