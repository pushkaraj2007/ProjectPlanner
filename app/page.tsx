import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
    return (
        <section className='body-font lg:h-[100vh] w-full'>
            <div className='flex items-center justify-around pt-36 pb-16 flex-wrap lg:flex-nowrap'>
                <div className='flex flex-wrap flex-col items-center text-center'>
                    <h1 className='text-3xl md:text-5xl mb-2 dark:text-gray-200 text-gray-900 font-bold'>
                        <p className='mb-3'>Discover Your <span className='text-blue-600'>Dream Project.</span></p>
                    </h1>
                    <p className='leading-relaxed text-gray-500 text-xl'>
                        ProjectPlanner helps you get unique project ideas based on the technologies you select.
                        <br />Never run out of ideas again!
                    </p>

                    <button
                        className="flex items-center mt-8 mx-auto bg-blue-700 text-white px-8 py-4 text-xl md:text-2xl font-semibold rounded-full shadow-lg hover:bg-opacity-95 transition-all duration-300 hover:scale-95 transform"
                    >
                        Get Started
                        <FiArrowRight className='ml-2' />
                    </button>

                </div>

                <div>
                    <Image src={'/man-coding.svg'} height={600} width={600} alt='Man coding' className='mt-7 lg:mt-0' />
                </div>

            </div>
        </section>
    );
}
