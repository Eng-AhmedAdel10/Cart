import React , {useContext,useEffect,useReducer} from "react";
import Reducer from "./reducer";
const url="https://course-api.com/react-useReducer-cart-project";
const CreateContext=React.createContext();

const Context=({children})=>{

    const initialState={
        isLoading:false,
        amount:0,
        total:0,
        cart:[]
    }

    const [state,dispatch]=useReducer(Reducer,initialState);

    const getCart=async()=>{
        dispatch({type:"LOADING"});
        const res=await fetch(url);
        const cart=await res.json();
         dispatch({type:"DISPLAY_ITEMS",payload:cart});
    }

    const getTotalPrice=()=>{
        dispatch({type:"TOTAL_PRICE"});
    }

    const getTotalAmount=()=>{
        dispatch({type:"TOTAL_AMOUNT"});
    }

    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }

    const increaseItem=(id)=>{
        dispatch({type:"INCREASE",payload:id})
    }

    const decreaseItem=(id)=>{
        dispatch({type:"DECREASE",payload:id})
    }
    
    useEffect(()=>{
        getCart();
    },[]);

    useEffect(()=>{
        getTotalPrice()
        getTotalAmount();
    },[state.cart])

    return <CreateContext.Provider value={{
        ...state,
        removeItem,
        clearCart,
        increaseItem,
        decreaseItem
    }}>
            {children}
        </CreateContext.Provider>
}

export const useGlopalContext=()=>{
    return useContext(CreateContext);
}

export default Context;