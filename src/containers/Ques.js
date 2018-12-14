import React, { Component ,lazy} from 'react';
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import ErrorHoc  from './ErrorHoc'
import {dosomeAsync} from '../actions/index'

let Text = lazy(()=>import('./Text' ))



@connect((state)=>({
    index:state.index
}),
    {
        dosomeAsync
    }
)
class Ques extends Component {
    constructor(props) {
        super(props);
    }
     componentWillMount(){
     
       
        this.props.dosomeAsync()
         
        this.params = this.props.match.params
    }
    componentWillReceiveProps(nextProps) {
      
         if(JSON.stringify(this.props.match.params) != JSON.stringify( nextProps.match.params)){
            console.log('componentWillUpdate 参数不同')
             this.props.dosomeAsync()
            
        }
    }
    componentWillUpdate(nextProps) {
        console.log('will')
        
    }
    
    render() {
       
        return (
            <ErrorHoc>
            <h1>ques 
{this.props.index.data&&this.props.index.data.name}
             <button onClick={()=>{
                this.props.history.push(`/ques/${Math.random()}`)
             }}>click this change data!</button>
               
            </h1>
            </ErrorHoc>
        );
    }
}

export default withRouter(Ques);