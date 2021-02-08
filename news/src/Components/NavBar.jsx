import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav>
                <Link to='/'><h1>TEK News</h1></Link>
                <ul>
                    <li><Link className="navBar" to="/sports">Sports</Link></li>
                    <li><Link className="navBar" to="/technology">Technology</Link></li>
                    <li><Link className="navBar" to="/politics">Politics</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;