import {VIEW_COUNTS} from '../actions/types';

export default (state={}, action) => { 
    switch(action.type){
        case VIEW_COUNTS:
            return action.payload
        default:
            return state

    }
}