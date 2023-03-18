import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InjuryDate = ({ selectedDate, setSelectedDate, page, setPage }) => {
    const handlePage = () => {
        setPage(page + 1)
    }

    return (
        <div className=""
        >
            <div className="mx-2 flex-1">
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold'>When did the accident happen?<em className='text-red-700'>*</em></h2>
                    <div className='mt-5'>
                        <div className='w-full'>
                            {/* <input className='text-[16px] border-2 border-gray-400 py-2 px-4 rounded w-96' type="date" name="myDate" id="myDate" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value="YYYY-MM-DD" placeholder="YYYY-MM-DD" required></input> */}
                            
                            {/* <DatePicker
                                className=' border border-gray-500 rounded block px-2 py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#137bb6] w-full ' placeholderText='YYYY-MM-DD' dateFormat='yyyy-MM-dd' z={d => {
                                    return new Date() > d;
                                }}
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                required={true}
                                showYearDropdown
                            /> */}
                            <DatePicker
                                className='border border-gray-500 appearance-none px-2 rounded  py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#137bb6] w-96'
                                placeholderText='YYYY-MM-DD'
                                dateFormat='yyyy-MM-dd'
                                filterDate={d => {
                                    return new Date() > d;
                                }}
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                required={true}
                                showYearDropdown
                            />
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer mt-5">
                <button className="sm:text-xl text-lg cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Back
                </button>
                <button onClick={handlePage} className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white">
                    Continue
                </button>
            </div>
        </div>)
}
export default InjuryDate