import {SHOW_ERROR} from '../actions/types';

export default (state={}, action) => { 
    switch(action.type){
        case SHOW_ERROR:
            return action.payload
        default:
            return state
    }
}