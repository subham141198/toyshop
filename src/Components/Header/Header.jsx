import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";



function Header( props) {
  const { user } = useContext(AuthContext);
  const { LogOut } = useContext(AuthContext);
  const location = useLocation();
  
  const navigate = useNavigate();

  const tooltip = (
    <Tooltip id="tooltip" placement="left">
      {user?.displayName || null}
    </Tooltip>
  );



  const handleLogout = () => {
    LogOut().then(() => {
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Toy Bazzar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
            <Nav className="mr-auto"></Nav>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/alltoys">All Toys</Nav.Link>
              {user && <>
                <Nav.Link href="/new">Add a Toy </Nav.Link>
                <Nav.Link href="/mytoys">My Toys</Nav.Link>
              </>
              }

              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Nav className="mr-auto"></Nav>
            <Nav>
              {
                user ? <><NavDropdown title={<OverlayTrigger placement="left" overlay={tooltip}><img className="rounded-circle" src={user.photoURL} alt="Profile" width={35} /></OverlayTrigger>} id="collasible-nav-dropdown">
                  <NavDropdown.Item>{user.email}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                </NavDropdown></>
                  : <Nav.Link href="/login">Login</Nav.Link>

              }
            </Nav>
            {
              location.pathname === '/alltoys' && 
              <>
                <Form onSubmit={(e)=>props.handleSubmit(e)} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => props.setsearch(e.target.value.toLowerCase())}
                />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>
              </>
              } 
          
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
