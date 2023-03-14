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
    console.log(selectedDate);
    const FormatedDate = selectedDate.getFullYear() + "/" + parseInt(selectedDate.getMonth() + 1) + "/" + selectedDate.getDate();
    console.log(FormatedDate);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [page, setPage] = useState(3);
    const [yes, no] = useState('yes');
    // const [formData, setFormData] = useState({
    //     first_name: "",
    //     last_name: "",
    //     last_name: "",
    //     firstName: "",
    //     lastName: "",
    //     username: "",
    //     nationality: "",
    //     other: "",
    // });
    // const methods = useForm();
    const onSubmit = formData => {
if(page === 4 && page ===5 ){

}
        setLoading(true)
        
        const data = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            state: formData.state,
            zip_code: formData.zip_code,
            incident_date: FormatedDate,
            physical_injury: formData.physical_injury,
            currently_represented: formData.currently_represented,
            at_fault: formData.at_fault,
            case_description: formData.case_description,
            landing_page: 'https://legaljusticeclaim.com/',
        }
        if (page > 6) {
            console.log(data, page);
            return setPage(page + 1);
        } else if (page === 6) {
            console.log(data);
            fetch('https://api.leadprosper.io/api-specs?hash=mp12bxxmarmmx', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success('successful post data');
                        reset();
                        setLoading(false)
                        navigate("/thanks");
                    }
                    else {
                        toast.error('Something is wrong');
                        setLoading(false)
                    }

                })
        }
        // console.log(data);
        // fetch('https://api.leadprosper.io/api-specs?hash=mp12bxxmarmmx', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             toast.success('successful post data');
        //             reset();
        //             setLoading(false)
        //             navigate("/thanks");
        //         }
        //         else {
        //             toast.error('Something is wrong');
        //             setLoading(false)
        //         }

        //     })
    }
 const handlePage = (e) => {
    setPage(page + 1);
 }

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
            return <Injury register={register} errors={errors} />;
        } else if (page === 1) {
            return <Represent register={register} errors={errors} />;
        } else if (page === 2) {
            return <Fault register={register} errors={errors} />;
        } else if (page === 3) {
            return <InjuryDate register={register} errors={errors} />;
        } else if (page === 4) {
            return <Description register={register} errors={errors} />;
        } else if (page === 5) {
            return <Details register={register} errors={errors} />;
        } else {
            return <Final register={register} errors={errors} />;
        }
    };

    return (
        <div className='mx-auto rounded-2xl bg-[#fff] text-gray-900'>
            <form onSubmit={handleSubmit()}>
                <div className="form horizontal container ">
                    <div className="progressbar">
                        <div
                            style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "50%" : page == 3 ? "60%" : page == 4 ? "80%" : page == 5 ? "90%" : "100%" }}
                        ></div>
                    </div>
                    <div className="form-container pb-5 sm:px-10 px-3">
                        {/* <div className="header">
  <h1>{FormTitles[page]}</h1>
</div> */}
                        <div className="body">{PageDisplay()}</div>
                        <div className="footer mt-5">
                            {(page > 0) && <button  className="sm:text-xl text-lg cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Back
                            </button>}
                            {(page === 6) && <input className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit"
                                value="Submit"
                            />}
                            {(page == 3) && <button onClick={handlePage} className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"> Continue </button>
                            }
                            {(page > 3 && page < 6) && <input onClick={handlePage} className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit"
                                value="Continue"
                            />}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MultiForm