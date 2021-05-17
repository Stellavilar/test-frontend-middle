//File created to save the cart into localStorage
import { useState, useEffect } from 'react';

//Function that is used to save a key and a value into the localStorage
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = key;

    const [ value, setValue ] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);

        if (jsonValue != null) return JSON.parse(jsonValue);

        if(typeof initialValue === 'function') {
            return initialValue();
        }else{
            return initialValue
        };

    });

    useEffect(() => {
        //Store key + stringifyValue into localStorage.
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value]);

    return [ value, setValue];
};