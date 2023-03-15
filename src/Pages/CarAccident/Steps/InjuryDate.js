import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const InjuryDate = ({ selectedDate, setSelectedDate, register, errors, page, setPage, handlePage }) => {
    // const [selecedDate, setSelectedDate] = useState(new Date());
    // console.log(selectedDate);
    // const FormatedDate = selectedDate.getFullYear() + "/" + parseInt(selectedDate.getMonth() + 1) + "/" + selectedDate.getDate();
    // console.log(FormatedDate);
    return (
        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InjuryDate