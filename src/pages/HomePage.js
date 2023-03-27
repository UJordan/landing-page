import { Container, Col, Row } from 'reactstrap';

const HomePage = () => {

    return (
        <Container>
        <Row style={{ marginTop: 50, marginBottom: 50}}>
            <h1 className='jordan'> Jordan Ulves</h1>
            <p className='title'>Web and Software Developer</p>
        </Row>
        <Row>
            {/* <Col> */}
                <div className='terminal-header'>
                    <div className='button-red'></div>
                    <div className='button-yellow'></div>
                    <div className='button-green'></div>
                </div>
                <div className='terminal-body'>
                    
                </div>
            {/* </Col> */}
        </Row>
        </Container>
    );
};

export default HomePage;