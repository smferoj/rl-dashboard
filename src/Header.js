import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecom</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/add">Add Product </Link>
            <Link to ="/update">Update Prodcut</Link>
            <Link to ="/login">Login</Link>
            <Link to ="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header