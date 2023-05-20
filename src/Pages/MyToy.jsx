import React from 'react';
import { useContext } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";
import UpdateToyModal from '../Components/UpdateToyModal';



const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [toys, settoys] = useState([]);
    
    const [modalShow, setModalShow] = useState(false);
    const [selectedToy, setSelectedToy] = useState(null);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                settoys(data);
            });
    }, [user, control]);

    const handleToyUpdate = (data) => {
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/updatetoy/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    setControl(!control);
                }
                console.log(result);
            });
    };

    const openModal = (toy) => {
        setSelectedToy(toy);
        setModalShow(true);
    };

    const closeModal = () => {
        setModalShow(false);
    };



    return (
        <div>
            <div className="my-jobs-container">
                <h1 className="text-center p-4 ">ALL My Toys</h1>
                <Table striped bordered hover className="container">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys?.map((toy, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Button variant="primary" onClick={() => openModal(toy)}>
                                        Edit
                                    </Button>


                                </td>
                                <td>
                                    {" "}
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                        ))}
                        {
                            selectedToy && (

                                <UpdateToyModal
                                    show={modalShow}
                                    onHide={closeModal}
                                    toy={selectedToy}
                                    handleToyUpdate={handleToyUpdate}
                                />
                            )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyToy;