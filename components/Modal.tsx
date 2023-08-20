"use client"

import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setIsVisible(false);
        onClose();
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.body.style.overflow = 'auto'; // Reset body overflow
        };
    }, [isVisible]);

    return isVisible ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform ease-in-out duration-300 scale-100 slide-in w-[370px] md:w-[500px]"
            >
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={closeModal}
                >
                    <AiOutlineClose />
                </button>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
