import { React, useState, } from 'react';
import QQFooter from './QQFooter';

function QuickQuote(props) {

const [des, setDes] = useState(0);
const [dev, setDev] = useState(0);
const [total, setTotal] = useState(0);

const currentStepsColor = {
  backgroundColor: 'rgb(59 130 246)',
  color: 'rgb(243 244 246)',
}

const [stepColor, setStepColor] = useState(currentStepsColor)

const nextStep = () => {
  setStepColor(stepColor);
}

return (
<>
<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 lg:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        Quick Quote
      </h2>
      <p class="mt-4 text-gray-700 sm:text-xl">
        Quick Quote gives you an accurate and quick way of scoping out the projects costs and overview for ECHO Web LLC.
      </p>
    </div>

    <div class="border-t-2 mt-10 pt-10">
    <div>

{/* STEPS */}

  <div>
  <h2 class="sr-only">Steps</h2>

  <div
    class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
  >
    <ol
      class="relative z-10 flex justify-between text-sm font-medium text-gray-500"
    >
      <li class="flex items-center gap-2 bg-white p-2">
        <span
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6" 
        >
          1
        </span>

        <span class="hidden sm:block"> General Information </span>
      </li>

      <li class="flex items-center gap-2 bg-white p-2">
        <span
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6 text-gray-500" 
        >
          2
        </span>

        <span class="hidden sm:block"> Complexity </span>
      </li>

      <li class="flex items-center gap-2 bg-white p-2">
        <span
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6"
        >
          3
        </span>

        <span class="hidden sm:block"> Pages </span>
      </li>
    </ol>
  </div>
</div>
</div>

{/* STEPS */}

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total
          </dt>

          <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">
            ${total}
          </dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Design
          </dt>

          <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">${des}</dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Development
          </dt>

          <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">${dev}</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</section>
<QQFooter></QQFooter>
</>
    );
}

export default QuickQuote;