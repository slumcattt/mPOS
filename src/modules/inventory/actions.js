import { ADD_PRODUCT } from './constants'

//each action should have the following signiture.
//  {
//     type: <type of action>,        type is required
//     payload: <the actual payload>  payload is optional. if you don't
//                                    have anything to send to reducer,
//                                    you don't need the payload. for example
//                                    newCounter action
//  }

//this action tell the reducer which counter with specified id needs to be
//incremented.
export const addInventory = (fileName) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      fileName
    }
  }
}

