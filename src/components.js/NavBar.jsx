import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const NavBar = () => {
  return (
    <header>
      <div className='barra'>
    <Navbar  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda de ropa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Articulos</Nav.Link>
            <NavDropdown title="Ropa deportiva" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Buzos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Calzados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div> 
</header>
              
             
                
    )
 }
            
              
  
    

export default NavBar