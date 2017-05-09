
import {CLICK_PICTURE} from './constants'
const initialState = {
    idGen: 0

};


export default  reducer = (state=initialState,action) =>{
    switch (action.type) {
        case CLICK_PICTURE:
            return {...state, idGen: 1};
        default:
            return state;
    }

};



