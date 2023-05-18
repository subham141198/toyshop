import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Components/Header/Header";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import { Alert } from "react-bootstrap"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";






function LoginForm() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const { Login, signInWithGoogle} = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"


  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    seterror("")
    try {
      await Login(email, password)
      navigate(from, { replace: true })
    }
    catch (err) {
      e.target.reset()
      seterror(err.message)

    }
  };


  const handleGoogleSignIn = async () => {
    seterror("")
    try {
      await signInWithGoogle()
      navigate(from, { replace: true })
    }
    catch (err) {
      seterror(err.message)

    }
  }

  



  return (
    <>  <Header />
      <div className="container container-width ">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-12 formContainer card bg-dark">

            <h1 className="text-center text-white">Login Here</h1>
            {error && <Alert className="alert-danger" varient="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
              </Form.Group>
              <Button className="w-100 loginbutton" variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <div className="row">
              <div className="col">
                <Button className="w-100 mt-2 " variant="success" onClick={handleGoogleSignIn}>
                  <i className="fa-brands fa-google"></i>
                </Button>
              </div>
            </div>

            <div className="row">
              <div className="col">
              <span className="text-center"> Dont Have an Account? </span>
            <Link to="/register">Create here</Link>
              </div>

            
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

