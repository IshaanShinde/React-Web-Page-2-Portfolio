/* import { useState } from 'react' */
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
/* 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
