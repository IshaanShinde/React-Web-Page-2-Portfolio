import { Link } from "react-router-dom"
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"

const Home = () => {

    /* const [letterClass, setLetterClass] = useState('text-animate')/* 
    const hiArray = ['K','o','n','n','i','c','h','i','w','a','!',' ','>','w', '<'] */

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    {/* <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={15} /> */}
                    Konnichiwa! &gt;w&lt;
                </h1>

                <h2 className="indent-forward">I'm Ishaan Shinde,<br />Software Developer and Audio Engineer</h2>
                <Link to='/contact' className="flat-button indent-forward-two">&lt;contact&gt;</Link>
            </div>
        </div>
    )
}

export default Home