import { createContext } from 'react';

export let GlobalState = {
    isValidConnection: true,
}

export const GlobalContext = createContext(GlobalState);