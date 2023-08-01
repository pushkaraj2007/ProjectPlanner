import React from 'react'
import {BsPlusCircle} from 'react-icons/bs'

const Dashboard = () => {

    return (
        <div className=' min-h-screen'>
            <div className=' text-2xl font-bold flex justify-center'>
                Your creations ✨
            </div>

            <div className='flex flex-wrap justify-center mt-12'>
                <div className=' w-[400px] k p-4 hover:transform hover:-translate-y-1 transition duration-500 cursor-pointer'>
                    <div className='flex h-[300px] flex-col items-center justify-center border dark:border-gray-600 border-gray-300 p-6 rounded-lg transition duration-500'>
                        <div className='inline-flex items-center justify-center rounded-full mb-5'>
                            <BsPlusCircle size={30} />
                        </div>
                        <h2 className='text-lg dark:text-gray-300 text-gray-900 font-medium title-font mb-2'>
                            Create New
                        </h2>
                    </div>
                </div>
                <div className=' w-[400px] k p-4 hover:transform hover:-translate-y-1 transition duration-500 cursor-pointer'>
                    <div className='flex h-[300px] flex-col items-center justify-center border dark:border-gray-600 border-gray-300 p-6 rounded-lg transition duration-500'>
                        <div className='inline-flex items-center justify-center rounded-full mb-5'>
                            <BsPlusCircle size={30} />
                        </div>
                        <h2 className='text-lg dark:text-gray-300 text-gray-900 font-medium title-font mb-2'>
                            Create New
                        </h2>
                    </div>
                </div>
                <div className=' w-[400px] k p-4 hover:transform hover:-translate-y-1 transition duration-500 cursor-pointer'>
                    <div className='flex h-[300px] flex-col items-center justify-center border dark:border-gray-600 border-gray-300 p-6 rounded-lg transition duration-500'>
                        <div className='inline-flex items-center justify-center rounded-full mb-5'>
                            <BsPlusCircle size={30} />
                        </div>
                        <h2 className='text-lg dark:text-gray-300 text-gray-900 font-medium title-font mb-2'>
                            Create New
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard