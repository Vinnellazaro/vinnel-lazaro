import Container from 'react-bootstrap/Container';
import { ABOUTME } from '../data';
function AboutMe() {
    return (
        <Container className="about-me py-5 text-center">
            <h1>About Me</h1>
            <p>{ABOUTME.descriptions}</p>
        </Container>
    )
}
export default AboutMe;