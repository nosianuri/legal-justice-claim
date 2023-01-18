import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ClForm = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [perror, setPerror] = useState('');


  let sendDataToLeadProsper = async (e) => {
    e.preventDefault()
    let phone = e.target.phone.value
    let camp_lj = e.target.camp_lj.value
    let representation = e.target.representation.value


    if ((phone.length < 10) || (phone.length > 10)) {
      setPerror('Phone number should contain 10 character')
      return;
    }
    else{
      setPerror('');
      setLoading(true);

    if( camp_lj == "Yes" && representation == "No" ){

      let responseToZapier = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bnoi84k/", {
        method: "POST",
        body: JSON.stringify({
          "lp_campaign_id": "10056",
          "lp_supplier_id": "21039",
          "lp_key": "xzmjar7ns7ppq",
          "first_name": e.target.first_name.value,
          "last_name": e.target.last_name.value,
          "phone": "+" + 1 + e.target.phone.value,
          "email": e.target.email.value,
          "camp_lj": e.target.camp_lj.value,
          "representation": e.target.representation.value,
          "injury_type_list": e.target.injury_type_list.value,

          "comment": e.target.comment.value,
        })
      }).then(response2 => response2.json())
          .then(data2 => {
            console.log(data2);
            setLoading(false)
            navigate("/thanks");

          })
          .catch(error2 => console.log(error2))


      // submittinh leads
      let leadSubmit = document.getElementById("form-submit")
      let data = {
        "first_name": e.target.first_name.value,
        "last_name": e.target.last_name.value,
        "phone": "+" + 1 + e.target.phone.value,
        "email": e.target.email.value,
        "representation": e.target.representation.value,
        "injury_type_list": e.target.injury_type_list.value,
        "comment": e.target.comment.value,
        "camp_lj": e.target.camp_lj.value,
      }
      if( Object.keys(data).length > 0){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_submitted",
          "data": data,
        })
        console.log("Form Data Pushed!")
      }
      else{
        toast.warning("Input fields can't be empty", {
          position: toast.POSITION.TOP_CENTER
        })
      }
      // web -> sheets zap
      let responseToZapierSheets = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bn4acix/", {
        method: "POST",
        body: JSON.stringify({
          "lp_campaign_id": "10056",
          "lp_supplier_id": "21039",
          "lp_key": "xzmjar7ns7ppq",
          "first_name": e.target.first_name.value,
          "last_name": e.target.last_name.value,
          "phone": "+" + 1 + e.target.phone.value,
          "email": e.target.email.value,
          "camp_lj": e.target.camp_lj.value,
          "representation": e.target.representation.value,
          "injury_type_list": e.target.injury_type_list.value,

          "comment": e.target.comment.value,
        })
      }).then(response3 => response3.json())
          .then(data3 => {
            console.log(data3);
            setLoading(false)
            navigate("/thanks");

          })
          .catch(error2 => console.log(error2))

      console.log("YES NO")
      // navigate("/thanks")
    }
    else{
      // submitting leads
      let leadSubmit = document.getElementById("form-submit")
      let data = {
        "first_name": e.target.first_name.value,
        "last_name": e.target.last_name.value,
        "phone": "+" + 1 + e.target.phone.value,
        "email": e.target.email.value,
        "representation": e.target.representation.value,
        "injury_type_list": e.target.injury_type_list.value,
        "comment": e.target.comment.value,
        "camp_lj": e.target.camp_lj.value,
      }
      if( Object.keys(data).length > 0){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_submitted",
          "data": data,
        })
        console.log("Form Data Pushed!")
      }
      else{
        toast.warning("Input fields can't be empty", {
          position: toast.POSITION.TOP_CENTER
        })
      }
      // web -> sheets zap
      let responseToZapierSheets = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bn4acix/", {
        method: "POST",
        body: JSON.stringify({
          "lp_campaign_id": "10056",
          "lp_supplier_id": "21039",
          "lp_key": "xzmjar7ns7ppq",
          "first_name": e.target.first_name.value,
          "last_name": e.target.last_name.value,
          "phone": "+" + 1 + e.target.phone.value,
          "email": e.target.email.value,
          "camp_lj": e.target.camp_lj.value,
          "representation": e.target.representation.value,
          "injury_type_list": e.target.injury_type_list.value,

          "comment": e.target.comment.value,
        })
      }).then(response3 => response3.json())
          .then(data3 => {
            console.log(data3);
            setLoading(false)
            navigate("/thanks");
          })
          .catch(error2 => console.log(error2))
      console.log("ELSE WORKING FINE")
      navigate("/thanks")
    }
    }
  }

  function pushData() {
    window.dataLayer = window.dataLayer || [];
    let call = document.getElementById("call")

    window.dataLayer.push({
      event: "call_button"
    })
    console.log("clicked")
  }



  function pushReview(e) {
    window.dataLayer = window.dataLayer || [];
    let call = document.getElementById("call")
      window.dataLayer.push({
        event: "review_clicked"
      })
      console.log("clicked")
    }



    return (
        <div className='mb-16 bg-[#f0f0f0] border-8 border-[#f0f0f0] lg:mt-[-20px] rounded-t-xl shadow-xl'>
            <div className='p-5'>
                <div className='bg-[#BD902D] lg:px-10 px-2 rounded-t-xl text-white py-3' id='page-form'>
                    <h2 className='text-center lg:text-xl'>FILL OUT THE FORM BELOW</h2>
                    <h5 className='text-center lg:text-2xl text-xl'>TO GET YOUR FREE CLAIM REVIEW</h5>
                    <p className='text-center lg:text-xl'>You may be entitled to <span className='underline'>financial compensation!</span></p>
                </div>
                <form  onSubmit={sendDataToLeadProsper}>
                    <div className='grid lg:grid-cols-2 grid-cols-1 py-5 lg:gap-8'>
                        <div className='space-y-3 mb-3 lg:mb-0'>
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text" name="first_name" placeholder='First Name' required />
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text" name="last_name"  placeholder='Last Name' required />

                        </div>
                        <div className='space-y-3'>
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="email" name="email" placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="number" name="phone"  placeholder='Phone' required />
                            <p className='text-danger'>{perror}</p>
                        </div>
                    </div>
                    <div className='lg:w-full w-full h-[1px] bg-gray-300'></div>
                    <div className='bg-[#BD902D] lg:mx-16 rounded-xl'>
                        <h3 className='mt-5 lg:text-lg py-1 text-center text-white'>Your Information is 100% Confidential</h3>
                        <div>
                        </div>
                    </div>
                    <div className='flex gap-10 py-1 lg:px-3 mt-3 '>
                        <p>Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?</p>
                        <div>
                            <div class="inline-block relative w-40">
                                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="camp_lj" id="cpform" required>
                                    <option value="" selected>Please select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                    <div className='flex gap-10 py-1 lg:px-3'>
                        <p>Do you already have an attorney representing you for this claim?</p>
                        <div>
                            <div class="inline-block relative w-40">
                                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="representation" required>
                                    <option value="" selected>Please select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                    <div className='flex gap-10 py-1 lg:px-3'>
                        <p>What injury were you or your loved one diagnosed with?</p>
                        <div>
                            <div class="inline-block relative w-40">
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
                            </div>
                        </div>
                    </div>

                    <div className='lg:px-10 mt-3'>
                        <p className='text-center py-1'>Briefly describe what happened</p>
                        <textarea className='rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' name="comment" id="" cols="50" rows="2" placeholder='More details about your claim' required></textarea>
                    </div>
                    {/* <div className='text-center bg-[#BD902D] rounded my-5'>
                        <a href="/">
                        <button id='form-submit' className="uppercase text-xl py-2 text-white" disabled> <i className='fas fa-spinner fa-spin'></i>{" "} Submit My Claim... </button>
                        </a>
                    </div> */}
                    {!loading && (
                        <div className='text-center bg-[#BD902D] rounded my-5'>
                        <button id='form-submit' className="uppercase text-xl py-2 text-white" >Submit My Claim </button>
                    </div>
                  )}
                  {loading && (
                    <div className='text-center bg-[#BD902D] rounded my-5'>
                        <button id='form-submit' className="uppercase text-xl py-2 text-white" disabled> <i className='fas fa-spinner fa-spin'></i>{" "} Submit My Claim... </button>
                    </div>
                  )}
                </form>
                <p className='text-xs text-gray-400 lg:px-10'>By clicking the “Submit My Claim” button, you certify that you have provided your legal name and your own phone number, you agree to the <a className='text-[#BD902D] hover:underline' href="/terms&condition">Terms and Conditions</a> and <a className='text-[#BD902D]' href="/privacy-policy">Privacy Policy</a> and authorize Lawsuit-Winning and its <a className='text-[#BD902D]' href="/">partners</a> to contact you by email or at the phone number you entered using automated technology including recurring auto-dialers, pre-recorded messages, and text messages, even if your phone is a mobile number or is currently listed on any state, federal, or corporate “Do Not Call” list. You understand that your telephone company may impose charges on you for these contacts, and that you can revoke this consent at any time. For SMS campaigns Text STOP to cancel and HELP for help. Message and data rates may apply. By clicking the “Submit My Claim” button and submitting this form, I affirm that I have read and agree to this Site’s <a className='text-[#BD902D]' href="/terms&condition">Terms and Conditions</a> (including the arbitration provision and the E-SIGN consent) and Privacy Policy.</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ClForm