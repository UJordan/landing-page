import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header className="sticky-nav">
            <nav className='pt-3 pb-1' style={{backgroundColor:'#408E91'}}>
                <ul className="list-unstyled d-flex " style={{flexWrap:'wrap'}}>
                    <div className="mx-auto d-flex">
                        <li className="me-3 hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>
                            <Link to="About" spy={true} smooth={true} offset={-150} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="me-3 hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>
                            <Link to="Portfolio" spy={true} smooth={true} offset={-150} duration={500}>
                                Porfolio
                            </Link>
                        </li>
                        <li className="hover-underline-animation Icon" style={{fontSize:"20px", fontWeight:'bold'}}>
                            <Link to="Contact" spy={true} smooth={true} offset={-150} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </div>
                    <div className="mx-auto d-flex" style={{flexWrap:'wrap'}}>
                        <li className="me-3 hover-underline-animation" icon={faGithub}  style={{fontSize:"20px", fontWeight:'bold'}}>
                            <a href='https://github.com/UJordan' style={{ textDecoration: 'none', color:'inherit' }}>
                                <FontAwesomeIcon className="me-1" icon={faGithub} style={{fontSize:"20px"}} />
                                GitHub
                            </a>
                        </li>
                        <li className="me-3 hover-underline-animation" icon={faLinkedin} style={{fontSize:"20px", fontWeight:'bold'}}>
                            <a href='https://www.linkedin.com/in/jordanulves/' style={{ textDecoration: 'none', color:'inherit' }}>
                                <FontAwesomeIcon className="me-1" icon={faLinkedin} style={{fontSize:"20px"}} />
                                LinkedIn
                            </a>
                        </li>
                        <li className="hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>
                            <i className='fa fa-file me-1' style={{fontSize:"20px"}} />
                            Resume
                        </li>
                    </div>
                </ul>
            </nav>
            <div className='pt-2' style={{backgroundColor:'#E49393'}}></div>
        </header>
    );
}

export default Header;
