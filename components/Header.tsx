import { NextPage } from 'next'
import Link from 'next/link'
import SigninButton from './SigninButton';

const Header: NextPage = () => {

    return (
        <header className='text-gray-600 bg-gray-50 body-font dark:bg-gray-900'>
            <div className='flex flex-wrap items-center justify-between p-7 px-24 md:flex-row'>
                <div className='flex flex-row items-center'>
                        <Link className='cursor-pointer' href='/'>
                            <div className='flex items-center font-medium text-gray-900 title-font dark:text-gray-300 logoDiv'>
                                <span className='ml-3 text-2xl font-bold text-blue-600'>ProjectPlanner</span>
                            </div>
                        </Link>
                </div>

                <SigninButton />
            </div>
        </header>
    )
}

export default Header