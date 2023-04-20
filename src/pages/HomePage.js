import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import Cards from '../components/Cards';

const HomePage = () => {

    return (
        <>
            <div style={{ marginTop: 10, marginBottom: 10}}>
                <h1 className='jordan'> Jordan Ulves</h1>
                <p className='title'>Web and Software Developer</p>
            </div>
            <div style={{marginLeft: '1%', marginRight:'1%' }}>
                <div className='terminal-header'>
                    <div className='button-red'></div>
                    <div className='button-yellow'></div>
                    <div className='button-green'></div>
                </div>
                <div className='terminal-body'>
                    <div style={{marginLeft: '20px', marginRight:'20px', paddingTop: 10}}>
                        <h4 id="About">About Me</h4>
                        <p className='terminal-content'>I am a web developer who loves building fun websites and mobile applications. I used to work as an accountant and after I found my passion for web development, I decided to make the transition to become a full-time web developer.</p>
                        <h4>My Skills</h4>
                        <p className='terminal-content'>HTML, CSS, JavaScript, REACT, Bootstrap, REACT Router, REACT Native, Android Studio.</p>
                    </div>
                </div>
            </div>
        <h1 className='portfolio' id='Portfolio'>Portfolio Projects</h1>
        <div style={{ marginTop: 30}}>
            <Cards />
        </div>
        <Container>
            <h1 className='portfolio' id='Contact' style={{ marginBottom: 20}}>Contact Me</h1>
            <Form target="_blank" action="216aa10f74b0a03c9d0b4b8f85f041bc" method="POST">
                <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                        </Col>
                        <Col>
                            <Input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                </FormGroup>
                <Button type="submit">Submit Form</Button>
            </Form>
        </Container>
        </>
    );
};

export default HomePage;