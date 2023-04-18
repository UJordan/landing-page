import { Container, Col, Row, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardSubtitle, CardText, CardGroup, Button } from 'reactstrap';
import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WeddingSite from '../app/assets/WeddingSite.png';
import WeddingApp from '../app/assets/WeddingApp.png';

const Cards = () => {
    return (
        <CardGroup>
            <Card color="light" style={{ width: '30rem', marginRight:10 }}>
                <img alt="Wedding App" src={WeddingApp} />
                <CardBody>
                    <CardTitle tag="h5">Personal Wedding Mobile App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Made With React Native</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button style={{ marginRight: '1rem',}}>
                        <i className='fa fa-play' style={{fontSize:"20px", marginRight: 10}} />
                        Video Demo
                    </Button>
                    <Button href='https://github.com/UJordan/wedding-site-reactnative'>
                        <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px", marginRight: 10}} />
                        GitHub
                    </Button>
                </CardBody>
            </Card>
            <Card color="light" style={{ width: '30rem', marginRight:10 }}>
                <img alt="Wedding Site" src={WeddingSite} />
                <CardBody>
                    <CardTitle tag="h5">Personal Wedding Website</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Made With React</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button href='https://wedding-website-377400.web.app/' style={{ marginRight: '1rem',}}>
                        <i className='fa fa-arrow-up' style={{fontSize:"20px", marginRight: 10}} />
                        Live Demo
                    </Button>
                    <Button href='https://github.com/UJordan/wedding-site-react'>
                        <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px", marginRight: 10}} />
                        GitHub
                    </Button>
                </CardBody>
            </Card>
            <Card color="light" style={{ width: '30rem' }}>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle tag="h5">Dog Food Donation App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Made With React Native</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button style={{ marginRight: '1rem',}}>
                        <i className='fa fa-play' style={{fontSize:"20px", marginRight: 10}} />
                        Video Demo
                    </Button>
                    <Button href='https://github.com/UJordan/dogfoodapp'>
                        <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px", marginRight: 10}} />
                        GitHub
                    </Button>
                </CardBody>
            </Card>
        </CardGroup>
    );
};

export default Cards;