import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { url } from '../url';
import './Global_vaiables';

export default function AddPartners() {

    const navigate = useNavigate();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    useEffect(() => {

        if (global.update_id !== -1) {
            axios.get(url + `getSingleUser/${global.update_id}`)
                .then((res) => {
                    setFirstName(res.data[0]['firstname'])
                    setLastName(res.data[0]['lastname'])
                    setContact(res.data[0]['contact'])
                    setUserName(res.data[0]['username'])
                    setPassword(res.data[0]['password'])
                    setConfirmPassword(res.data[0]['password'])
                }).catch(err => console.log(err))
        }
    }, [global.update_id !== -1])

    const submitForm = () => {

        if (firstName && lastName && contact && userName && password && confirmpassword) {
            if (password === confirmpassword) {
                let json = {
                    firstname: firstName, lastname: lastName,
                    contact: contact, username: userName, password: password
                };
                if (global.update_id === -1) {
                    axios.post(url + 'signup', json)
                        .then(res => {
                            alert('User Added!')
                        }).catch(err => {
                            console.log('ERR', err)

                        });
                } else {

                    axios.put(url + `updateUser/${global.update_id}`, json)
                        .then(res => {
                            alert('User Updated!')
                        }).catch(err => {
                            console.log('ERR', err)

                        });
                }

            }

        }
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900 text-center">
                    {global.update_id === -1 ? 'Add New Partner' : 'Update Partner'}
                </h1>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    First Name
                </label>
                <div className="mt-1">
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="detail"
                        name="detail"
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Last Name
                </label>
                <div className="mt-1">
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="Amount"
                        name="Amount"
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Contact
                </label>
                <div className="mt-1">
                    <input
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        id="Amount"
                        name="Amount"
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    UserName
                </label>
                <div className="mt-1">
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        id="Amount"
                        name="Amount"
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Password
                </label>
                <div className="mt-1">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="Amount"
                        name="Amount"
                        type="password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Confirm Password
                </label>
                <div className="mt-1">
                    <input
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="Amount"
                        name="Amount"
                        type="password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    onClick={submitForm}
                    type="button"
                    className="my-4 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-themeBlue hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeBlue hover:scale-110"                >
                    {global.update_id === -1 ? 'Add  Partner' : 'Update Partner'}
                </button>


            </div>

        </>
    );
}
