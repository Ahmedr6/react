import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbarr() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link className='el' href="#home">Home</Nav.Link>
            <Nav.Link className='el' href="#features">Features</Nav.Link>
            <Nav.Link className='el' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      

      <br />
    
    </>
  );
}

export default Navbarr;