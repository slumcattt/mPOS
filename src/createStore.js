/**
 * Created by nisum on 5/7/17.
 */

import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {camera, inventory} from './modules'

const middleware = applyMiddleware(thunk)

export default (data = {}) => {
    console.log("reducer value is ", camera.reducer);
    const rootReducer = combineReducers({
            //every modules reducer should be define here
            [camera.NAME]: camera.reducer,
            [inventory.NAME]: inventory.reducer
        }
    );


    return createStore(rootReducer, data, middleware)
}
