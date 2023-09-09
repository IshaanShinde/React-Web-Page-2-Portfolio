import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/logo-flux-echo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    
        <div className='nav-bar'>
            {/* logo at the top of the nav bar */}
            {/* this routes the logo to the homepage denoted by '/' */}
            <Link className='logo' to='/'>
                <img src={logo} alt='logo' />
            </Link>

            {/* nan bar elements */}
            <nav>
                <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#ff8800' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#ff8800' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#ff8800' />
                </NavLink>
            </nav>
        </div>
    
)

export default Sidebar  