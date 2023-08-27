import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi'
import { FaChartLine, FaCoins, FaLightbulb, FaLock, FaPuzzlePiece, FaUser } from 'react-icons/fa';

export default function Home() {
    return (
        <>
            <section className='body-font min-h-screen w-full'>
                <div className='flex items-center flex-col justify-center pt-40 pb-16 flex-wrap lg:flex-nowrap'>
                    <div className='flex flex-wrap flex-col items-center text-center'>
                        <h1 className='flex items-center text-3xl md:text-6xl mb-2 text-gray-900 font-bold'>
                            <p>Discover Your</p> &nbsp;
                            <p className='text-blue-600'>Dream Project</p>
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

            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Discover the Power of Our AI Project Suggestion Tool</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* User Friendly Interface */}
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full p-4">
                                <FaUser className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">User Friendly Interface</h3>
                            <p className="text-gray-600 mt-2">Our tool features an intuitive and easy-to-navigate interface, ensuring a smooth experience for every user.</p>
                        </div>

                        {/* Different Complexity Levels */}
                        <div className="flex flex-col items-center">
                            <div className="bg-green-500 text-white rounded-full p-4">
                                <FaPuzzlePiece className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Different Complexity Levels</h3>
                            <p className="text-gray-600 mt-2">Whether you're a beginner or an expert, our tool offers project suggestions tailored to your skill level.</p>
                        </div>

                        {/* Relevant Project Ideas */}
                        <div className="flex flex-col items-center">
                            <div className="bg-purple-500 text-white rounded-full p-4">
                                <FaLightbulb className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Relevant Project Ideas</h3>
                            <p className="text-gray-600 mt-2">Get project ideas that align with your interests and goals, making your creative journey more exciting.</p>
                        </div>

                        {/* Free Credits */}
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-500 text-white rounded-full p-4">
                                <FaCoins className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Free Credits</h3>
                            <p className="text-gray-600 mt-2">Enjoy free credits to unlock premium features, giving you access to even more project suggestions.</p>
                        </div>

                        {/* Secure */}
                        <div className="flex flex-col items-center">
                            <div className="bg-red-500 text-white rounded-full p-4">
                                <FaLock className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Secure</h3>
                            <p className="text-gray-600 mt-2">Your data and privacy are our top priorities. Our tool is built with security measures to keep your information safe.</p>
                        </div>

                        {/* Regular Improvement */}
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-900 text-white rounded-full p-4">
                                <FaChartLine className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Regular Improvement</h3>
                            <p className="text-gray-600 mt-2">We're dedicated to continuous enhancement, delivering fresh features and improved suggestions over time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
