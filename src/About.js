import React from 'react';

function About(props) {
    return (
<>
    <div class="py-4 lg:py-24">
       <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl flex justify-center mb-4 mt-2">
        Who We Are
      </h1>
    <div class="flex justify-center px-4">
    <div class="grid grid-cols-1 justify-items-center max-w-7xl">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-2 flex justify-center">
        Our Mission
      </h2>
       <p>
        We understand the importance and struggles of truly expressing an organization digitally. Echo Web LLC exists to help organizations truly represent their mission and values through a strong online presence. We design and develop anything from standard brochures to complex 3D E-commerce websites.
      </p>
      </div>
    </div>
    </div>
    <br/>
    <div class="flex justify-center px-4">
    <div class="grid grid-cols-1 justify-items-center max-w-7xl">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-2 flex justify-center">
        Our Values
      </h2>
       <p>
        At Echo Web LLC, we are committed to upholding the following values:
        <ul>
            <br/>
            <li> <span class="font-semibold"> Embracing New Challenges: </span> We believe in pushing ourselves to continuously learn and grow, both individually and as a team. We actively seek out new and diverse challenges to help us improve and innovate.</li>
            <br/>
            <li> <span class="font-semibold"> Celebrating Diversity: </span>We value diversity and inclusivity in all its forms. We recognize that our differences are what make us stronger and we strive to create a welcoming and supportive environment for everyone.</li>
            <br/>
            <li> <span class="font-semibold">Fostering Community:</span> We believe in the power of collaboration and teamwork. We work together to build strong relationships with our clients, partners, and each other, and we actively contribute to the communities we serve.</li>
            <br/>
            <li><span class="font-semibold">Supporting Non-Profits and Eco-Friendly Businesses: </span> We are committed to making a positive impact on the world around us. We actively seek out and support businesses that prioritize social and environmental responsibility.</li>
        </ul>
        <br/>
        These values guide us in everything we do, from how we work with clients to how we treat each other.
      </p>
      </div>
    </div>
    </div>
    </div>  
</>
    );
}

export default About;