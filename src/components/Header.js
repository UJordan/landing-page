import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navigation'>
            <Navbar className='navbar transparent navbar-inverse navbar-expand-sm sticky-top '>
                <NavbarBrand>
                    <NavLink className='nav-link text-white' to='/'>
                        <h4 className='mt-2 ms-2 title'>Some Vector</h4>
                    </NavLink>
                </NavbarBrand>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link active' to='/'>
                                <li>HOME</li>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/info'>
                                <li>ABOUT</li>
                            </NavLink>
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
            </Navbar> 
        </div>
    );
}

export default Header;