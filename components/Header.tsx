import { NextPage } from 'next'
import Link from 'next/link'
import SigninButton from './SigninButton';

const Header: NextPage = () => {

    return (
        <header className='text-gray-600 bg-gray-50 body-font dark:bg-gray-900'>
            <div className='flex flex-wrap items-center justify-between md:p-7 md:px-24 px-2 md:flex-row'>
                <div className='flex flex-row items-center'>
                        <Link className='cursor-pointer' href='/'>
                            <div className='flex items-center font-medium text-gray-900 title-font dark:text-gray-300 logoDiv'>
                                <span className='ml-3 text-2xl mt-2 md:mt-0 font-bold text-blue-600'>ProjectPlanner</span>
                            </div>
                        </Link>
                </div>

                <SigninButton />
            </div>
        </header>
    )
}

export default Header