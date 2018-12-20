

import {
    DO_SOME_ASYNIC
}
from './types'
 
export const SetSomeValue = (data)=>({
    type:DO_SOME_ASYNIC,
    data:data
})

export const dosomeAsync = ()=> (dispatch,getState) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            dispatch(SetSomeValue({
                name:'xiaoming'+Math.random()
            }))
            
        }, 1000);
    })
    
}

export const getSomeThings = ()=>({
    EM_HEAD: 'EM_CALL',
    types:{
        DATA_LOAD : 'DATA_LOAD_GET',

    }
})