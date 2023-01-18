import React, { useState } from 'react'
import axios from 'axios';
import { url } from '../url';

export default function AddRecord({ exp, cat, cid, partner }) {

    const [detail, setDetail] = useState('');
    const [paid, setPaid] = useState(0);
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    let id = localStorage.getItem("k");


    const addCat = (uid, cat_id) => {

        if (detail && date) {
            let obj = {
                uid: uid,
                date,
                amount: paid,
                detail,
                cat_id: cat_id,
                amountrecieved: amount
            };

            axios.post(url + `addRecord`, obj)
                .then((res) => {
                    setDetail('');
                    setDate('');
                    setPaid(0);
                    setAmount('');
                }).catch(err => console.log(err))

        }

    }

    const addRecord = () => {
        if (partner) {
            let pid = localStorage.getItem("pid");
            addCat(pid, -1);

        } else {
            addCat(id, cid);
        }
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Add New Record</h1>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Detail
                </label>
                <div className="mt-1">
                    <input
                        id="detail"
                        name="detail"
                        type="text"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {exp === 1 ? <div>
                    <label className="block font-medium text-gray-700 text-lg my-2">
                        Amount Received
                    </label>
                    <div className="mt-1">
                        <input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            id="Amount"
                            name="Amount"
                            type="number"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div> : null}

                <label className="block font-medium text-gray-700 text-lg my-2">
                    Amount Paid / Total Rest
                </label>
                <div className="mt-1">
                    <input
                        value={paid}
                        onChange={(e) => setPaid(e.target.value)}
                        id="Amount"
                        name="Amount"
                        type="te"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {partner ? null : <div>
                    <label className="block font-medium text-gray-700 text-lg my-2">
                        Category
                    </label>
                    <div className="mt-1">
                        <input
                            id="Amount"
                            name="Amount"
                            type="text"
                            value={cat}
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>}
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Date
                </label>
                <div class="flex items-center justify-center">
                    <input type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" />

                </div>

                <button
                    onClick={() => addRecord()}
                    type="button"
                    className="my-4 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-themeBlue hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeBlue hover:scale-110"                >
                    Add Record
                </button>
            </div>

        </>

    );
}
