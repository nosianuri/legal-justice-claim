import React, { useState } from 'react'
import Final from './Steps/Final';
import Description from './Steps/Description';
import Details from './Steps/Details';
import Fault from './Steps/Fault';
import Injury from './Steps/Injury';
import InjuryDate from './Steps/InjuryDate';
import Represent from './Steps/Represent';
import { UseContextProvider } from './Context/StepperContext';
import StepperControl from './StepperControl';
import Stepper from './Stepper';


const StepFormBody = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Physical Injury",
        "Currently Represented",
        "At Fault",
        "Incident Date",
        "Case Description",
        "Details",
        "Address",
        "Final",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Injury />;
            case 2:
                return <Represent />;
            case 3:
                return <Fault />;
            case 4:
                return <InjuryDate />;
            case 5:
                return <Description />;
            case 6:
                return <Details />;
            case 7:
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
        <div className=' mb-5'>
            {/* Stepper */}
            <div className="mx-auto rounded-2xl bg-[#fff] text-gray-900 ">
                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    {/* <Stepper steps={steps} currentStep={currentStep} /> */}
                    <img src="https://i.ibb.co/m6yGNqR/hands-gesture-ph-blue.png" alt="" className='mx-auto' />
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