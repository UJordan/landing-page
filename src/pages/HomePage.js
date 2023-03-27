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
                            some text
                        </div>
                    </Col>
                </Row>
        </Container>
        <h1 className='portfolio'>Portfolio</h1>
        <Container style={{ marginTop: 30}}>
            <Row>
                <Col>
                    <Cards />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default HomePage;