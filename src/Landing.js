import { React, useState, useEffect } from 'react';
import './Fadein.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Banner3D from './Banner3D';

function Landing(props) {
//toDO:
//resize 3d object for mobile
//Make a ring that follows the mouse in echo 3d logo

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
  class="relative bg-gradient-to-r from-blue-50 bg-cover bg-center bg-no-repeat"
>
  <div
    class="relative flex mx-auto px-4 py-32 sm:px-6 lg:flex justify-center lg:h-screen items-center lg:px-8"
  >
    <div class="text-center">
      <h1 class="text-4xl text-gray-700 font-extrabold sm:text-6xl">
        <span id="fade-in">
        {headingStatement[index]}
        </span>
        <span id="fade-in2">
        <strong class="block font-extrabold text-gray-900">
        Echo Web
        </strong>
        </span>
      </h1>

      <div class="mt-8 flex justify-center flex-wrap gap-4 text-center">
        <Link
        id="fade-in1"
        to="/contact"
        class="block w-64 rounded bg-blue-400 px-12 py-3 text-md font-semibold text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-600 sm:w-auto"
        >
         Quick Quote
        </Link>
        <HashLink
        id="fade-in2"
        to="/#brochure"
        smooth
        class="lg:block w-64 rounded bg-white px-12 py-3 text-md font-semibold text-blue-400 shadow hover:bg-blue-400 focus:outline-none focus:ring active:bg-white sm:w-auto hover:text-blue-500 hidden"
        >
         Learn More
        </HashLink>
      </div>
    </div>
    <div class="absolute -z-10">
      <div id="canvas">
      <Banner3D></Banner3D>
      </div>
    </div>
  </div>
</section>
</>
    );
}

export default Landing;