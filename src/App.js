import React from 'react'
import {Footer,Possibility,Header,Blog,WhatGpt3,Features} from './containers';
import {NavBar,Brand,CTA} from './components';
import './App.css'
function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <NavBar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App