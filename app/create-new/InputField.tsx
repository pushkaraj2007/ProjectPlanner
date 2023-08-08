"use client";

// components/InputField.tsx
import React, { useState, useRef } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Technologies from './Technologies';
import './createNew.css'

interface InputFieldProps {
    setter: Function
}

const InputField = ({ setter }: InputFieldProps) => {
    const nameInputRef = useRef<HTMLInputElement>(null)
    const nameSectionRef = useRef<HTMLInputElement>(null)
    const technologiesSectionRef = useRef<HTMLInputElement>(null)

    async function nextSection() {
        console.log('hello')
        const nameInput = nameInputRef.current as any
        const nameSection = nameSectionRef.current as any
        const technologiesSection = technologiesSectionRef.current as any

        setter(nameInput.value)

        nameSection.id = 'name-section'

        nameSection.addEventListener('animationend', () => {
            technologiesSection.classList.remove('hidden')
            technologiesSection.classList.add('block')
            nameSection.classList.add('hidden')
        })
    }

    return (
        <>
            <div className={`relative transition-transform duration-500`} ref={nameSectionRef}>
                <div className="mt-[40vh]">
                    <div className="flex justify-center mt-6">
                        <div className="flex justify-center mt-6">
                            <div className="relative flex">
                                <input
                                    type="text"
                                    placeholder="Name your creation..."
                                    className="bg-gray-100 outline-none text-black text-lg border border-gray-300 py-2 px-4 rounded-l-md w-64 focus:ring-2 focus:ring-blue-400"
                                    ref={nameInputRef}
                                />
                                <button
                                    id="next-section-btn"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-400"
                                    onClick={nextSection}
                                >
                                    <BsFillArrowRightCircleFill size={24} />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="hidden" id='technologies-section' ref={technologiesSectionRef}>
                <Technologies setter={setter} />
            </div>
        </>
    );
};

export default InputField;