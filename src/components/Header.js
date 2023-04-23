import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    return (
        <header className="sticky-nav">
            <nav>
                <ul className='nav-left'>
                    <li className="hover-underline-animation" >
                        <Link to="About" spy={true} smooth={true} offset={-150} duration={500}>
                        About
                        </Link>
                    </li>
                    <li className="hover-underline-animation" >
                        <Link to="Portfolio" spy={true} smooth={true} offset={-150} duration={500}>
                        Porfolio
                        </Link>
                    </li>
                    <li className="hover-underline-animation Icon" >
                        <Link to="Contact" spy={true} smooth={true} offset={-150} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className='nav-right'>
                    <li className="hover-underline-animation" icon={faGithub} >
                        <a href='https://github.com/UJordan' style={{ textDecoration: 'none', color:'inherit' }}>
                            <FontAwesomeIcon className="me-1" icon={faGithub}/>
                            GitHub
                        </a>
                    </li>
                    <li className="hover-underline-animation" icon={faLinkedin}>
                        <a href='https://www.linkedin.com/in/jordanulves/' style={{ textDecoration: 'none', color:'inherit' }}>
                            <FontAwesomeIcon className="me-1" icon={faLinkedin}/>
                            LinkedIn
                        </a>
                    </li>
                    <li className="hover-underline-animation">
                        <i className='fa fa-file me-1'/>
                        Resume
                    </li>
                </ul>
            </nav>
          <div></div>
        </header>
      );
    }

export default Header;
