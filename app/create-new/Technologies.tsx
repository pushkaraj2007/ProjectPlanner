"use client";

import React, { useState, useEffect } from 'react';


const Technologies: React.FC = () => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setIsShown(true);
    }, []);

    return (
        <div
            id="technologies-section"
            className={`mt-[40vh] transition-transform duration-500 ${isShown ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'
                }`}
        >
            Technologies
        </div>
    );
};

export default Technologies;