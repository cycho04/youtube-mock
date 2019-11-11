import {CURRENT_VIDEO} from '../actions/types';

export default (state={}, action) =>{
    switch(action.type){
        case CURRENT_VIDEO:
            return action.payload
        default:
            return state
    }
}