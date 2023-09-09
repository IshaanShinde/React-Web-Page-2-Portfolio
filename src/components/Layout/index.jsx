import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />

            

            <div className='page'>
                <span className='tags top-tags'>0 1 1 0 0 1<br />&gt; _ &lt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &gt; monomyth ( n )
                    <br />
                    <span className='bottom-tag-html'>&gt; n%4==0 || n%4==3 ? 0:1</span>
                </span>
            </div>
        </div>
    )
}

export default Layout