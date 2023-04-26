import { Col, Row, Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WeddingSite from '../app/assets/WeddingSite.png';
import WeddingApp from '../app/assets/WeddingApp.png';

const Cards = () => {
    return (
        <>
            <h1 className='sub-header' id='Portfolio'>Portfolio Projects</h1>
            <div className='card'>
                <div className='header'> Title </div>
                <div className='body'>
                    content for card one
                </div>
                <div className='footer'>
                    <button className='btn'>Button 1</button>
                    <button className='btn btn-outline'>Button 2</button>
                </div>
            </div>
        </>
    );
};

export default Cards;