import React ,{lazy, Suspense,Component}from 'react'
import ReactDOM from 'react-dom'
// import ErrorHoc from './containers/ErrorHoc'
import Root from './containers/Root'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore'

//创建全局状态
const store = configureStore()

ReactDOM.render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
)
 

// let App = lazy(()=>import('./containers/App' ))


// ReactDOM.render(
//     <div>
//         <ErrorHoc>
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <App />
//                     </Suspense>
//              </ErrorHoc>
  
//   </div>,
//      document.getElementById('root')
//  )
 
//创建全局状态
// const store = configureStore()
