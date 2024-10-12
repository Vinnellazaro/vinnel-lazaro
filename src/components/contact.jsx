import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faFacebook,faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
  return (
    <Container>
      <div className='d-flex flex-xl-row flex-lg-row flex-md-column flex-column align-items-center pt-5 pb-5 text-secondary'>
        <div className="flex-fill p4">
            <a className='text-decoration-none text-secondary' href="mailto:vinnellazarus@gmail.com">
                <h6><FontAwesomeIcon icon={faEnvelope} /> vinnellazarus@gmail.com</h6>
            </a>
            <h6><FontAwesomeIcon icon={faLocationDot} /> San Isidro, Taytay Rizal</h6>
        </div>
        <div className="flex-fill text-secondary p4 fs-3">
            <a className='me-3 text-decoration-none text-secondary' href="https://www.linkedin.com/in/vinnel-lazaro-75a784147/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className='me-3 text-decoration-none text-secondary' href="https://www.facebook.com/vinnellazarus/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className='me-3 text-decoration-none text-secondary' href="https://github.com/Vinnellazaro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
      </div>
    </Container>
  )
}
