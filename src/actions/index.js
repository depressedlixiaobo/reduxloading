

import {
    DO_SOME_ASYNIC
}
from './types'
 
export const SetSomeValue = (data)=>({
    type:DO_SOME_ASYNIC,
    data:data
})

export const dosomeAsync = ()=> dispatch =>{
    dispatch(SetSomeValue({
        name:'xiaoming'
    }))
}