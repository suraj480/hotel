import 'bootstrap/dist/css/bootstrap.min.css';


import { Navbar, Nav, Container } from 'react-bootstrap';

function Heading() {
  return (
    <div className="row">

      <div className='col-md-12'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container >
            <Navbar.Brand href="#home" style={{ fontFamily:'Brush Script MT',fontSize:'30px', fontWeight: "bold", color: "aqua" }}>Searchie..</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link eventKey={2} href="https://play.google.com/store/apps/details?id=com.oyo.consumer" target="_blank">
                  Install Booking App
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    </div>
  );
}

export default Heading;

