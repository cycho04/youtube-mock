import {GET_DETAILS} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case GET_DETAILS:
            return action.payload
        default: 
            return state
    }
}