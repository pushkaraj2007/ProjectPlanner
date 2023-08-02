"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const SigninButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex items-center gap-4 ml-auto">
                <button onClick={()=> signOut()}>Signout</button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn()}
            className="text-green-600 text-xl border border-transparent rounded-md py-2 px-4 transition duration-300 hover:border-green-500"
        >
            Login / Signup
        </button>
    );
};

export default SigninButton;
