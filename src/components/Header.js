import { Navbar, Collapse, NavbarToggler, Nav, NavItem, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
            <Row>
                <Col>
                    <ul className="list-unstyled d-flex text-center m-4 mt-5 align-items-center">
                        <li className="me-3">ABOUT</li>
                        <li className="me-3">PORTFOLIO</li>
                        <li >CONTACT</li>
                    </ul>
                </Col>
                <Col>
                    <div className="list-unstyled d-flex text-center m-4 justify-content-end">
                        <div className='me-4 text-center'>
                            <FontAwesomeIcon className="Icon" icon={faGithub} size="2x" />
                            <p>GitHub</p>
                        </div>
                        <div className='me-4 text-center'>
                            <FontAwesomeIcon className="Icon" icon={faLinkedin} size="2x" />
                            <p>LinkedIn</p>
                        </div>
                        <div className='me-4'>
                            <i className='fa fa-file fa-2x' />
                            <p>Resume</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='mt-1'></div>
        </div>
    );
}

export default Header;
