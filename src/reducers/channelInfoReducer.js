import {CHANNEL_INFO} from '../actions/types';

export default (state={}, action) => { 
    switch(action.type){
        case CHANNEL_INFO:
            return action.payload
        default:
            return state

    }
}