"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const SigninButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex items-center gap-4 ml-auto">
                <button className="border border-transparent py-1 px-2 transition duration-300 hover:border-green-500">🔥 5</button>
                <button onClick={()=> signOut()}>
                    <Image src={session.user.image as string} width={40} height={40} alt="Profile Image" className="rounded-full" />
                </button>
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
