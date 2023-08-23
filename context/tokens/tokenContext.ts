// tokenContext.js
import { createContext } from 'react';

const TokenContext = createContext({
    tokenCount: 0,
    update: () => { }
});

export default TokenContext;
