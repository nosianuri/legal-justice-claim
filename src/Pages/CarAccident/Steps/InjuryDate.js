import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InjuryDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const FormatedDate = selectedDate.getFullYear() + "/" + parseInt(selectedDate.getMonth() + 1) + "/" + selectedDate.getDate();
  console.log(FormatedDate);
  return (
    <div className="flex flex-col w-full">
    <div className="mx-2  flex-1">
        <div className='text-center'>
            <h2 className='text-2xl font-semibold'>When did the accident happen <em className='text-red-700'>*</em></h2>
            <div className='mt-5'>
            <div className='inline-block  '>
                    <DatePicker
                        className='border border-gray-500 rounded block appearance-none px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#137bb6] w-full'
                        placeholderText='YYYY/MM/DD'
                        dateFormat='yyyy/MM/dd'
                        filterDate={d => {
                            return new Date() > d;
                        }}
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        required={true}
                    />
                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div> */}
                </div>
                {/* <div class="inline-block relative w-40">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id='pinjur' name="injury_type_list" required>
                        <option value="Please select">Please select...</option>
                        <option value="Aplastic anemia">Aplastic anemia</option>
                        <option value="Appendix cancer">Appendix cancer</option>
                        <option value="Amyotrophic lateral">Amyotrophic lateral</option>
                        <option value="sclerosis (ALS)">sclerosis (ALS)</option>
                        <option value="Autoimmune disease">Autoimmune disease</option>
                        <option value="Bile duct cancer">Bile duct cancer</option>
                        <option value="Birth defects">Birth defects</option>
                        <option value="Bladder cancer">Bladder cancer</option>
                        <option value="Brain cancer">Brain cancer</option>
                        <option value="Breast cancer">Breast cancer</option>
                        <option value="Cervical cancer">Cervical cancer</option>
                        <option value="Cirrhosis of the liver">Cirrhosis of the liver</option>
                        <option value="Conjoined twins">Conjoined twins</option>
                        <option value="Colorectal (colon) cancer">Colorectal (colon) cancer</option>
                        <option value="Congenital malformation">Congenital malformation</option>
                        <option value="End-stage renal disease">End-stage renal disease</option>
                        <option value="Esophageal cancer">Esophageal cancer</option>
                        <option value="Female infertility">Female infertility</option>
                        <option value="Gallbladder cancer">Gallbladder cancer</option>
                        <option value="Hepatic steatosis (Fatty liver disease)">Hepatic steatosis (Fatty liver disease)</option>
                        <option value="Hodgkin's disease">Hodgkin's disease</option>
                        <option value="Intestinal cancer">Intestinal cancer</option>
                        <option value="Kidney cancer">Kidney cancer</option>
                        <option value="Leukemia">Leukemia</option>
                        <option value="Liver cancer">Liver cancer</option>
                        <option value="Lung cancer">Lung cancer</option>
                        <option value="Miscarriage">Miscarriage</option>
                        <option value="Multiple myeloma">Multiple myeloma</option>
                        <option value="Multiple Sclerosis (MS)">Multiple Sclerosis (MS)</option>
                        <option value="Multiple myeloma">Multiple myeloma</option>
                        <option value="Myelodysplastic">Myelodysplastic</option>
                        <option value="syndromes (MDS)">syndromes (MDS)</option>
                        <option value="Neurobehavioral effects">Neurobehavioral effects</option>
                        <option value="No Injury">No Injury</option>
                        <option value="Non-Hodgkin's lymphoma (NHL)">Non-Hodgkin's lymphoma (NHL)</option>
                        <option value="Ovarian cancer">Ovarian cancer</option>
                        <option value="Other Inury">Other Inury</option>
                        <option value="Pancreatic cancer">Pancreatic cancer</option>
                        <option value="Parkinson's disease">Parkinson's disease</option>
                        <option value="Prostate cancer">Prostate cancer</option>
                        <option value="Renal toxicity">Renal toxicity</option>
                        <option value="Scleroderma">Scleroderma</option>
                        <option value="Sinus cancer">Sinus cancer</option>
                        <option value="Thyroid cancer">Thyroid cancer</option>
                        <option value="No Injury ">No Injury </option>
                        <option value="Other Inury">Other Inury</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default InjuryDate