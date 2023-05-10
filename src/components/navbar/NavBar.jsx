import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const  NavBar = () => {
  const Menu=()=>(
    <>
    <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT-3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Libraries</a></p>
    </>
  )
  const[toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
        <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu? 
        <RiCloseLine size={26} color='#ffff' onClick={()=>setToggleMenu(false)}/>
       : <RiMenu3Line size={26} color='#ffff' onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_contaner-links'>
              <Menu/>
              <div className='gpt3__navbar-menu_container-links-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default NavBar;