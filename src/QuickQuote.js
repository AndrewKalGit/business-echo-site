import { React, useState, } from 'react';
import './BreadCrumb.css';

function QuickQuote(props) {

const [selectedOptions , setSelectedOptions] = useState({
  step1: { option1: false, option2: false },
  step2: { option1: false, option2: false },
  step3: { option1: false, option2: false }
})
const [des, setDes] = useState(0);
const [dev, setDev] = useState(0);
const [currentStep, setCurrentStep] = useState(1);


const currentStepsColor = (setNumber) => {  
  setCurrentStep(currentStep);
};

const handleDevelopmentOption = (stepNumber, optionName, optionPrice) => {
  setSelectedOptions(prevState => ({
    ...prevState,
    [stepNumber]: {
      ...prevState[stepNumber],
      [optionName]: !prevState[stepNumber][optionName] 
    }
  }));
  setDev(prevPrice => prevPrice + (selectedOptions[stepNumber][optionName] ? -optionPrice: optionPrice));
};

const handleDesignOption = (stepNumber, optionName, optionPrice) => {
  setSelectedOptions(prevState => ({
    ...prevState,
    [stepNumber]: {
      ...prevState[stepNumber],
      [optionName]: !prevState[stepNumber][optionName] 
    }
  }));
  setDes(prevPrice => prevPrice + (selectedOptions[stepNumber][optionName] ? -optionPrice: optionPrice));
};

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

  <div className="steps">
  <h2 class="sr-only">Steps</h2>

  <div
    class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
  >
    <ol
      class="relative z-10 flex justify-between text-sm font-medium text-gray-500"
    >
      <li id={currentStep >= 1 ? 'active' : ''} class="flex items-center gap-2 bg-white p-2">
        <span id={currentStep >= 1 ? 'active' : ''} onClick={() => currentStepsColor(1)} 
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6" 
        >
          1
        </span>

        <span class="hidden sm:block"> General Information </span>
      </li>

      <li id={currentStep >= 2 ? 'active' : ''} class="flex items-center gap-2 bg-white p-2">
         <span id={currentStep >= 2 ? 'active' : ''} onClick={() => currentStepsColor(2)} 
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6" 
        >
          2
        </span>

        <span class="hidden sm:block"> Complexity </span>
      </li>

      <li id={currentStep >= 3 ? 'active' : ''} class="flex items-center gap-2 bg-white p-2">
     <span id={currentStep >= 3 ? 'active' : ''} onClick={() => currentStepsColor(3)} 
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

{/* STEPS *END* */}


{/* Prices and Options */}

<div>
      <ul>
        <li>
          <h2>Step 1</h2>
          <label>
            Option 1 ($10)
            <input type="checkbox" checked={selectedOptions.step1.option1} onChange={() => handleDevelopmentOption('step1', 'option1', 10)} />
          </label>
          <label>
            Option 2 ($20)
            <input type="checkbox" checked={selectedOptions.step1.option2} onChange={() => handleDevelopmentOption('step1', 'option2', 20)} />
          </label>
        </li>
        <li>
          <h2>Step 2</h2>
          <label>
            Option 1 ($15)
            <input type="checkbox" checked={selectedOptions.step2.option1} onChange={() => handleDevelopmentOption('step2', 'option1', 15)} />
          </label>
          <label>
            Option 2 ($25)
            <input type="checkbox" checked={selectedOptions.step2.option2} onChange={() => handleDevelopmentOption('step2', 'option2', 25)} />
          </label>
        </li>
        <li>
          <h2>Step 3</h2>
          <label>
            Option 1 ($5)
            <input type="checkbox" checked={selectedOptions.step3.option1} onChange={() => handleDesignOption('step3', 'option1', 5)} />
          </label>
          <label>
            Option 2 ($10)
            <input type="checkbox" checked={selectedOptions.step3.option2} onChange={() => handleDesignOption('step3', 'option2', 10)} />
          </label>
        </li>
      </ul>
    </div>

{/* Prices and Options *END* */}

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total
          </dt>

          <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">
            ${des + dev}
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
</>
    );
}

export default QuickQuote;