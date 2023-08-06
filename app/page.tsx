import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi'
import TextEffect from '@/components/TextEffect';

export default function Home() {
    return (
        <section className='body-font min-h-screen w-full'>
            <div className='flex items-center flex-col justify-center pt-40 pb-16 flex-wrap lg:flex-nowrap'>
                <div className='flex flex-wrap flex-col items-center text-center'>
                    <h1 className='flex items-center text-3xl md:text-6xl mb-2 dark:text-gray-200 text-gray-900 font-bold'>
                        <p className='mb-3'>Discover Your</p> &nbsp;
                        <TextEffect Text='Dream Project' />
                    </h1>
                    <p className='leading-relaxed text-gray-500 text-2xl'>
                        ProjectPlanner helps you get unique project ideas based on the technologies you select.
                        <br />Never run out of ideas again!
                    </p>

                    <button
                        className="flex items-center mt-8 mx-auto bg-blue-700 text-white px-8 py-4 text-xl md:text-2xl font-semibold rounded-full shadow-lg hover:bg-opacity-95 transition-all duration-300 hover:scale-95 transform"
                    >
                        Get Started
                        <span className="ml-1"> {/* Wrap the SVG in a separate span */}
                            <FiArrowRight />
                        </span>
                    </button>

                </div>

                <div className=' mt-36'>
                    <Image src={'/man-coding.svg'} height={600} width={600} alt='Man coding' className='mt-7 lg:mt-0' />
                </div>

            </div>
        </section >
    );
}
