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
    const [searchText, setSearchText] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                settoys(data);
            });
    }, [user, control]);
    const handleSearch = () => {
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/toybyname/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setJobs(data);
            });
    };

    const handleToyUpdate = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/updateJob/${data._id}`, {
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

    return (
        <div>
            <div className="my-jobs-container">
                <h1 className="text-center p-4 ">ALL My Toys</h1>
                <div className="search-box p-2 text-center">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-1"
                    />{" "}
                    <Button onClick={handleSearch}>Search</Button>
                </div>
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
                            <tr>
                                <td>{index + 1}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Edit
                                    </Button>

                                    <UpdateToyModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        toy={toy}
                                        handleToyUpdate={handleToyUpdate}
                                    />
                                </td>
                                <td>
                                    {" "}
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyToy;