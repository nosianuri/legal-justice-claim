import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import { useNavigate } from 'react-router-dom';

const StepForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [page, setPage] = useState(0);
    const [AllData, setAllData] = useState({});
    const [currently, setCurrently] = useState('yes');
    const [fault, setFault] = useState('yes');
    const [yes, no] = useState('yes');

    const onSubmit = formData => {
        setLoading(true);
        const data = {
            ...AllData,
            city: formData.city,
            state: formData.state,
            address: formData.address,
            zip_code: formData.zip_code,
        }
        console.log(data, "so good")
        fetch('https://api.jangl.com/v2/legal/capture', {
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
                if (data.status === "success") {
                    toast.success('Successful post data');
                    reset();
                    setLoading(false)
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: data
                      })
                    navigate("/camplejeune-thanks");
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
        "Details",
        "Final",];
    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Step2 setCurrently={setCurrently} setPage={setPage} />;
        } else if (page === 2) {
            return <Step3 setAllData={setAllData} AllData={AllData} setFault={setFault} setPage={setPage} register={register} errors={errors} />;
        } else if (page === 3) {
            return <Step4 setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
        } else {
            return <Step5 onSubmit={onSubmit} setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
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
        <div className='sm:w-[900px] mx-auto rounded-2xl text-gray-900 mt-10'>
        <div className="form  container ">
            <div className="campprogressbar">
                <div style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "60%" : page == 3 ? "80%" : "100%" }}
                ></div>
            </div>
            <div className="form-container pb-5 sm:px-10 px-3 ">
                <div className="body ">{PageDisplay()}</div>
            </div>
        </div>
    </div>
    )
}

export default StepForm