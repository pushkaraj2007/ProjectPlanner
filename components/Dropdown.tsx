"use client";

import { NextPage } from "next";
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState, useEffect, useRef } from "react";
import { FaUser } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoMdLogOut } from 'react-icons/io'
import Image from 'next/image'

const ProfileDropdown: NextPage = () => {
    const { data: session } = useSession();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleProfileDropdownClick = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        if (isDropdownVisible) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isDropdownVisible]);

    const profileImageUrl = session?.user?.image as string;

    return (
        <div className="relative">
            <Image
                className="cursor-pointer rounded-full"
                height={40}
                width={40}
                src={profileImageUrl}
                onClick={handleProfileDropdownClick}
                alt=""
            />
            {isDropdownVisible && (
                <div
                    ref={dropdownRef}
                    className="dropdown-div bg-gray-100 h-36 w-48 mt-2 rounded-lg shadow-lg shadow-gray-600 absolute text-black right-1 flex flex-col"
                >
                    <Link href="/profile" className="h-[33.33%] flex items-center text-lg p-1">
                        <div className="dropdown-link flex items-center">
                            <FaUser /> <span className="ml-1">Profile</span>
                        </div>
                    </Link>
                    <Link href="/dashboard" className="h-[33.33%] flex items-center text-lg p-1">
                        <div className="dropdown-link flex items-center">
                            <MdSpaceDashboard /> <span className="ml-1">Dashboard</span>
                        </div>
                    </Link>
                    <div className="dropdown-link flex items-center h-[33.33%] text-lg p-1" onClick={() => signOut()}>
                        <IoMdLogOut /> <span className="ml-1">Logout</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
