
import {ADD_PRODUCT} from './constants'
const initialState = {
    idGen: 0

};


export default  reducer = (state=initialState,action) =>{
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, idGen: 1};
        default:
            return state;
    }

};



