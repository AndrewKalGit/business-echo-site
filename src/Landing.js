import { React, useState, useEffect } from 'react';
import './Fadein.css';
import { Link } from 'react-router-dom';

function Landing(props) {
   const headingStatement = ['Make Some Noise', 'Create a Scene', 'Be You'];

    const [index, setIndex] = useState(0)

    useEffect(() => {   
        const intervalID = setInterval(() => {
            if (index < headingStatement.length - 1){
                setIndex(index + 1)
            } 
            if (index === headingStatement.length - 1){
                setIndex(index - headingStatement.length + 1)
            }
        }, 3000);
        return () => clearInterval(intervalID);
        
    },); 
return (
<>
<section
  class="relative bg-[url('./Images/matt-botsford-OKLqGsCT8qs-unsplash.jpg')] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-black/5"
  ></div>

  <div
    class="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-4xl text-white font-extrabold sm:text-6xl">
        <span id="fade-in">
        {headingStatement[index]}
        </span>
        <span id="fade-in2">
        <strong class="block font-extrabold text-indigo-500 sm:text-indigo-700">
        Echo Web
        </strong>
        </span>
      </h1>

      <p id="fade-in3" class="mt-4 max-w-lg hidden md:flex md:text-2xl md:leading-relaxed font-semibold text-gray-100">
        Stand out and make some noise in this digital age. Echo Web provides organizations with digital solutions.
      </p>

      <div class="mt-8 :flex flex-wrap gap-4 text-center hidden">
        <Link
        id="fade-in4"
        to="/contact"
        class="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
        >
         Get Started
        </Link>
      </div>
    </div>
  </div>
</section>

</>
    );
}

export default Landing;