import { React, useState, useEffect } from 'react';
import './Fadein.css';
import Banner3D from './Banner3D';

function Landing(props) {
//toDO:
//resize 3d object for mobile
//Make a ring that follows the mouse in echo 3d logo

  const headingStatement = ['3D Websites', 'Scalability', 'Custom'];

    const [index, setIndex] = useState(0)

    useEffect(() => {   
        const intervalID = setInterval(() => {
            if (index < headingStatement.length - 1){
                setIndex(index + 1)
            } 
            if (index === headingStatement.length - 1){
                setIndex(index - headingStatement.length + 1)
            }
        }, 4500);
        return () => clearInterval(intervalID);
    },); 
return (

<>
<section
  class="bg-white bg-center bg-no-repeat w-screen h-screen grid grid-cols-1">
  <div>
  <Banner3D></Banner3D>
  </div>
  {/* <div class="bg-black">
  <h1 class="hidden text-blue-600 h-5/6 lg:flex justify-center justify-items-center items-center font-bold text-7xl text-center">
  {headingStatement[index]}
</h1>
</div> */}
</section>
</>
    );
}

export default Landing;