"use client";

import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useContext } from 'react';
import TokenContext from "@/context/tokens/tokenContext";
import Image from "next/image";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

const SigninButton = () => {
    const tokens = useContext(TokenContext)
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    if (session && session.user) {
        return (
            <div className="flex items-center gap-4 ml-auto">
                <button className="border border-transparent py-1 px-2 transition duration-300 hover:border-green-500" onClick={openModal}>🔥 {tokens.tokenCount}</button>

                <div>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h1 className="text-xl font-semibold mb-2">Modal Content</h1>
                        <p className="mb-4">Do you have any token related code? Apply it here:</p>
                        <div className="flex flex-col mb-4">
                            <input
                                type="text"
                                placeholder="Your token code..."
                                className="bg-gray-100 outline-none text-black text-lg border border-gray-300 py-2 px-4 rounded-l-md w-full focus:ring-2 focus:ring-blue-400 mb-4"
                            />
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-400">Apply ✅</button>
                        </div>
                        <p>If you don't have the code you can contact me on <a className="underline" href="https://twitter.com/pushkaraj2007">X (Twitter)</a></p>
                        <p>or at <a className="underline" href="mailto:contactpushkaraj@gmail.com">conatcpushkaraj@gmail.com</a> and I'll help you to get one</p>
                    </Modal>
                </div>
                <Dropdown />
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn('google', {
                callbackUrl: 'http://localhost:3000/api/user-signin'
            })}
            className="text-green-600 text-xl border border-transparent rounded-md py-2 px-4 transition duration-300 hover:border-green-500"
        >
            Login / Signup
        </button>
    );
};

export default SigninButton;
