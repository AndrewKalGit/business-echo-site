import React from 'react';

function Brochure(props) {
    return (
//About Company: Overview Summary + Setting Why
//About Services: Overview Medium to drive the company vision etc How
//About Our Work: Overview + Results + Highlighted Work What
//About Our Consultation + Quick Quote Specific in place 
<section id="brochure" class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center sm:text-left">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Started as an Idea...
      </h2>

      <p class="mt-2 text-gray-500 md:mt-4 md:block">
        Echo web turns your dream designs into a reality. Not only do we make excellent visually appealing designs, but we 
        provide designs that feel natural and flow easily for your users.
      </p>
    </div>
  </div>

  <img
    alt="idea"
    src="https://i.imgur.com/R7u4a6s.jpg"
    class="h-56 w-full object-cover sm:h-full"
  />
</section>
    );
}

export default Brochure;