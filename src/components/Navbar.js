
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

{/* Hook (Zybook reading) that'll allow the sign up button the render one time and not show up anymore */}

function Navbar() {
    //Set state, useState you import 
    const [click, setClick] = useState(false);
    {/* Create more states */}
    const [button, setButton] = useState(true);

    //Set it equal to an arrow function, set whatever setClick false into this const  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    {/* A function to remove button and display it depending on the screen size */}
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            {/* If it's bigger than 960 px than   */}
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
  return (
    
    //Create fragments
    <>
    <nav className='navbar'>

        <div className='navbar-container'>
            {/* assign closeMobileMenu as an attribute? to this link tag/component?
                Plus, it'll close the hamburger menu whenever you click the icon or other items in the unordered list within the hamburger icon*/}
            <Link to='/' className='navbar-logo' onClick=
            {closeMobileMenu}>
                TRVL <i className='fab fa-typo3'/>
            </Link>
            {/*Add hamburger icon/menu */}
            <div className ='menu-icon' onClick ={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active': 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to='/' className = 'nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/services' className = 'nav-links' onClick={closeMobileMenu}>
                        {/*Same as className = 'nav-item' li above and below */}
                        Services
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/products' className = 'nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/sign-up' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {/* short-circuiting - Taking a shortcut with AND  */}
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar