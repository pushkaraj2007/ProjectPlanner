import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import Link from 'next/link';
import CreationsCard from './CreationsCard';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen py-8">
            <div className="text-3xl font-bold text-center mb-8 text-gray-800">
                Your Creations ✨
            </div>

            <div className='flex items-center justify-center w-full'>
                <CreationsCard />
            </div>
        </div>
    );
};

export default Dashboard;
