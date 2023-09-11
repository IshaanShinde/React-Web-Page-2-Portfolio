import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    /* useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, []) */

    return (
        <div className='container about-page'>

            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e',' ','>','w','<']}
                        idx={15}
                    />
                </h1>
                <p className='indent-forward'>
                    I do software development, mostly focusing on web design and UI/UX,
                </p>
                <p className='indent-forward-two'>
                    I am also a guitarist and audio engineer,
                </p>
                <p className='indent-forward-three'>
                    proficient in extended range guitars and music production.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'><FontAwesomeIcon icon={faGitAlt} color='#ff88ff' /></div>
                    <div className='face2'><FontAwesomeIcon icon={faHtml5} color='#ff88ff' /></div>
                    <div className='face3'><FontAwesomeIcon icon={faCss3} color='#ff88ff' /></div>
                    <div className='face4'><FontAwesomeIcon icon={faJsSquare} color='#ff88ff' /></div>
                    <div className='face5'><FontAwesomeIcon icon={faReact} color='#ff88ff' /></div>
                    <div className='face6'><FontAwesomeIcon icon={faFigma} color='#ff88ff' /></div>
                </div>
            </div>
        </div>
        
    )
}

export default About