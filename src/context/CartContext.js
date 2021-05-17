import React, { useContext, createContext } from 'react';
import useLocalStorage from './useLocalStorage';

//This Context file will be able to share the cart values beetween all components.It is exported to the root file index.js

//Context for storing the state of the cart
const CartStateContext = createContext();
//Context for dispatch fonctions 
const CartDispatchContext = createContext();

//Provider to dispatch functions between components
export const CartProvider = ({ children }) => {
    //State for the cart that will be saved into localStorage thanks to useLocalStorage middleware
    const [ cartContents, dispatch ] = useLocalStorage('cart', []);

    //Add products into cart:
    function addProducts(items) {
        dispatch( prevCart => {
            return [...prevCart, items];
        });
    };

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={{cartContents, addProducts}} >
                {/* App component goes here */}
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );

};

//Export contextes
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
