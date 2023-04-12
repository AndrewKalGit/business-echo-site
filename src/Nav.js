import {React, useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import './App.css';
import Logo from './Images/logo512.png'

function Nav(props) {

//Logo get a licensed one 

const [hidden, setHidden] = useState(false);

const close = () => {
    setHidden(!hidden);
}

return (
<>
<OutsideClickHandler
onOutsideClick={() => {
setHidden(false);
}}>
<header id="Nav-Overflow" aria-label="Site Header" class="border-gray-300 border-solid border-b-2">
  <div class="mx-auto max-w-screen-2xl p-4 bg-white">
    <div class="flex items-center justify-between gap-4 lg:gap-10">
      <div class="flex lg:w-0 lg:flex-1">
        <Link to="/">
          <span class="sr-only">Logo</span>
          <img src={Logo} alt="logo" class="w-16 rounded-full border-black border-solid border-2 hover:opacity-50"/>
        </Link>
      </div>

      <nav
        aria-label="Site Nav"
        class="hidden gap-12 text-lg font-medium lg:flex"
      >
        <Link class="text-gray-900 hover:text-gray-500" to="/">Home</Link>
        <Link class="text-gray-900 hover:text-gray-500" to="about">About</Link>
        <div class="group inline-block relative">
        <div
          class="text-gray-900 hover:text-gray-500 font-medium inline-flex items-center"
        >
          <Link to="/design" class="mr-1">Services</Link>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
        <ul class="absolute hidden bg-gray-50 text-gray-900 pt-1 group-hover:block">
          <li class="border-b border-solid border-gray-100">
            <Link
              class="hover:text-gray-400 py-2 px-4 block"
              to="design"
              >Design</Link>
          </li>
          <li class="border-b border-solid border-gray-100">
            <Link
              class="hover:text-gray-400 py-2 px-4 block"
              to="development"
              >Development</Link>
          </li>
          <li class="hover:text-gray-400 border-b border-solid border-gray-100">
            <Link
              class="rounded-b py-2 px-4 block"
              to="maintenance"
              >Maintenance</Link>
          </li>
        </ul>
      </div>
        <Link class="text-gray-900 hover:text-gray-500" to="portfolio">Portfolio</Link>
        <Link class="text-gray-900 hover:text-gray-500" to="contact">Contact</Link>
      </nav>

     <div class="w-full lg:w-auto items-center lg:justify-end gap-4 justify-center hidden lg:flex">
        <Link
          class="px-5 text-lg font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-600 p-2"
          to="quickquote"
        >
            Quick Quote
        </Link>
    </div>
      <div class="lg:hidden">
        <button class="rounded-lg z-20 p-2 text-gray-400" type="button" onClick={close}>
          <span class="sr-only">Open menu</span>
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

<div className={`Nav-HamburgerContent${hidden ? 'Nav-HamburgerContentshow' : ''}`}>
						<div className='Nav-HamburgerContentshow'>
						<Link className='Nav-Links-Hambuger' to='/'>
							Home 
						</Link>
						<Link className='Nav-Links-Hambuger' to='/about'>
							About
						</Link>
            <Link to="/design" className='Nav-Links-Hambuger'>
              Services
						</Link>
            <ul class="w-full text-end mr-4">
              <Link to="/design" class="hover:text-gray-400 py-2 px-4 block border-b border-solid border-gray-100">
                Design
              </Link>
              <Link to="/development" class="hover:text-gray-400 py-2 px-4 block border-b border-solid border-gray-100">
                Development
              </Link>
             <Link to="/maintenance" class="hover:text-gray-400 py-2 px-4 block border-b border-solid border-gray-100">
                Maintenance
              </Link>
            </ul>
            <Link id="border-top" className='Nav-Links-Hambuger' to='/portfolio'>
							Portfolio
						</Link>
            <Link className='Nav-Links-Hambuger' to='/contact'>
							Contact
						</Link>
            <Link className='Nav-Links-Hambuger' to='/quickquote'>
							Quick Quotes
						</Link>
					</div>
        </div>
    </OutsideClickHandler>
</>
    );
}

export default Nav;