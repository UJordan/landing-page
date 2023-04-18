import { Container, Col, Row, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Cards from '../components/Cards';

const HomePage = () => {

    return (
        <>
            <Row style={{ marginTop: 50, marginBottom: 30}}>
                <h1 className='jordan'> Jordan Ulves</h1>
                <p className='title'>Web and Software Developer</p>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <div className='terminal-header'>
                            <div className='button-red'></div>
                            <div className='button-yellow'></div>
                            <div className='button-green'></div>
                        </div>
                        <div className='terminal-body'>
                            <div style={{marginLeft: 10, paddingTop: 10}}>
                                <h4>About Me</h4>
                                <p className='terminal-content'>I am a web developer who loves building fun websites and mobile applications.</p>
                                <h4>Skills</h4>
                                <p className='terminal-content'>HTML, CSS, JavaScript, REACT, Bootstrap/Reactstrap, REACT Router, REACT Native, Android Studio</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
        <h1 className='portfolio'>Portfolio Projects</h1>
        <Container style={{ marginTop: 30}}>
            <Row>
                <Col>
                    <Cards />
                </Col>
            </Row>
        </Container>
        <h1 className='portfolio'>Contact Me</h1>
        </>
    );
};

export default HomePage;