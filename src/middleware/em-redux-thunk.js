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
            payload : newResult
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
    
     
}

//defaultState ,LOADING ,SUCC ,FAIL
const emcall_common_reducer = (ops) =>{
    let defaultState = ops.defaultState
    const EM_HEAD = 'EM_CALL'
    let actionPre = `${EM_HEAD}_${action.type}` 
    let reducer = (state = defaultState,action)=>{
        let newState = state
        switch(action.type){
            case `${actionPre}_LOADING`:
                /**
                 * ! 改方式 是 使用了 em-redux-thunk的修改值的方式
                 */
                switch (action.state) {
                    case 'LOADING':
                        /**
                         * !暴露 给用户按照自定义规则输入
                         */
                        newState = ops.LOADING && ops.LOADING(state) || {}
                    break;

                    case 'SUCC':
                        /**
                         * !暴露 给用户按照自定义规则输入
                         */
                        newState = ops.SUCC && ops.SUCC(state,data) || {}

                        break;
                    case 'FAIL':
                        /**
                         * !暴露 给用户按照自定义规则输入
                         */
                        newState = ops.FAIL && ops.FAIL(state) || {}
                    default:
                        break;
                }
            break
            default:
             
            break;
        }
        return newState
    }
    return reducer
}
export {  emcall_common_reducer }
 