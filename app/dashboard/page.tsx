import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import Link from 'next/link';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen py-8">
            <div className="text-3xl font-bold text-center mb-8 text-gray-800">
                Your Creations ✨
            </div>

            <div className='flex items-center justify-center w-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-[85%] xl:w-[70%]">
                    <Link href="/create-new" className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-white min-h-[250px]">
                        <div className="rounded-full bg-blue-500 text-white p-4 mb-4">
                            <BsPlusCircle size={30} />
                        </div>
                        <h2 className="text-lg text-gray-800 font-medium text-center">
                            Create New
                        </h2>
                    </Link>

                    <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-white min-h-[250px]">
                        <h2 className="text-2xl text-gray-800 font-medium text-center">
                            JavaScript
                        </h2>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-white min-h-[250px]">
                        <div className="rounded-full bg-blue-500 text-white p-4 mb-4">
                            <BsPlusCircle size={30} />
                        </div>
                        <h2 className="text-lg text-gray-800 font-medium text-center">
                            Create New
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
