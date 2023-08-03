"use client";

// components/InputField.tsx
import React, { useState, useRef } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Technologies from './Technologies';
import './createNew.css'

const InputField: React.FC = () => {
    const nameInputRef = useRef<HTMLInputElement>(null)
    const nameSectionRef = useRef<HTMLInputElement>(null)
    const technologiesSectionRef = useRef<HTMLInputElement>(null)

    async function nextSection() {
        console.log('hello')
        const nameInput = nameInputRef.current as any
        const nameSection = nameSectionRef.current as any
        const technologiesSection = technologiesSectionRef.current as any

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
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Name your creation..."
                            className="bg-transparent outline-none text-black text-xl border-black border-b-2 w-[300px]"
                            ref={nameInputRef}
                        />
                        <button id="next-section-btn" className="ml-2 text-blue-600" onClick={nextSection}>
                            <BsFillArrowRightCircleFill size={30} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden" id='technologies-section' ref={technologiesSectionRef}>
                <Technologies />
            </div>
        </>
    );
};

export default InputField;