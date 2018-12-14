import React, { Component } from 'react';

class ErrorHoc extends React.Component{
    constructor(props) {
        super(props)
        this.state = {hasError:false}
    }
     
    static  getDerivedStateFromError(error){

        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.log(error)
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }else{
            
            return this.props.children; 
          }
      
          
    }
}
 
export default ErrorHoc
