import React, { useState } from 'react'
import Details from './Steps/Details';
import Fault from './Steps/Fault';
import Final from './Steps/Final';
import Injury from './Steps/Injury';
import Represent from './Steps/Represent';
import '../CarAccident/CarAccident.css';
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
        fetch('https://leadmanager.rayadvertising.com/api/woo-sender', {
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
            return <Injury page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Represent setCurrently={setCurrently} setPage={setPage} />;
        } else if (page === 2) {
            return <Fault setAllData={setAllData} AllData={AllData} setFault={setFault} setPage={setPage} register={register} errors={errors} />;
        } else if (page === 3) {
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
        <div className='mx-auto rounded-2xl bg-[#e2e8f0] text-gray-900'>
            <div className="form  container ">
                <div className="progressbarcamp">
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

export default MultiForm