export default function StepperControl({ handleClick, currentStep, steps }) {
    return (
      <div className="container mt-10 mb-8 gap-10 flex justify-center">
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#84754e] hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>
  
        <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-[#A6192E] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#84754e] hover:text-white"
        >
          {currentStep === steps.length - 1 ? "Confirm" :currentStep === steps.length - 1 ? " " : "Continue"}
        </button>
      </div>
    )
  }