import { React, useState, useEffect } from 'react';
import './Fadein.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
  class="relative bg-gradient-to-r from-teal-300 bg-cover bg-center bg-no-repeat"
>
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-4xl text-white font-extrabold sm:text-6xl">
        <span id="fade-in">
        {headingStatement[index]}
        </span>
        <span id="fade-in2">
        <strong class="block font-extrabold text-teal-600 sm:text-teal-600">
        Echo Web
        </strong>
        </span>
      </h1>

      <p id="fade-in3" class="mt-4 max-w-lg hidden md:flex md:text-2xl md:leading-relaxed font-semibold text-white">
        Stand out and make some noise in this digital age. Echo Web provides organizations with digital solutions.
      </p>

      <div class="mt-8 lg:flex flex-wrap gap-4 text-center hidden">
        <Link
        id="fade-in4"
        to="/contact"
        class="block w-full rounded bg-teal-400 px-12 py-3 text-md font-semibold text-white shadow hover:bg-teal-500 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
        >
         Quick Quote
        </Link>
        <HashLink
        id="fade-in4"
        to="/#brochure"
        smooth
        class="block w-full rounded bg-white px-12 py-3 text-md font-semibold text-teal-400 shadow hover:bg-teal-400 focus:outline-none focus:ring active:bg-white sm:w-auto hover:text-teal-500"
        >
         Learn More
        </HashLink>
      </div>
    </div>
  </div>
</section>

</>
    );
}

export default Landing;