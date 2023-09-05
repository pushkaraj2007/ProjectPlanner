"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowDownCircle, FiArrowRight, FiArrowUpCircle } from 'react-icons/fi'
import { FaChartLine, FaCoins, FaLightbulb, FaLock, FaPuzzlePiece, FaUser } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
        AOS.init();
    })



    const faqData = [
        {
            question: "What is ProjectPlanner?",
            answer: "ProjectPlanner is an AI-powered tool that generates project ideas based on your selected technologies and interests.",
        },
        {
            question: "How do I get project suggestions?",
            answer: "Our AI algorithm analyzes your preferences and skills to provide you with relevant project ideas.",
        },
        {
            question: "Is it suitable for beginners?",
            answer: "Yes, ProjectPlanner offers project ideas for all skill levels, from beginners to experienced developers.",
        },
        {
            question: "What is the pricing of ProjectPlanner?",
            answer: "The ProjectPlanner is currently in beta with limited features. The pricing is not yet decided.",
        },
        {
            question: "What if I run out of my tokens?",
            answer: `You get 5 free tokens to test out ProjectPlanner. You can contact me at <a href="mailto:contactpushkaraj@gmail.com" class="text-blue-400 underline font-bold">contactpushkaraj@gmail.com</a> to get more tokens.`,
        },
        // Add more FAQ items here
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <>
            <section className='body-font min-h-screen w-full'>
                <div className='flex items-center flex-wrap md:justify-around justify-center pt-36 pb-16'>
                    <div className="md:w-[45%] flex md:block flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight flex flex-col md:flex-row">
                            <span>Discover Your</span> <span className="text-blue-600">Dream Project</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mt-4">
                            ProjectPlanner helps you find unique project ideas based on your selected technologies. Never run out of ideas again!
                        </p>
                        <button className="bg-blue-700 hover:bg-blue-600 text-white flex items-center px-6 py-4 mt-6 md:mt-8 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                            Get Started <FiArrowRight className="ml-2" />
                        </button>
                    </div>

                    <div>
                        <Image
                            src={'/home-hero-1.png'}
                            height={600}
                            width={600}
                            alt='Man coding'
                            className='mt-7 lg:mt-0 shadow-xl animate-jump' // Add animate-jump class
                        />
                    </div>

                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Discover the Power of ProjectPlanner</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* User Friendly Interface */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4" data-aos="fade-right">
                            <div className="bg-blue-500 text-white rounded-full p-4">
                                <FaUser className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">User Friendly Interface</h3>
                            <p className="text-gray-600 mt-2">Our tool features an intuitive and easy-to-navigate interface, ensuring a smooth experience for every user.</p>
                        </div>

                        {/* Different Complexity Levels */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4" data-aos="fade-right">
                            <div className="bg-green-500 text-white rounded-full p-4">
                                <FaPuzzlePiece className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Different Complexity Levels</h3>
                            <p className="text-gray-600 mt-2">Whether you're a beginner or an expert, our tool offers project suggestions tailored to your skill level.</p>
                        </div>

                        {/* Relevant Project Ideas */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4" data-aos="fade-right">
                            <div className="bg-purple-500 text-white rounded-full p-4">
                                <FaLightbulb className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Relevant Project Ideas</h3>
                            <p className="text-gray-600 mt-2">Get project ideas that align with your interests and goals, making your creative journey more exciting.</p>
                        </div>

                        {/* Free Credits */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4" data-aos="fade-left">
                            <div className="bg-yellow-500 text-white rounded-full p-4">
                                <FaCoins className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Free Credits</h3>
                            <p className="text-gray-600 mt-2">Enjoy free credits to unlock premium features, giving you access to even more project suggestions.</p>
                        </div>

                        {/* Secure */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4" data-aos="fade-left">
                            <div className="bg-red-500 text-white rounded-full p-4">
                                <FaLock className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Secure</h3>
                            <p className="text-gray-600 mt-2">Your data and privacy are our top priorities. Our tool is built with security measures to keep your information safe.</p>
                        </div>

                        {/* Regular Improvement */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4" data-aos="fade-left">
                            <div className="bg-blue-900 text-white rounded-full p-4">
                                <FaChartLine className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Regular Improvement</h3>
                            <p className="text-gray-600 mt-2">We're dedicated to continuous enhancement, delivering fresh features and improved suggestions over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
                    <div className="flex flex-col items-center space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-black p-4 w-full rounded-lg shadow-md cursor-pointer transition-all duration-300"
                                data-aos="fade-up"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div
                                    className="flex items-center justify-between"

                                >
                                    <h3 className="text-lg md:text-xl font-semibold">{item.question}</h3>
                                    <span className="text-blue-600">
                                        {activeIndex === index ? (
                                            <FiArrowUpCircle size={25} />
                                        ) : (
                                            <FiArrowDownCircle size={25} />
                                        )}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <p
                                    className="text-gray-600 mt-2 text-left"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                  ></p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </>
    );
}
