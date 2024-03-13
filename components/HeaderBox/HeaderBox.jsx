import './HeaderBox.scss';
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderBox = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-row'>
                    <div className='logo-container'>
                        <h1 className='logo'>ViF<span>oo</span>d</h1>
                    </div>
                    <nav className='nav'>
                        <button className='nav-link-button'><RxHamburgerMenu/></button>
                        <ul className='nav-link-wrapper'>
                            <li> <a href='#home'>Home</a></li>
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