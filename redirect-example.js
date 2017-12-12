import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class RedirectExample extends Component{
    constructor(){
        super();
        this.state = {
            redirect: ''
        }
        this.changePage = this.changePage.bind(this);
    }
    changePage(){
        this.setState({
            redirect: '/B'
        })
    }
    render(){
        if (this.state.redirect) {
            return <Redirect push to={this.state.redirect} />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
        }
        return (
            <div>this is A</div>
            <div onClick={() => this.changePage()}>redirect to B</div>
        )
    }
}

export default RedirectExample;