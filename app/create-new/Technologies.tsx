"use client";

import React, { useState, useEffect } from 'react';

interface InputFieldProps {
    setter: Function
}

const Technologies = ({ setter }: InputFieldProps) => {
    const [isShown, setIsShown] = useState(false);
    const [appType, setAppType] = useState('')
    const [isJS, setIsJS] = useState(false)
    const [complexity, setComplexity] = useState('')

    useEffect(() => {
        setIsShown(true);
    }, []);

    return (
        <div className={`mt-[10vh] transition-opacity transform duration-500 ${isShown ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold mb-4">Build Your App</h2>

            <div className="mb-6">
                <label htmlFor="app-type" className="block mb-2 font-medium">Which type of app do you want to build?</label>
                <select name="app-type" id="app-type" onChange={()=> setAppType('Frontend')} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="FullStack">FullStack</option>
                </select>
            </div>

            { appType == 'Frontend' ? <div className="mb-6">
                <label htmlFor="js-or-html&css" className="block mb-2 font-medium">Do you want to use JavaScript or Just HTML & CSS?</label>
                <select name="js-or-html&css" id="js-or-html&css" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
                    <option value="Just HTML & CSS">HTML & CSS</option>
                    <option value="Include JavaScript">Include JavaScript</option>
                </select>
            </div> : ''}

            <div className="mb-6">
                <label htmlFor="complexity" className="block mb-2 font-medium">Select the complexity of the project</label>
                <select name="complexity" id="complexity" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div>
                <label htmlFor="additional-technologies" className="block mb-2 font-medium">Include any additional technologies you want to practice (e.g., Redux)</label>
                <input type="text" id="additional-technologies" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
        </div>
    );
};

export default Technologies;
