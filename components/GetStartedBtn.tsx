"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const GetStarted = () => {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <Link href={'/dashboard'}>
                <button className="bg-blue-700 hover:bg-blue-600 text-white flex items-center px-6 py-4 mt-6 md:mt-8 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    Get Started <FiArrowRight className="ml-2" />
                </button>
            </Link>
        )
    }
    else {
        return (
            <button className="bg-blue-700 hover:bg-blue-600 text-white flex items-center px-6 py-4 mt-6 md:mt-8 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300" onClick={() => signIn('google', {
                callbackUrl: `https://projectplanner.vercel.app/api/user-signin`
            })}>
                Get Started <FiArrowRight className="ml-2" />
            </button>
        )
    }
}

export default GetStarted