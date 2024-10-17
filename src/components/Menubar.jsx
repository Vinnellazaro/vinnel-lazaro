import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import './Menubar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Menubar = ({ setCurrentPage }) => {
  return (
    <>
        <Navbar sticky="top" expand='sm' bg="light" data-bs-theme="light" className='shadow'>
          <Container fluid>
            <Navbar.Brand onClick={() => setCurrentPage('Home')}>{/*<FontAwesomeIcon icon={faLaptopCo}de} >*/} <span className='logo-name'>Vin</span></Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  <span className='logo-name'>Vin</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                  <Nav.Link onClick={() => setCurrentPage('Home')}><h5 className='fw-light'>Home</h5></Nav.Link>
                  <Nav.Link onClick={() => setCurrentPage('About')}><h5 className='fw-light'>About</h5></Nav.Link>
                  <Nav.Link onClick={() => setCurrentPage('Project')}><h5 className='fw-light'>Project</h5></Nav.Link>
                  <Nav.Link onClick={() => setCurrentPage('Contact')}><h5 className='fw-light'>Contact</h5></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

Menubar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Menubar;
// import PropTypes from 'prop-types';
// import Container from 'react-bootstrap/Container';
// import './Menubar.css'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

// const Menubar = ({ setCurrentPage }) => {
//   return (
//     <Navbar sticky="bottom" collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand onClick={() => setCurrentPage('Home')}><FontAwesomeIcon icon={faLaptopCode} /> <span className='logo-name'>Vin</span></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link onClick={() => setCurrentPage('Home')}>Home</Nav.Link>
//             <Nav.Link onClick={() => setCurrentPage('About')}>About Me</Nav.Link>
//             <Nav.Link onClick={() => setCurrentPage('Contact')}>Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// Menubar.propTypes = {
//   setCurrentPage: PropTypes.func.isRequired,
// };

// export default Menubar;
