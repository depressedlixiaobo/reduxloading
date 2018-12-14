import {DO_SOME_ASYNIC} from '../actions/types'
export default (state={},action)=>{
    let newState = state
    switch (action.type) {
        case DO_SOME_ASYNIC:
        newState = {...state,data:action.data}  
            break;
    
        default:
            break;
    }
    return newState
}