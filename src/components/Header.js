import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div className="sticky-nav">
            <div className='pt-3 pb-1' style={{backgroundColor:'#408E91'}}>
                <ul className="list-unstyled d-flex " style={{flexWrap:'wrap'}}>
                    <div className="mx-auto d-flex">
                        <li className="me-3 hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>About</li>
                        <li className="me-3 hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>Porfolio</li>
                        <li className="hover-underline-animation Icon" style={{fontSize:"20px", fontWeight:'bold'}}>Contact</li>
                    </div>
                    <div className="mx-auto d-flex" style={{flexWrap:'wrap'}}>
                        <li className="me-3 hover-underline-animation" icon={faGithub} style={{fontSize:"20px", fontWeight:'bold'}}>
                            <FontAwesomeIcon className="me-1" icon={faGithub} style={{fontSize:"20px"}} />
                            GitHub
                        </li>
                        <li className="me-3 hover-underline-animation" icon={faLinkedin} style={{fontSize:"20px", fontWeight:'bold'}}>
                            <FontAwesomeIcon className="me-1" icon={faLinkedin} style={{fontSize:"20px"}} />
                            LinkedIn
                        </li>
                        <li className="hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>
                            <i className='fa fa-file me-1' style={{fontSize:"20px"}} />
                            Resume
                        </li>
                    </div>
                </ul>
            </div>
            <div className='pt-2' style={{backgroundColor:'#E49393'}}></div>
        </div>
    );
}

export default Header;
