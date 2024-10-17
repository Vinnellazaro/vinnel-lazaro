import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../assets/img-1.png'
const Home = () => {
  return (
    //  <div className="bg-animation">
    //     <div><Image className='w-100' src={img} style={{padding:'0 7rem'}}/></div>
    //     <div className='tag-line text-center' style={{padding:'7rem 7rem'}}>
    //         <h1><i>&quot;Code with Creativity, Design with Purpose&quot;</i></h1>
    //         <h4 className='text-body-tertiary'>From concept to code, I bring web designs to life with a focus on usability, accessibility, and aesthetics. Let’s create something amazing together!</h4>
    //     </div>
    //   </div>
        <Container className='bg-animation m-0 mw-100'>
          <Row className="g-4"> {/* g-2 adds a small gutter between columns */}
              <Col xs={12} md={6} className="d-flex align-items-center justify-content-center order-2 order-sm-1">
                <Image className='w-100' src={img}/>
              </Col>
              <Col xs={12} md={6} className="d-flex align-items-center justify-content-center order-1 order-sm-2">
                <div className='tag-line text-center text-light'>
                  <h1 className='fw-light'><i>&quot;Code with Creativity, Design with Purpose&quot;</i></h1>
                  <h6 className='fw-light'>From concept to code, I bring web designs to life with a focus on usability, accessibility, and aesthetics. Let’s create something amazing together!</h6>
                </div>
              </Col>
          </Row>
        </Container>
  );
};

export default Home;