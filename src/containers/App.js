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
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        console.log(this.props)
        this.props.dosomeAsync()
         
        setTimeout(() => {
            this.props.dosomeAsync()
        }, 100);
        console.log(this.props.index)
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('receive')
        console.log(nextProps.index.data.name)
        debugger
    }
    render() {
        return (
            <ErrorHoc >
            <h1>hello react!
{this.props.index.data&&this.props.index.data.name}
                <Text />
               
            </h1>
            </ErrorHoc>
        );
    }
}

export default withRouter(App);