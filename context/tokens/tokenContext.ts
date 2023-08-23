// tokenContext.js
import { createContext } from 'react';

const TokenContext = createContext({
    tokenCount: 0,
    update: () => { },
    updateTokenCountWithCoupon: (count: any) => { }
});

export default TokenContext;
