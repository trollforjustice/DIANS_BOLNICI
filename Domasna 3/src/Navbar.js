import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({lng,changeLanguage}) => {

      
    return ( <div className="navbar">
         <nav>
            {lng &&<ul> 
                <li> <Link to="/">ДОМА</Link> </li>
                <li><Link to="/map">БОЛНИЦИ</Link></li>
                <li><Link to="/help">ПОМОШ</Link></li>
                <li><button className="enmk" onClick={()=> changeLanguage()}>EN/MK</button></li>
            </ul>}
            {!lng && <ul>
                <li> <Link to="/">HOME</Link> </li>
                <li><Link to="/map">HOSPITALS</Link></li>
                <li><Link to="/help">HELP</Link></li>
                <li><button className="enmk" onClick={()=> changeLanguage()}>EN/MK</button></li>
            </ul>}
        </nav>
    </div> );
}
 
export default Navbar;