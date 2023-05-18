import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button, Row, Col, Container } from "react-bootstrap";

import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

export default function NewToy() {

    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch('https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/newtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your toy is added to the store',
                        icon: 'success',
                        confirmButtonText: 'Dismiss'
                      })
                }
            })
    };


    

    return (
        <>
            <Header />

            <Row>
                <Col className="bg-dark d-flex justify-content-center align-items-center">
                    <h1 className="text-white"> Add New Toy</h1>
                </Col>
                <Col>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingImageUrl"
                                        label="Image Url"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            name="imageurl"
                                            size="lg"
                                            type="text"
                                            placeholder="Image Url Of the Toy"
                                            {...register("imageurl", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingToyName"
                                        label="Name Of the Toy"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            name="toyName"
                                            size="lg"
                                            type="text"
                                            placeholder="Toy Name"
                                            {...register("toyName", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingSellerName"
                                        label="Seller Name"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            name="sname"
                                            size="lg"
                                            type="text"
                                            value={user.displayName}
                                            placeholder="Seller Name"
                                            {...register("sname", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingEmail"
                                        label="Seller Email"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            name="email"
                                            size="lg"
                                            type="email"
                                            value={user.email}
                                            placeholder="Seller Email"
                                            {...register("email", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingCategory"
                                        label="Sub Category"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            name="category"
                                            size="lg"
                                            type="text"
                                            placeholder="Sub Category"
                                            {...register("category", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingPrice"
                                        label="Price"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            name="price"
                                            size="lg"
                                            type="number"
                                            placeholder="Price"
                                            {...register("price", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingRating"
                                        label="Rating"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            size="lg"
                                            type="number"
                                            placeholder="Rating (out of 5)"
                                            {...register("rating", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingQuantity"
                                        label="Available Quantity"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            size="lg"
                                            type="number"
                                            placeholder="Quantity"
                                            {...register("quantity", { required: true })}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <FloatingLabel
                                controlId="floatingDesctiption"
                                label="Description"
                                className="mb-3"
                            >
                                <Form.Control
                                    size="lg"
                                    type="textarea"
                                    placeholder="Description"
                                    {...register("description", { required: true })}
                                />
                            </FloatingLabel>
                            <Button
                                className="mb-3 px-3 rounded-bottom"
                                type="submit"
                                variant="outline-primary"
                            >
                                Add
                            </Button>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
            <Footer />
        </>
    );
}
