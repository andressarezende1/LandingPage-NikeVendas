import './NavBar.css';
import { FaLongArrowAltRight } from "react-icons/fa";

function NavBar(){
    return(
    
        <div className='nav'>
            <h1>NIKE</h1>
            <div className='nav-links-container'>
                <ul className='nav-links'>
                    <li>
                        <a href="#form" className='comprar'> Comprar <FaLongArrowAltRight style={{ marginLeft: '8px', verticalAlign: 'middle', color: 'white' }} />
                </a>
                    </li>
                </ul>
            </div>
        </div>

 );
}

export default NavBar;