import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../../stylesheets/navbar.css'

const NavBar= (props) => {

return(
       
            <nav>
                <Link smooth to='/#home'>Home</Link>
                <Link smooth to='/#aboutMe'>About me</Link>        
            </nav>
     )
}

export default NavBar;

