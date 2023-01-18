import React, { useState, useEffect } from 'react'
import './Global_vaiables';
import axios from 'axios';
import { url } from '../url';




export default function Records({ onClick, cid }) {

    const [record, setRecord] = useState([]);
    const [total, setTotal] = useState([0])

    useEffect(() => {
        let uid = localStorage.getItem('k');
        console.log(url + `getRecordForCategory/${uid}/${cid}`);
        axios.get(url + `getRecordForCategory/${uid}/${cid}`)
            .then(res => {
                let ttl = 0;
                for (let i = 0; i < res.data.length; i++) {
                    ttl += res.data[i]['amountpaid'];

                }
                setTotal(ttl)
                setRecord(res.data);
            }).catch(ex => console.log(ex));
    }, [])


    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Title</h1>
            </div>
            <div className='mt-4'>
                <div className="mt-1 flex text-left">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                    Total Amount
                                </span>
                                <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder={total}

                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClick}
                        type="button"
                        className="relative -ml-px inline-flex items-center space-x-2 rounded-md border border-themeBlue bg-themeBlue  px-4 py-2 text-sm font-medium text-white hover:scale-110 focus:border-themeBlue focus:outline-none focus:ring-1 focus:ring-themeBlue "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Add Record</span>
                    </button>
                </div>
            </div>

            <div className='mt-4'>
                <table className="w-full shadow text-center bg-white">
                    <thead>
                        <tr className="border border-gray-300  ">
                            <th className="py-5 w-1/12 text-base text-gray-800">Date</th>
                            <th className="py-5 w-1/12 text-base text-gray-800">Month</th>
                            <th className="py-5 w-1/12 text-base text-gray-800">Year</th>
                            <th className="py-5 w-1/12 text-base text-gray-800">Amount</th>
                            <th className="py-5 w-1/2 text-base text-gray-800 text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {record.map((i) => (
                            <tr key={i.id}>
                                <td className="py-5">{i.date}</td>
                                <td className="py-5">{i.date[3]}{i.date[4]}</td>
                                <td className="py-5">{i.date[6]}{i.date[7]}{i.date[8]}{i.date[9]}</td>
                                <td className="py-5 text-green-600">{i.amountpaid}</td>
                                <td className="py-5 text-left">{i.detail}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    );
}
