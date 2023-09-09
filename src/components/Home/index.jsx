import { Link } from "react-router-dom"
import './index.scss'

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Konnichiwa! &gt;w&lt;</h1>
                <h2 className="indent-forward">I'm Ishaan Shinde,<br />Software Developer and Audio Engineer</h2>
                <Link to='/contact' className="flat-button indent-forward-two">&lt;contact&gt;</Link>
            </div>
        </div>
    )
}

export default Home