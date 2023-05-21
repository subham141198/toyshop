
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


export default function AllToysComponent() {
    const [loadingdata, setloadingdata] = useState(false)
    const [alltoys, setalltoys] = useState([])
    const [search, setsearch] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
    }

    useEffect(() => {
        setloadingdata(true);
        fetch(`https://toyserver-debabratachakraborty880-gmailcom.vercel.app/alltoys`)
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
        fetch(`https://toyserver-debabratachakraborty880-gmailcom.vercel.app/toybyname/${search}`)
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
            <Header handleSubmit={handleSubmit} setsearch={setsearch} />
            <Table striped bordered hover size="sm">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Toy Name</th>
                        <th scope="col">Toy Image</th>
                        <th scope="col">Seller Name</th>
                        <th scope="col">Seller Email</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltoys.map((singleToy, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{singleToy.toyName}</td>
                                <td className='d-flex justify-content-center'><img width={50} className="img-fluid" src={singleToy.imageurl} alt="" srcset="" /></td>
                                <td>{singleToy.sname}</td>
                                <td>{singleToy.email}</td>
                                <td>{singleToy.price}</td>
                                <td>{singleToy.category}</td>
                                <td><ReactStars count={5} edit={false} value={parseInt(singleToy.rating)} size={24} activeColor="#ffd700" /></td>
                                <td><Link className="btn btn-outline-primary"  to="/view" state={singleToy} >View Details</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Footer />
        </>
    );
}