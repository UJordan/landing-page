// import { Navbar, Collapse, NavbarToggler, Nav, NavItem, Container, Row, Col } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky-nav">
            <div className='pt-3 pb-1' style={{backgroundColor:'#408E91'}}>
                <ul className="list-unstyled d-flex " style={{flexWrap:'wrap'}}>
                    <div className="mx-auto d-flex">
                        <li className="me-3 hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>ABOUT</li>
                        <li className="me-3 hover-underline-animation" style={{fontSize:"20px", fontWeight:'bold'}}>PORTFOLIO</li>
                        <li className="hover-underline-animation Icon" style={{fontSize:"20px", fontWeight:'bold'}}>CONTACT</li>
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

        // <>
        //     <Row className='pt-3' style={{backgroundColor:'#408E91', flexWrap:'wrap'}}>
        //         <ul className="ps-5 pe-5 list-unstyled d-flex text-center align-items-center" style={{flexWrap:'wrap'}}>
        //             <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>ABOUT</li>
        //             <li className="me-3 hover-underline-animation" style={{fontSize:"25px", fontWeight:'bold'}}>PORTFOLIO</li>
        //             <li className="hover-underline-animation Icon" style={{fontSize:"25px", fontWeight:'bold'}}>CONTACT</li>
        //             <div className="d-flex links" style={{ }}>
        //                 <div className="me-3 hover-underline-animation">
        //                     <FontAwesomeIcon className="Icon" icon={faGithub} style={{fontSize:"20px"}} />
        //                     <li className="Icon" icon={faGithub} style={{fontSize:"20px", fontWeight:'bold'}}>GitHub</li>
        //                 </div>
        //                 <div className="me-3 hover-underline-animation">
        //                     <FontAwesomeIcon className="Icon" icon={faLinkedin} style={{fontSize:"20px"}} />
        //                     <li className="Icon" icon={faLinkedin} style={{fontSize:"20px", fontWeight:'bold'}}>LinkedIn</li>
        //                 </div>
        //                 <div className="hover-underline-animation">
        //                     <i className='fa fa-file' style={{fontSize:"20px"}} />
        //                     <li className="Icon" style={{fontSize:"20px", fontWeight:'bold'}}>Resume</li>
        //                 </div>
        //             </div>
        //         </ul>
        //     </Row>
        //     <div className='pt-2' style={{backgroundColor:'#E49393'}}></div>
        // </>
    );
}

export default Header;
