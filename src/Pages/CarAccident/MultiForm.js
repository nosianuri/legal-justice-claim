import React, { useState } from 'react'
import Description from './Steps/Description';
import Details from './Steps/Details';
import Fault from './Steps/Fault';
import Final from './Steps/Final';
import Injury from './Steps/Injury';
import InjuryDate from './Steps/InjuryDate';
import Represent from './Steps/Represent';
import './CarAccident.css';

const MultiForm = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });

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
            return <Injury formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Represent formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <Fault formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return <InjuryDate formData={formData} setFormData={setFormData} />;
        } else if (page === 4) {
            return <Description formData={formData} setFormData={setFormData} />;
        } else if (page === 5) {
            return <Details formData={formData} setFormData={setFormData} />;
        } else {
            return <Final formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className='mx-auto rounded-2xl bg-[#fff] text-gray-900'>
            <div className="form horizontal container px-10">

                <div className="progressbar">
                    <div
                        style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "50%" : page == 3 ? "60%" : page == 4 ? "80%" : page == 5 ? "90%" : "100%" }}
                    ></div>
                </div>
                <div className="form-container pb-5">
                    {/* <div className="header">
  <h1>{FormTitles[page]}</h1>
</div> */}
                    <div className="body">{PageDisplay()}</div>
                    <div className="footer mt-5">
                        <button className="text-xl cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Back
                        </button>
                        <button className="text-xl cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    alert("FORM SUBMITTED");
                                    console.log(formData);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 2 ? "Submit" : "Continue"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiForm