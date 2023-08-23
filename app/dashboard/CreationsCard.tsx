"use client";

import { Key, useEffect, useRef, useState } from 'react';
import User from '@/database/users'; // Import your Mongoose User model here
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { BsPlusCircle } from 'react-icons/bs';
import '@/app/create-new/createNew.css'
import ProjectGrid from './ProjectGrid';
import TokenContext from '@/context/tokens/tokenContext';
import { IoChevronBackOutline } from 'react-icons/io5';

interface Creation {
    _id: Key | null | undefined;
    creations: any;
    name: string;
    projectsIdeas: any;
    // Add other properties if needed
}

const UserCard: React.FC = () => {
    const [creations, setCreations] = useState<Array<Creation>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [projectsIdeasArray, setProjectsIdeasArray] = useState([]);
    const [isTechnologiesVisible, setIsTechnologiesVisible] = useState(false);
    const technologiesSectionRef = useRef<HTMLInputElement>(null);
    const GeneratedProjectsRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/creations', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("Below is the whole response")
            console.log(response)

            const res = await response.json();
            console.log("Below is the json")
            console.log(res)

            setCreations(res.creations)
            setIsLoading(false)
        };

        fetchUsers();
    }, []);

    const generateIdeas = (projectsIdeas: any) => {
        const technologiesSection = technologiesSectionRef.current;

        technologiesSection?.classList.add('hidden');
        setIsTechnologiesVisible(true);
        setProjectsIdeasArray(projectsIdeas);
    };

    const goBack = () => {
        const technologiesSection = technologiesSectionRef.current;
        const projectsSection = GeneratedProjectsRef.current;

        if (technologiesSection && projectsSection) {
            technologiesSection.classList.add('slide-in-back');
            projectsSection.classList.remove('hidden');
            technologiesSection?.classList.remove('hidden');
            setIsTechnologiesVisible(false);
        }
    };

    return (
        <>
            {isLoading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-[85%] xl:w-[70%] transform duration-500 ${isTechnologiesVisible ? 'slide-out hidden' : ''}`} ref={technologiesSectionRef}>
                        <Link href="/create-new" className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-white min-h-[250px]">
                            <div className="rounded-full bg-blue-500 text-white p-4 mb-4">
                                <BsPlusCircle size={30} />
                            </div>
                            <h2 className="text-lg text-gray-800 font-medium text-center">
                                Create New
                            </h2>
                        </Link>
                        {creations.map((creation) => (
                            <div
                                key={creation.name}
                                className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-white min-h-[250px]"
                                onClick={() => generateIdeas(creation.projectsIdeas)}
                            >
                                <h2 className="text-2xl text-gray-800 font-medium text-center">
                                    {creation.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                    {isTechnologiesVisible && (
                        <div className="container min-h-screen" id='technologies-section' ref={GeneratedProjectsRef}>
                            <div className="flex flex-col slide-out" onAnimationEnd={goBack}>
                                <button className="flex cursor-pointer items-center w-20 text-lg font-bold text-blue-600 ml-3 group" onClick={goBack}>
                                    <IoChevronBackOutline size={24} className='group-hover:rotate-180 transition duration-300' />
                                    <p className='ml-1'>Back</p>
                                </button>
                                <ProjectGrid projects={projectsIdeasArray} />
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default UserCard;
