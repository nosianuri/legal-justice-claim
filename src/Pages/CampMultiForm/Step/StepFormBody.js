import React, { useState } from 'react'
import Stepper from './Stepper';
import { UseContextProvider } from '../Contexts/StepperContext';
import Account from './Account';
import Claim from './Claim';
import Details from './Details';
import Final from './Final';
import Injury from './Injury';
import Payment from './Payment';
import StepperControl from './StepperControl';

const StepFormBody = () => {
    const [currentStep, setCurrentStep] = useState(1);
  
    const steps = [
      "Account Information",
      "Claim Information",
      "Injury Information",
      "Personal Details",
      // "Payment",
      "Complete",
    ];
  
    const displayStep = (step) => {
      switch (step) {
        case 1:
          return <Account />;
        case 2:
          return <Claim />;
        case 3:
          return <Injury />;
        case 4:
          return <Details />;
        // case 5:
        //   return <Payment />;
        case 5:
          return <Final />;
        default:
      }
    };
    
  
    const handleClick = (direction) => {
      let newStep = currentStep;
  
      direction === "next" ? newStep++ : newStep--;
      // check if steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };
    return (
      <div className='lg:pt-[10px] mb-5'>
        {/* Stepper */}
        <div className="mx-auto rounded-2xl bg-white pb-2 ">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />
  
          <div className="my-3 px-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>
  
        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
        {/* navigation Controls */}
      </div>
    )
  }

export default StepFormBody