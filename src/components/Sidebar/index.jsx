import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/logo-flux-echo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    
        <div className='nav-bar'>
            {/* logo at the top of the nav bar */}
            {/* this routes the logo to the homepage denoted by '/' */}
            <Link className='logo' to='/'>
                <img src={logo} alt='logo' />
            </Link>

            {/* nan bar main elements - HOME ABOUT CONTACT*/}
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

            {/* nav bar normal elements - GITLAB GITHUB LINKEDIN YOUTUBE */}
            <ul>
                <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ishaanshinde/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#ff8800' />
                </a></li>

                <li><a target='_blank' rel='noreferrer' href="https://gitlab.com/users/IshaanShinde/projects">
                    <FontAwesomeIcon icon={faGitlab} color='#ff8800' />
                </a></li>

                <li><a target='_blank' rel='noreferrer' href="https://github.com/IshaanShinde">
                    <FontAwesomeIcon icon={faGithub} color='#ff8800' />
                </a></li>

                <li><a target='_blank' rel='noreferrer' href="https://www.youtube.com/@psychedelicloli">
                    <FontAwesomeIcon icon={faYoutube} color='#ff8800' />
                </a></li>
                

            </ul>
        </div>
    
)

export default Sidebar  