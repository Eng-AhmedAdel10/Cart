
function Reducer(state,action) {

    if(action.type === "LOADING")
    {
        return {
            ...state,
            isLoading:true,
        }
    }

    if(action.type === "DISPLAY_ITEMS")
    {
        return {
            ...state,
            cart:action.payload,
            isLoading:false
        }
    }

    if(action.type === "TOTAL_PRICE")
    {
        let totalPrice=0;
        state.cart.forEach(item=>{
            totalPrice+=parseFloat((item.price*item.amount));
        });
        return {
            ...state,
            total:totalPrice.toFixed(2)
        };
    }

    if(action.type === "TOTAL_AMOUNT")
    {
        let totalAmount=0;
        state.cart.forEach(item=>{
            totalAmount+=parseInt(item.amount);
        });
        return {
            ...state,
            amount:totalAmount
        };
    }

    if(action.type === "CLEAR_CART")
    {
        return {
            ...state,
            cart:[]
        }
    }

    if(action.type === "REMOVE_ITEM")
    {
        const newCart=state.cart.filter(item=> item.id !== action.payload)
        return {
            ...state ,
            cart:newCart
        }
    }

    if(action.type === "INCREASE")
    {
        let tampCart=state.cart.map(item=>{
            if(item.id === action.payload)
            {
                return {...item,amount:item.amount+1}
            }
            return item
        })
        return {
            ...state,
            cart:tampCart 
        }
        
    }

    if(action.type === "DECREASE")
    {
        // const {amount}=state.cart.find(item=>item.id === action.payload);
        // if(amount - 1 === 0)
        // {
        //     const newCart=state.cart.filter(item=>item.id !== action.payload);
        //     return {
        //         ...state,
        //         cart:newCart
        //     }
        // }

        let tampCart=state.cart.map(item=>{
            if(item.id === action.payload)
            {
                return {...item,amount:item.amount - 1}
            }
            return item
        }).filter(item=> item.amount !== 0)
        return {
            ...state,
            cart:tampCart
        }
    }



    return state
}

export default Reducer;
