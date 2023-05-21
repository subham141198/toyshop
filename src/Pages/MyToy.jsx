import React from 'react';
import { useContext } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2'
import Button from "react-bootstrap/Button";
import UpdateToyModal from '../Components/UpdateToyModal';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';



const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [toys, settoys] = useState([]);
    const [updatingdata, setupdatingdata] = useState(false)
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
        setupdatingdata(true);
        fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/updatetoy/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((result) => {
                if (result.modifiedCount > 0) {
                    setControl(!control);
                    setupdatingdata(false);
                    Swal.fire({
                        title: 'Success!',
                        text: `${data.toyName} has been updated`,
                        icon: 'success',
                        confirmButtonText: 'Dismiss'
                    });

                }

            }).catch((error) => {

                setupdatingdata(false);
            });
    };

    const openModal = (toy) => {
        setSelectedToy(toy);
        setModalShow(true);
    };

    const closeModal = () => {
        setModalShow(false);
    };

    function handleToyDelete(e) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-shop-backend-debabratachakraborty880-gmailcom.vercel.app/deletetoy/${e.target.dataset.toyId}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((result) => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const filteredToys = toys.filter(function (value, index, arr) {
                                return value._id != e.target.dataset.toyId
                            })
                            settoys(filteredToys)
                        }
                    }).catch((error) => {

                    });
            }
        })

    }



    return (
        <>
            <Header></Header>
            <div className="my-jobs-container">
                <h1 className="text-center p-4 ">My Uploaded Toys</h1>
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
                                    <Button data-toy-id={toy._id} onClick={handleToyDelete}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                        {
                            selectedToy && (

                                <UpdateToyModal
                                    updatingdata={updatingdata}
                                    show={modalShow}
                                    onHide={closeModal}
                                    toy={selectedToy}
                                    handleToyUpdate={handleToyUpdate}
                                />
                            )}
                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyToy;