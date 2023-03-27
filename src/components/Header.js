import { Navbar, Collapse, NavbarToggler, Nav, NavItem, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* <Navbar navbarsticky='top' expand='sm'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='mx-auto justify-content-between' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/info'>
                                <li>ABOUT</li>
                            </NavLink>

                            <FontAwesomeIcon className="Icon" icon={faGithub} size="2x" />
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/reservation'>
                                <li>PORTFOLIO</li>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <li>CONTACT</li>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar> */}
            <Row style={{backgroundColor:'#408E91'}}>
                <Col>
                    <ul className="list-unstyled d-flex text-center m-2 pt-2 align-items-center">
                        <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>ABOUT</li>
                        <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>PORTFOLIO</li>
                        <li className="hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>CONTACT</li>
                    </ul>
                </Col>
                <Col>
                    <div className="list-unstyled d-flex text-center m-2 pt-2 justify-content-end">
                        <div className='me-4 text-center nav-icon'>
                            <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px"}} />
                            <p>GitHub</p>
                        </div>
                        <div className='me-4 text-center nav-icon'>
                            <FontAwesomeIcon className="Icon" icon={faLinkedin} style={{fontSize:"20px"}} />
                            <p>LinkedIn</p>
                        </div>
                        <div className='me-4 nav-icon'>
                            <i className='fa fa-file' style={{fontSize:"20px"}} />
                            <p>Resume</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='pt-2' style={{backgroundColor:'#E49393'}}></div>
        </div>
    );
}

export default Header;
