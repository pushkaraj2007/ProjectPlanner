import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const InputField = () => {
    return (
        <div id='name-section' className='mt-[40vh]'>
            <div className='flex justify-center'>
                <input type="text" placeholder='Name your creation...' className='bg-transparent outline-none text-black text-xl border-black border-b-2 w-[300px]' />
                <button id='next-section-btn' className='ml-2 text-blue-600'>
                    <BsFillArrowRightCircleFill size={30} />
                </button>
            </div>

        </div>
    )
}

export default InputField