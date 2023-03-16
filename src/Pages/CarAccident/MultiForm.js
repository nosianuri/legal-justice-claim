import React, { useState } from 'react'
import Description from './Steps/Description';
import Details from './Steps/Details';
import Fault from './Steps/Fault';
import Final from './Steps/Final';
import Injury from './Steps/Injury';
import InjuryDate from './Steps/InjuryDate';
import Represent from './Steps/Represent';
import './CarAccident.css';
import {
    useForm,
    formProvider,
    useFormContext,
    Controller,
} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MultiForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const formattedDate = selectedDate.toISOString().slice(0, 10);

    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [page, setPage] = useState(0);
    const [AllData, setAllData] = useState({});
    const [currently, setCurrently] = useState('yes');
    const [fault, setFault] = useState('yes');
    const [yes, no] = useState('yes');
    let tcpaText = "Please be advised that by clicking the Submit button, you are consenting to being contacted by a law firm at the phone number you provided. You are also consenting to receiving advertising and telemarketing messages via text message or pre-recorded call, which may be dialed by an autodialer. Please note that your consent is not necessary for a purchase, but standard message and data rates may apply. By clicking Submit, you are electronically signing to indicate your consent to being contacted and agreeing to the Terms and Conditions. Please be aware that submitting this form and any information contained therein does not establish an attorney-client relationship. The information provided may be reviewed by one or more attorneys and/or law firms. Additionally, please understand that any information received in response to this questionnaire is general information for which there will be no charge, and it should not be relied upon as legal advice because the law may vary from state to state. Therefore, you may need to contact local counsel for referral of this matter. By clicking Submit, you acknowledge that the information you have viewed is advertising and that you agree to receive future advertisements from Legal Justice Claim and/or its partners."



    const onSubmit = formData => {
        setLoading(true);

        const id = AllData?.first_name?.slice(0, 2) + AllData?.phone?.slice(4, 9) + AllData?.email?.slice(0, 3) + AllData?.last_name?.slice(0, 2) + formData?.zip_code?.slice(0, 4) + formData?.city?.slice(0, 2) + AllData?.phone?.slice(1, ) + formData.state?.slice(0, 1);

        const data = {
            ...AllData,
            lp_campaign_id: "12022",
            lp_supplier_id: "24637",
            lp_key: "mp12bxxmarmmx",
            ip_address: "229.222.220.248",
            user_agent: "Chrome",
            sub_id1: "January",
            api_key: "6309-24038-2x7h3zjbkzz6",
            trusted_form_cert_url: `https://cert.trustedform.com/${id}`,
            tcpa_text: tcpaText,
            city: formData.city,
            state: formData.state,
            zip_code: formData.zip_code,
            incident_date: formattedDate,
            physical_injury: "yes",
            currently_represented: currently,
            at_fault: fault,
            landing_page: 'https://legaljusticeclaim.com/',
        }
        console.log(data, "so good")
        fetch('https://api.leadprosper.io/ingest', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                // if (!res.ok) {
                //     throw new Error(`HTTP error! status: ${res.status}`);
                // }
                return res.json();
            })
            .then(data => {
                if (data) {
                    toast.success('Successful post data');
                    reset();
                    setLoading(false)
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: data
                      })
                    navigate("/thanks");
                } else if (data.errors) {
                    toast.error('Something went wrong', data.errors.message);
                    setLoading(false)
                }
                console.log(data, "response data");
            })
            .catch(error => {
                console.error(error);
                toast.error(`Error: ${error.message}`);
                setLoading(false);
            });
    }
    console.log(AllData, "goods")
    const FormTitles = ["Physical Injury",
        "Currently Represented",
        "At Fault",
        "Incident Date",
        "Case Description",
        "Details",
        "Address",
        "Final",];
    const PageDisplay = () => {
        if (page === 0) {
            return <Injury page={page} setPage={setPage} register={register} errors={errors} />;
        } else if (page === 1) {
            return <Represent setCurrently={setCurrently} setPage={setPage} />;
        } else if (page === 2) {
            return <Fault setFault={setFault} setPage={setPage} />;
        } else if (page === 3) {
            return <InjuryDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} page={page} setPage={setPage} />;
        } else if (page === 4) {
            return <Description setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
        } else if (page === 5) {
            return <Details setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
        } else {
            return <Final onSubmit={onSubmit} setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
        }
    };



    function pushData() {
        window.dataLayer = window.dataLayer || [];
        let call = document.getElementById()
    
        window.dataLayer.push({
          event: "call_button"
        })
        console.log("clicked")
      }

    return (
        <div className='mx-auto rounded-2xl bg-[#fff] text-gray-900'>
            <div className="form  container ">
                <div className="progressbar">
                    <div style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "50%" : page == 3 ? "60%" : page == 4 ? "80%" : page == 5 ? "90%" : "100%" }}
                    ></div>
                </div>
                <div className="form-container pb-5 sm:px-10 px-3 ">
                    <div className="body ">{PageDisplay()}</div>
                </div>
            </div>
        </div>
    )
}

export default MultiForm