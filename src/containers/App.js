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
    }
    render() {
        return (
            <ErrorHoc >
            <h1>hello react!

                <Text />
                
            </h1>
            </ErrorHoc>
        );
    }
}

export default withRouter(App);