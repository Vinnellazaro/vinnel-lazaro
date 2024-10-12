import { SKILLS } from '../data';
import { ListGroup, Row, Col, Badge } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
    return (
        <>
        <div className='skills text-center'>
          <h1>Skills</h1>
          <div className=' d-flex justify-content-center'>
            <ListGroup className='w-50' as="ol">
              <Row>
                {SKILLS.map((skills, index) => (
                  <Col key={skills.title} xs={6}> {/* This will create two columns */}
                    <ListGroup.Item as="li" className="d-flex align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold text-center">{skills.title}</div>
                        <div className="fw-light">{skills.subtitle}</div>
                      </div>
                      <Badge bg="success" pill><FontAwesomeIcon icon={faStar} /></Badge>
                    </ListGroup.Item>
                  </Col>
                ))}
              </Row>
            </ListGroup>
          </div>
        </div>
        </>
    )
}