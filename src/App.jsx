/* import { useState } from 'react' */
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
/* 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
