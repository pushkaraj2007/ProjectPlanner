"use client";

import TokenContext from "./tokenContext"
import { useState, useEffect } from 'react'

const TokenState = (props: any) => {
    const [tokenCount, setTokenCount] = useState(0)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/get-tokens');

            const res = await response.json();

            setTokenCount(res.tokens)
        };

        fetchUsers();
    }, []);

    const update = () => {
        console.log('updating the tokenCount')
        setTokenCount(tokenCount - 1)
    }

    const updateTokenCountWithCoupon = (count: any) => {
        setTokenCount(count)
    }

    return (
        <TokenContext.Provider value={{ tokenCount, update, updateTokenCountWithCoupon }}>
            {props.children}
        </TokenContext.Provider>
    )
}

export default TokenState