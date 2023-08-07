"use client";

import React from 'react';
import InputField from './InputField';
import Technologies from './Technologies';

interface PageProps {
    setter: Function
    techName: string
}

const Page = () => {

    const setter = (techName: any) => {
        console.log(techName)
    }

    return (
        <div className="min-h-screen flex justify-center">
            <InputField setter={setter} />
        </div>
    );
};

export default Page;