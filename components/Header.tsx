"use client";

import { NextPage } from 'next'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import SigninButton from './SigninButton';

const Header: NextPage = () => {

    return (
        <header className='text-gray-600 bg-gray-100 body-font dark:bg-gray-900'>
            <div className='container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row'>
                <div className='topNavbar flex flex-row items-center'>
                    <div className='flex flex-row items-center'>
                        <Link className='cursor-pointer' href='/'>
                            <div className='flex items-center font-medium text-gray-900 title-font dark:text-gray-300 logoDiv'>
                                <span className='ml-3 text-xl'>ProjectPlanner</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <SigninButton />
            </div>
        </header>
    )
}

export default Header