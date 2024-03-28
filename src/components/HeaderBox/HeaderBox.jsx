import './HeaderBox.scss';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const HeaderBox = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-row'>
                    <div className='logo-container'>
                        <h1 className='logo'><Link to="/">ViF<span>oo</span>d</Link></h1>
                    </div>
                    <nav className='nav'>
                        <button className='nav-link-button'><RxHamburgerMenu/></button>
                        <ul className='nav-link-wrapper'>
                            <li> <Link to='/about'>About</Link></li>
                            <li> <a href='#home'>Restaurant</a></li>
                            <li> <a href='#home'>Map</a></li>
                            <li> <a href='#home'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderBox;