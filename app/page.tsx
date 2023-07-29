import Head from 'next/head';
import Link from 'next/link';
import Features2 from '@/components/Home/Features2';
import Footer from '@/components/Footer';
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
    return (
        <section className='bg-gradient-to-b from-gray-100 to-gray-200 body-font h-[100vh] w-full'>
            <div className='flex items-center justify-center pt-28 pb-16'>
                <div className='flex flex-wrap flex-col items-center text-center'>
                    <h1 className='text-3xl md:text-5xl mb-2 dark:text-gray-200 text-gray-900 font-bold'>
                        <p className='mb-3'>Discover Your <span className='text-blue-600'>Dream Project.</span></p>
                    </h1>
                    <p className='leading-relaxed text-gray-500 text-xl'>
                        ProjectPlanner helps you get unique project ideas based on the technologies you select. 
                        <br />Never run out of ideas again!
                    </p>

                    <div className='mt-8 text-xl'>
                        ✅ Everytime unique ideas &nbsp; &nbsp;
                        ✅ Customizable inputs &nbsp; &nbsp;
                        ✅ Detailed description &nbsp; &nbsp;
                        ✅ Free to start
                    </div>
                </div>


            </div>

            <button
                className="flex items-center mx-auto bg-blue-700 text-white px-8 py-4 text-xl md:text-2xl font-semibold rounded-full shadow-lg hover:bg-opacity-95 transition-all duration-300 hover:scale-95 transform"
            >
                Get Started
                <FiArrowRight className='ml-2' />
            </button>
        </section>
    );
}
