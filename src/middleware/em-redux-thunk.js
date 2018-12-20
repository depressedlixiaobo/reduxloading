export default store => next => action =>{
    const EM_HEAD = 'EM_CALL'
    
    if(action['EM_HEAD'] != EM_HEAD){
        return next(action)
    }
    debugger
    const types =  action['types']
    let dispatch =  store.dispatch
    
    dispatch({
        type : EM_HEAD + types['DATA_LOAD'],
        state : 'LOADING'
    })
    return  ajax({
        url:'https://api.github.com/users/chriscoyier/repos',
        method:'GET',
        headers:'',
       // body:{a:'b'}
    }).then(result =>{
         
        
        dispatch({
            type : EM_HEAD + types['DATA_LOAD'],
            state : 'SUCC',
            data : result
        })
        console.log(result)
        return result
    }).then(c=>{
        console.log(store.getState())
    }).catch(error=>{

        dispatch({
            type : EM_HEAD + types['DATA_LOAD'],
            state : 'FAIL',
            msg : error
        })
        return {msg: error}
        console.log(error)
    })
     
}

/**
 * 
 * @duixiang {string} param0 
 */
const ajax = ({
    url,
    method,
    headers,
    body
})=>fetch(url, {
     
    method,
    headers: {
       // 'Content-Type': 'application/json',
         ...headers
    },
    //body: JSON.stringify(body)
}).then(a=>a.json())