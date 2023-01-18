import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from '../url';


export default function Dashboard() {

    const [obj, setObj] = useState([]);
    useEffect(() => {
        axios.get(url + 'dashboard')
            .then(res => {
                setObj(res.data)
            }).catch(err => console.log(err))
    }, []);
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Total</h1>
            </div>
            <div className=''>
                <table className="w-full shadow text-left bg-white">
                    <thead>
                        <tr className="border-b border-gray-300 ">
                            <th className="py-5 sm:pl-10 pl-2 w-1/4 text-base text-gray-800">Details</th>
                            <th className="py-5 w-1/4 text-base text-gray-800">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            obj.map((i) => (
                                <tr>
                                    <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 text-xs sm:text-sm">{i.name}</td>
                                    <td className="pr-2 py-5 text-gray-800 text-xs sm:text-sm">{i['sum(r.amountpaid)']}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}


