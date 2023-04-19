import { Col, Row, Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WeddingSite from '../app/assets/WeddingSite.png';
import WeddingApp from '../app/assets/WeddingApp.png';

const Cards = () => {
    return (
        <Row style={{marginLeft:'1%', marginRight:'1%'}}>
            <Col className='col-12 col-sm-6 col-md-4 col-lg-3' style={{marginBottom:"20px"}}>
                <Card color="light">
                    <img alt="Wedding App" src={WeddingApp} />
                    <CardBody>
                        <CardTitle tag="h5">Personal Wedding Mobile App</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Made With React Native</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                        <Button style={{marginBottom:'10px', marginRight:'10px'}}>
                            <i className='fa fa-play' style={{fontSize:"20px", marginRight:'10px'}}/>
                            Video Demo
                        </Button>
                        <Button style={{marginBottom:'10px'}} href='https://github.com/UJordan/wedding-site-reactnative'>
                            <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px", marginRight: '10px'}} />
                            GitHub
                        </Button>
                    </CardBody>
                </Card>
            </Col>
            <Col className='col-12 col-sm-6 col-md-4 col-lg-3' style={{marginBottom:"20px"}}>
                <Card color="light">
                    <img alt="Wedding Site" src={WeddingSite} />
                    <CardBody>
                        <CardTitle tag="h5">Personal Wedding Website</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Made With React</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                        <Button style={{marginBottom:'10px', marginRight:'10px'}} href='https://wedding-website-377400.web.app/'>
                            <i className='fa fa-arrow-up' style={{fontSize:"20px", marginRight:'10px'}} />
                            Live Demo
                        </Button>
                        <Button style={{marginBottom:'10px'}} href='https://github.com/UJordan/wedding-site-react'>
                            <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px", marginRight:'10px'}} />
                            GitHub
                        </Button>
                    </CardBody>
                </Card>
            </Col>
            <Col className='col-12 col-sm-6 col-md-4 col-lg-3' style={{marginBottom:"20px"}}>
                <Card color="light">
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                    <CardBody>
                        <CardTitle tag="h5">Dog Food Donation App</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Made With React Native</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                        <Button style={{marginBottom:'10px', marginRight:'10px'}}>
                            <i className='fa fa-play' style={{fontSize:"20px", marginRight:'10px'}} />
                            Video Demo
                        </Button>
                        <Button style={{marginBottom:'10px'}} href='https://github.com/UJordan/dogfoodapp'>
                            <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px", marginRight:'10px'}} />
                            GitHub
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Cards;