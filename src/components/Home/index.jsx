import './index.scss'
import { Link } from "react-router-dom"

import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const hiArray = ['K','o','n','n','i','c','h','i','w','a','!',' ','>','w', '<']
    const contactArray = ['<', 'c', 'o', 'n', 't', 'a', 'c', 't', '>']
    
    /* useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, []) */

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={15} />
                    {/* Konnichiwa! &gt;w&lt; */}
                </h1>

                <h2 className="indent-forward">I'm Ishaan Shinde,<br />Software Developer and Audio Engineer</h2>
                <Link to='/contact' className="flat-button indent-forward-two">
                    <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={30} />
                </Link>
            </div>
        </div>
    )
}

export default Home