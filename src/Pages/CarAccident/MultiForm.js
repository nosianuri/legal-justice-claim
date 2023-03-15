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
    const FormatedDate = selectedDate.getFullYear() + "/" + parseInt(selectedDate.getMonth() + 1) + "/" + selectedDate.getDate();
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [page, setPage] = useState(0);
    const [AllData, setAllData] = useState({});
    const [currently, setCurrently] = useState('yes')
    const [fault, setFault] = useState('yes')
    const [yes, no] = useState('yes');

    const onSubmit = formData => {
        setLoading(true)
        const data = {
            ...AllData,
            city: formData.city,
            state: formData.state,
            zip_code: formData.zip_code,
            incident_date: FormatedDate,
            physical_injury: "yes",
            currently_represented: currently,
            at_fault: fault,
            landing_page: 'https://legaljusticeclaim.com/',
        }
        console.log(data, "so good")
        fetch('https://api.leadprosper.io/api-specs?hash=mp12bxxmarmmx', {
            method: 'HEAD',
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
                if (data.success) {
                    toast.success('Successful post data');
                    reset();
                    setLoading(false)
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

    return (
        <div className='mx-auto rounded-2xl bg-[#fff] text-gray-900'>            <div className="form horizontal container ">
            <div className="progressbar">
                <div style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "50%" : page == 3 ? "60%" : page == 4 ? "80%" : page == 5 ? "90%" : "100%" }}
                ></div>
            </div>
            <div className="form-container pb-5 sm:px-10 px-3">
                <div className="body">{PageDisplay()}</div>
            </div>
        </div>
        </div>
        // <div className='mx-auto rounded-2xl bg-[#fff] text-gray-900'>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <div className="form horizontal container ">
        //             <div className="progressbar">
        //                 <div
        //                     style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "50%" : page == 3 ? "60%" : page == 4 ? "80%" : page == 5 ? "90%" : "100%" }}
        //                 ></div>
        //             </div>
        //             <div className="form-container pb-5 sm:px-10 px-3">

        //                 <div className="body">{PageDisplay()}</div>
        //             </div>
        //         </div>
        //     </form>
        // </div>
    )
}

export default MultiForm