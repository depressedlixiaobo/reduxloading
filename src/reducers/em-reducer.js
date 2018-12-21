import {emcall_common_reducer} from '../middleware/em-redux-thunk'
export default   emcall_common_reducer({
    defaultState:{} ,
    LOADING:(oldstate)=>({
        ...oldstate,state:'LOADING'
    }),
    SUCC :(oldstate,data)=>({
        ...oldstate,state:'SUCC',...data
    }) ,
    FAIL:(state)=>({
        state:'FAIL'
    })
})