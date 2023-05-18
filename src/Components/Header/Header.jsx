import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown, OverlayTrigger,Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


function Header() {
  const { user } = useContext(AuthContext);
  const { LogOut } = useContext(AuthContext);
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
              <Nav.Link href="/blog">All Toys</Nav.Link>
              { user && <>
              
                  <Nav.Link href="/blog">Add a Toy </Nav.Link>
                  <Nav.Link href="/blog">My Toys</Nav.Link>
                  </>
              }
              
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/favourite">Favourite</Nav.Link>
            </Nav>
            <Nav className="mr-auto"></Nav>
            <Nav>
              {
                user ? <><NavDropdown title={<OverlayTrigger placement="left" overlay={tooltip}><img className="rounded-circle"src={user.photoURL} alt="Profile" width={35} /></OverlayTrigger>} id="collasible-nav-dropdown">
                  <NavDropdown.Item>{user.email}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                </NavDropdown></>
                  : <Nav.Link href="/login">Login</Nav.Link>
                    
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
