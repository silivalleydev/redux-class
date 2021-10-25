import { ADD_QTY, MINUS_QTY } from "./action";

const InitialState = {
    qty: 0
}


const countReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_QTY:
            return{
                ...state,
                qty: state.qty + 1,
            }
        case MINUS_QTY:
            return{
                ...state,
                qty: state.qty - 1,
            }
        default:
            return state;
    }
} 

export default countReducer