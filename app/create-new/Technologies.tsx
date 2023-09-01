"use client";

import React, { useState, useEffect, useRef, useContext } from 'react';
import ProjectGrid from './projects/ProjectGrid';
import TokenContext from '@/context/tokens/tokenContext';
import ReactLoading from 'react-loading';

interface InputFieldProps {
    projectName: string;
}

const Technologies = ({ projectName }: InputFieldProps) => {
    const [isShown, setIsShown] = useState(false);
    const [appType, setAppType] = useState('Frontend');
    const [isJS, setIsJS] = useState(false);
    const [complexity, setComplexity] = useState('');
    const [additionalTech, setAdditionalTech] = useState('')
    const technologiesSectionRef = useRef<HTMLInputElement>(null)
    const GeneratedProjectsRef = useRef<HTMLInputElement>(null)

    const projectIdeasOptions = {
        projectName, appType, isJS, complexity, additionalTech
    };

    const [receivedIdeas, setReceivedIdeas] = useState([]);
    const [loading, setLoading] = useState(false); // Initialize loading as false
    const token = useContext(TokenContext);

    useEffect(() => {
        setIsShown(true);
    }, []);

    async function runFetch() {
        setLoading(true); // Set loading to true when fetch is initiated
        try {
            const response = await fetch('/api/generate-ideasya', {
                method: "post",
                body: JSON.stringify(projectIdeasOptions),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const res = await response.json();

            setReceivedIdeas(res.message); // Assuming 'ideas' is the key for your array of projects
            setLoading(false); // Set loading to false when data is fetched
            token.update();
            console.log(res);
        } catch (error) {
            console.error('Error:', error);
            // setLoading(false); // Set loading to false even in case of an error
        }
    }

    const generateIdeas = () => {
        // Implement your logic for generating ideas here
        const technologiesSection = technologiesSectionRef.current as any
        const projectsSection = GeneratedProjectsRef.current as any

        technologiesSection.id = 'name-section'

        technologiesSection.addEventListener('animationend', () => {
            projectsSection.classList.remove('hidden')
            projectsSection.classList.add('block')
            technologiesSection.classList.add('hidden')
            runFetch();
        })
    };


    return (
        <>
            <div
                className={`mt-[10vh] transition-opacity transform duration-500 ${isShown ? 'opacity-100' : 'opacity-0'
                    }`}
                ref={technologiesSectionRef}
            >
                <h2 className="text-2xl font-bold mb-4">Build Your App</h2>

                <div className="mb-6">
                    <label htmlFor="app-type" className="block mb-2 font-medium">
                        Which type of app do you want to build?
                    </label>
                    <select
                        name="app-type"
                        id="app-type"
                        onChange={(event) => setAppType(event.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    >

                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="FullStack">FullStack</option>
                    </select>
                </div>

                {appType == 'Frontend' ? (
                    <div className="mb-6">
                        <label
                            htmlFor="js-or-html&css"
                            className="block mb-2 font-medium"
                        >
                            Do you want to use JavaScript or Just HTML & CSS?
                        </label>
                        <select
                            name="js-or-html&css"
                            id="js-or-html&css"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            onChange={(event) => event.target.value == 'true' ? setIsJS(true) : setIsJS(false)}
                        >
                            <option value="false">HTML & CSS</option>
                            <option value="true">Include JavaScript</option>
                        </select>
                    </div>
                ) : (
                    ''
                )}

                <div className="mb-6">
                    <label htmlFor="complexity" className="block mb-2 font-medium">
                        Select the complexity of the project
                    </label>
                    <select
                        name="complexity"
                        id="complexity"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={(event) => setComplexity(event.target.value)}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="additional-technologies"
                        className="block mb-2 font-medium"
                    >
                        Include any additional technologies you want to practice
                        (e.g., Redux)
                    </label>
                    <input
                        type="text"
                        id="additional-technologies"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={(event) => setAdditionalTech(event.target.value)}
                    />
                </div>

                <button
                    className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 w-full"
                    onClick={generateIdeas}
                >
                    Generate Ideas ✨
                </button>

            </div>

            <div className="hidden" id='technologies-section' ref={GeneratedProjectsRef}>
                <div className={`container mx-auto min-h-screen ${loading ? 'flex flex-col justify-center' : ''}`}>
                    {loading ? (
                        <>
                            <ReactLoading type={'spin'} color={'#0000FF'} height={'120px'} width={'120px'} />
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl font-semibold mb-4 ml-3">Generated Project ideas</h1>
                            <ProjectGrid projects={receivedIdeas} />
                        </>
                    )}
                </div>
            </div>

            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </>
    );
};

export default Technologies;
