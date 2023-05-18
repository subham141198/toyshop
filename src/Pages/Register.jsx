import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ChefNavbar from "../Components/Header/Header";
import {Alert } from "react-bootstrap"
import { Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";


function RegisterForm() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [image, setimage] = useState("")
  const [error, seterror] = useState("")
  const { SignUp } = useContext(AuthContext);
  const navigate = useNavigate()
 
 const handleSubmit = async(e) =>{
      e.preventDefault();
      seterror("")
      try{
      const useCreds =  await  SignUp(email,password)
      const user = useCreds.user
      await updateProfile(user, {
        photoURL: image,
        displayName: name
      });
      navigate("/")
      }
      catch(err){
        e.target.reset()
        seterror(err.message)
      }
  };
  return (
    <>  <ChefNavbar/>
        <div className="container container-width">
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="col-12 formContainer">

          <h1 className="text-center">Register Here</h1>
          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter your Name" onChange={ (e)=> {setname(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" onChange={ (e)=> {setemail(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={ (e)=> {setpassword(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control type="text" placeholder="UserImageLink" onChange={ (e)=> {setimage(e.target.value)}}/>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Register
            </Button>
          </Form>

          <span className="text-center">Already Have an account </span>
          <Link to="/login">Login here</Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default RegisterForm;
