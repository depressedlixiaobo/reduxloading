import React, { Component,lazy,Suspense } from 'react';
import { Provider } from 'react-redux'
import {Route, Switch } from 'react-router-dom';

 
const App =lazy(()=>import('./App')) 
const Text =lazy(()=>import('./Text')) 


class Root extends Component{
    constructor(props){
        super(props)
    }

    render(){

      const elements =    <Provider store={this.props.store} >
                            <Suspense fallback={<div>loading...</div>}>
                                <Switch>
                                    {
                                      routers.map((route,index) =>(
                                          <Route key={index} {...route}  />
                                      ))
                                    }
                                </Switch>
                                </Suspense>
                            </Provider>
      return elements
    }
}
const   routers =  [
    {
        path:'/',
        exact:true,
        //component:App
        render:(props)=><App {...props}/> 
    },
    {
        path:'/text',
        exact:true,
        render:(props)=><Text {...props}/> 
    },
    {
        component:NoMatch
    }

]
const NoMatch =()=>(
    <div>
        no match!
    </div>
)

export default Root