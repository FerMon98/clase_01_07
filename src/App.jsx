import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";



function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/Cursos" className='nav-link'>Cursos</Link>
              <Link to="/Admin" className='nav-link'>Admin</Link>
              <Link to="/Login" className='nav-link'>Sign In</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      <Container style={{backgroundColor: "lightyellow", borderRadius: "15px", padding: "1rem"}}>
        <Outlet />
      </Container>



    </>
  )
}

export default App