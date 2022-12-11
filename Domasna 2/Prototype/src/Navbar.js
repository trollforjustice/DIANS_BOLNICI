import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <div className="navbar">
        <nav>
            <ul>
                <li> <Link to="/">ДОМА</Link> </li>
                <li><Link to="/map">БОЛНИЦИ</Link></li>
                <li><Link to="/help">ПОМОШ</Link></li>
                <li><button className="enmk">EN/MK</button></li>
            </ul>
        </nav>
    </div> );
}
 
export default Navbar;