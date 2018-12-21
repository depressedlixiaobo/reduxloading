export default store => next => action =>{
    const EM_HEAD = 'EM_CALL'
    
    if(action['EM_HEAD'] != EM_HEAD){
        return next(action)
    }
     
    let actionPre = `${EM_HEAD}_${action.type}`
    let dispatch =  store.dispatch

        /**
         * !  准备开始前 给 使用者提供之前的store状态  以供今后使用 action.store['指定对象']
         */

    //第一阶段 刚开始 请求
    dispatch({
        type : `${actionPre}_LOADING`  ,
        state : 'LOADING'
    })
    let ac_hook = action['hooks'] || {}
    //第二阶段 准备  接收一个函数 
    return fetch(action.ops.url, action.ops.config).then(stream => {
        /**
         * ! 生命周期 第 - 阶段 enter
         */
        if(ac_hook.enter&&typeof ac_hook.enter == 'function'){
            //声明周期第一阶段
           let hkResult =   action['hooks'].enter(stream)
           //TODO : 根据result 处理各种事件
        }
        return stream.json()
    }).then(result =>{
        let newResult = result
        /**
         * ! 生命周期 第二阶段  getJsonResult
         */
        if(ac_hook.getJsonResult&&typeof ac_hook.getJsonResult == 'function'){
            newResult =  ac_hook.getJsonResult(result)
        }
        dispatch({
            type : `${actionPre}_LOADING`  ,
            state : 'SUCC',
            data : newResult
        })
        return newResult
    }).catch(error=>{
         /**
         * ! 生命周期 第 三 阶段  didCatch
         */
        if(ac_hook.didCatch&&typeof ac_hook.didCatch == 'function'){
            ac_hook.didCatch(error)
        }
        dispatch({
            type : EM_HEAD + types['DATA_LOAD'],
            state : 'FAIL',
            msg : error
        })
      
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

 