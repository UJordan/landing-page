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
        <>
            <Row className='pt-3' style={{backgroundColor:'#408E91', flexWrap:'wrap'}}>
                <ul className="ps-5 pe-5 list-unstyled d-flex text-center align-items-center" style={{flexWrap:'wrap'}}>
                    <div className=" d-flex text-center">
                    <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>ABOUT</li>
                    <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>PORTFOLIO</li>
                    <li className="hover-underline-animation Icon" style={{fontSize:"25px", fontWeight:'bold'}}>CONTACT</li>
                    </div>
                    <div className="ms-auto d-flex align-items-center">
                        <div className="me-3 hover-underline-animation">
                            <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px"}} />
                            <li className="Icon" icon={faGithub} style={{fontSize:"20px", fontWeight:'bold'}}>GitHub</li>
                        </div>
                        <div className="me-3 hover-underline-animation">
                            <FontAwesomeIcon className="Icon" icon={faLinkedin} style={{fontSize:"20px"}} />
                            <li className="Icon" icon={faLinkedin} style={{fontSize:"20px", fontWeight:'bold'}}>LinkedIn</li>
                        </div>
                        <div className="hover-underline-animation">
                            <i className='fa fa-file' style={{fontSize:"20px"}} />
                            <li className="Icon" style={{fontSize:"20px", fontWeight:'bold'}}>Resume</li>
                        </div>
                    </div>
                </ul>
            </Row>
            <div className='pt-2' style={{backgroundColor:'#E49393'}}></div>
        </>
    );

    // return (
    //     <div>
    //         <Row style={{backgroundColor:'#408E91'}}>
    //             <Col>
    //                 <ul className="list-unstyled d-flex text-center m-2 pt-2 align-items-center">
    //                     <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>ABOUT</li>
    //                     <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>PORTFOLIO</li>
    //                     <li className="hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>CONTACT</li>
    //                 </ul>
    //             </Col>
    //             <Col>
    //                 <div className="list-unstyled d-flex text-center m-2 pt-2 justify-content-end">
    //                     <div className='me-4 text-center nav-icon'>
    //                         <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px"}} />
    //                         <p>GitHub</p>
    //                     </div>
    //                     <div className='me-4 text-center nav-icon'>
    //                         <FontAwesomeIcon className="Icon" icon={faLinkedin} style={{fontSize:"20px"}} />
    //                         <p>LinkedIn</p>
    //                     </div>
    //                     <div className='me-4 nav-icon'>
    //                         <i className='fa fa-file' style={{fontSize:"20px"}} />
    //                         <p>Resume</p>
    //                     </div>
    //                 </div>
    //             </Col>
    //         </Row>
    //         <div className='pt-2' style={{backgroundColor:'#E49393'}}></div>
    //     </div>
    // );
}

export default Header;
