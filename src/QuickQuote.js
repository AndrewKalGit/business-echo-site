import { React, useState, useEffect, useRef } from 'react';
import './BreadCrumb.css';

//work on this

function QuickQuote(props) {

const threeDimensionalDes = 50;
const threeDimensionalDesAnimate = 100;
const twoDimensionalDes = 25;
const twoDimensionalDesAnimate = 75;

const inputAmount = {
  product1: 50,
  product2: 100,
  product3: 25,
  product4: 75
};

const [selectedOptions , setSelectedOptions] = useState({
  step1: { option1: false, option2: false },
  step2: { option1: false, option2: false, option3: false, option4: false,
  option5: false, option6: false, option7: false, option8: false,
  option9: false, option10: false,option11: false, option12: false, },
  step3: { option1: false, option2: false }
})



const [des, setDes] = useState(0);
const [dev, setDev] = useState(0);
const [currentStep, setCurrentStep] = useState(1);

const nextStep = () => {
  if (currentStep < 3) {
  setCurrentStep(currentStep + 1)
  }
}

const prevStep = () => {
  if (currentStep > 1) {
  setCurrentStep(currentStep - 1)
  }
}

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

const currentStepsColor = (setNumber) => {  
  setCurrentStep(setNumber);
};

// You need better code variable names
  // setDes is the setTotalDesignQuote
  // des is the integer: total amount of cost that goes into the des quote
function handleNumberInput(event) {
  const productName = event.target.name;
  const newQuantity = Number(event.target.value);
  const oldQuantity = Number(event.target.dataset.oldValue) || 0;
  const price = Math.abs(inputAmount[productName]);

  // Calculate the difference between the new and old quantities
  const diff = newQuantity - oldQuantity;

  // Calculate the new total based on the price and the quantity difference
  const newTotal = des + (price * diff);

  // Set the new total and update the old quantity in the dataset
  setDes(newTotal);
  event.target.dataset.oldValue = newQuantity;
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

{/* STEPS */}

<div class="border-t-2 mt-10 pt-10">
<div>

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

        <span class="hidden sm:block cursor-pointer" onClick={() => currentStepsColor(1)} > General Information </span>
      </li>

      <li id={currentStep >= 2 ? 'active' : ''} class="flex items-center gap-2 bg-white p-2">
         <span id={currentStep >= 2 ? 'active' : ''} onClick={() => currentStepsColor(2)} 
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6" 
        >
          2
        </span>

        <span class="hidden sm:block cursor-pointer" onClick={() => currentStepsColor(2)} > Functionality </span>
      </li>

      <li id={currentStep >= 3 ? 'active' : ''} class="flex items-center gap-2 bg-white p-2">
     <span id={currentStep >= 3 ? 'active' : ''} onClick={() => currentStepsColor(3)} 
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6" 
        >
          3
        </span>

        <span class="hidden sm:block cursor-pointer" onClick={() => currentStepsColor(3)} > Design </span>
      </li>
    </ol>
  </div>
</div>
</div>

{/* STEPS *END* */}


{/* Prices and Options */}

<div className="prices">
      <ul>
          <li id={currentStep === 1 ? 'active' : ''} class='hidden'>
          <h2 class="flex justify-center text-3xl font-bold text-gray-900 sm:text-4xl mt-6 mb-6">Functionality</h2>
          <div class="grid grid-cols-3">
            <div>
          <h3 class="flex justify-start text-3xl font-bold text-gray-800">
            Standard 
          </h3>
          <label class="flex justify-start text-xl mt-4 text-gray-800">
            Contact Form ($100)&nbsp;
            <input type="checkbox" checked={selectedOptions.step1.option1} onChange={() => handleDevelopmentOption('step1', 'option1', 100)} />
          </label> 
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Blog Post ($200)&nbsp;
            <input type="checkbox" checked={selectedOptions.step1.option2} name="input1" onChange={() => handleDevelopmentOption('step1', 'option2', 200)} />
          </label>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Live Chat ($200)&nbsp;
            <input type="checkbox" checked={selectedOptions.step1.option3} name="input2" onChange={() => handleDevelopmentOption('step1', 'option3', 200)} />
          </label>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Chat Bot ($200)&nbsp;
            <input type="checkbox" checked={selectedOptions.step1.option4} name="input3" onChange={() => handleDevelopmentOption('step1', 'option4', 200)} />
          </label>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            CMS ($200) &nbsp;
            <input type="checkbox" checked={selectedOptions.step1.option5} name="input4" onChange={() => handleDevelopmentOption('step1', 'option5', 200)} /> 
          </label>
          <p class="text-gray-700"> <span class="font-extrabold">ⓘ</span> Content Managemenet System: 
          <br/> Allows you to easily maintain the websites media and text without having to touch the code </p>
          </div>
          <div>
          <h3 class="flex justify-start text-3xl font-bold text-gray-800">
            E-commerce
          </h3>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Shopping Cart ($500) &nbsp;
            <input type="checkbox" onChange={() => handleDevelopmentOption('step1', 'option6', 500)} />
          </label>
          </div>
          <div>
             <h3 class="flex justify-start text-3xl font-bold text-gray-800">
            Designs
          </h3>
             <label class="flex justify-start text-xl mt-2 text-gray-800"> 3D web design(s)
             (${threeDimensionalDes}) &nbsp;
            <input id="product1" type="number" name="product1" class="w-11 border border-solid border-gray-500 rounded-md" min="0" onChange={handleNumberInput} />
          </label>
           <label class="flex justify-start text-xl mt-2 text-gray-800"> 3D web animation(s)
             (${threeDimensionalDesAnimate}) &nbsp;
            <input id="product2" type="number" name="product2" class="w-11 border border-solid border-gray-500 rounded-md " min="0"  onChange={handleNumberInput}  />
          </label>
           <label class="flex justify-start text-xl mt-2 text-gray-800"> 2D web design(s)
             (${twoDimensionalDes}) &nbsp;
               <input id="product3" type="number" name="product3" class="w-11 border border-solid border-gray-500 rounded-md " min="0" onChange={handleNumberInput}  />
          </label>
             <label class="flex justify-start text-xl mt-2 text-gray-800"> 2D web animation(s)
             (${twoDimensionalDesAnimate}) &nbsp;
            <input id="product4" type="number" name="product4" class="w-11 border border-solid border-gray-500 rounded-md " min="0"  onChange={handleNumberInput}  />
          </label>
          </div>
             </div>
        </li>
         <li id={currentStep === 2 ? 'active' : ''} class='hidden'>
          <h2 class="flex justify-center text-3xl font-bold text-gray-800 sm:text-4xl mt-6">Functionality</h2>
          <h3 class="flex justify-start text-3xl font-bold text-gray-800">
            Standard 
          </h3>
          <label class="flex justify-start text-xl mt-4 text-gray-800">
            Contact Form ($100)&nbsp;
            <input type="checkbox" checked={selectedOptions.step2.option1} onChange={() => handleDevelopmentOption('step2', 'option1', 100)} />
          </label> 
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Blog Post ($200)&nbsp;
            <input type="checkbox" checked={selectedOptions.step2.option2} name="input1" onChange={() => handleDevelopmentOption('step2', 'option2', 200)} />
          </label>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Live Chat ($200)&nbsp;
            <input type="checkbox" checked={selectedOptions.step2.option3} name="input2" onChange={() => handleDevelopmentOption('step2', 'option3', 200)} />
          </label>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Chat Bot ($200)&nbsp;
            <input type="checkbox" checked={selectedOptions.step2.option4} name="input3" onChange={() => handleDevelopmentOption('step2', 'option4', 200)} />
          </label>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            CMS ($200) &nbsp;
            <input type="checkbox" checked={selectedOptions.step2.option5} name="input4" onChange={() => handleDevelopmentOption('step2', 'option5', 200)} /> 
          </label>
          <p class="text-gray-700"> <span class="font-extrabold">ⓘ</span> Content Managemenet System: 
          <br/> Allows you to easily maintain the websites media and text without having to touch the code </p>
          <h3 class="flex justify-start text-3xl font-bold text-gray-800">
            E-commerce
          </h3>
          <label class="flex justify-start text-xl mt-2 text-gray-800">
            Shopping Cart ($500) &nbsp;
            <input type="checkbox" onChange={() => handleDevelopmentOption('step2', 'option6', 500)} />
          </label>
            <h3 class="flex justify-start text-3xl font-bold text-gray-800">
            Designs
          </h3>
             <label class="flex justify-start text-xl mt-2 text-gray-800"> 3D web design(s)
             (${threeDimensionalDes}) &nbsp;
            <input id="product1" type="number" name="product1" class="w-11 border border-solid border-gray-500 rounded-md" min="0" onChange={handleNumberInput} />
          </label>
           <label class="flex justify-start text-xl mt-2 text-gray-800"> 3D web animation(s)
             (${threeDimensionalDesAnimate}) &nbsp;
            <input id="product2" type="number" name="product2" class="w-11 border border-solid border-gray-500 rounded-md " min="0"  onChange={handleNumberInput}  />
          </label>
           <label class="flex justify-start text-xl mt-2 text-gray-800"> 2D web design(s)
             (${twoDimensionalDes}) &nbsp;
               <input id="product3" type="number" name="product3" class="w-11 border border-solid border-gray-500 rounded-md " min="0" onChange={handleNumberInput}  />
          </label>
             <label class="flex justify-start text-xl mt-2 text-gray-800"> 2D web animation(s)
             (${twoDimensionalDesAnimate}) &nbsp;
            <input id="product4" type="number" name="product4" class="w-11 border border-solid border-gray-500 rounded-md " min="0"  onChange={handleNumberInput}  />
          </label>
        </li>
         <li id={currentStep === 3 ? 'active' : ''} class='hidden'>
          <h2 class="flex justify-center text-3xl font-bold text-gray-800 sm:text-4xl mt-6">Pages</h2>
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
      <dl class="grid grid-cols-3 gap-4">
        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total
          </dt>

          <dd class="text-lg sm:text-2xl font-extrabold text-blue-500 md:text-4xl">
            ${des + dev}
          </dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Develop
          </dt>

          <dd class="text-lg sm:text-2xl font-extrabold text-blue-500 md:text-4xl">${dev}</dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Design
          </dt>

          <dd class="text-lg sm:text-2xl font-extrabold text-blue-500 md:text-4xl">${des}</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
<div class="flex justify-center gap-1 mb-5">
  <button
    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200" onClick={prevStep}
  >
    <span class="sr-only">Prev Step</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
    <button
    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200" onClick={nextStep}
  >
    <span class="sr-only">Next Step</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    </button>
</div>
</section>
</>
    );
}

export default QuickQuote;