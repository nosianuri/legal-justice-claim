import React from 'react';
import { useForm } from 'react-hook-form';

const Fault = ({ page, setPage, setAllData, AllData }) => {

  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setAllData({
      ...AllData,
      type_of_legal_problem: data.type_of_legal_problem,
    })
    setPage(3);
    console.log(AllData, data, page)
  }

  // const handleChange = (e) => {
  //   setFault(e);
  //   setPage(3)
  // };
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-2 flex-1">
          <div className='text-center'>
            <h2 className='text-2xl font-semibold'>What injury were you or your loved one diagnosed with?<em className='text-red-700'>*</em></h2>
            <div className='my-5'>
              <div class="inline-block relative w-full">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
                  {...register("type_of_legal_problem", {
                    required: {
                      value: true,
                      message: 'Type of legal problem Name is required'
                    },
                  })}
                  id='pinjur' name="type_of_legal_problem" required>
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
              </div>
              <p>
                {errors.state?.type === 'required' && <span className="text-xs text-red-500">{errors.state.message}</span>}
              </p>
            </div>
          </div>
        </div>
        <div className="footer mt-5">
          <button className="sm:text-xl text-lg cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </button>
          <input className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit" value="Continue" />
        </div>
      </form>
    </div>

  )
}
export default Fault;