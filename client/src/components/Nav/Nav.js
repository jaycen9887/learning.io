import React, { Component } from "react";
import {Button, Modal, Icon} from 'react-materialize';
import "./Nav.css";
import axios from "axios";
import LoginModal from "../Modal";

class Nav extends Component {
    componentDidMount() {
        // axios.get('/user', {
    //     withCredentials: true
    // })
        axios('/user', {
            method: 'get',
            withCredentials: true
        })
        .then(function(response){
            console.log(response);
        });
    }
    state={isOpen:false}

    toggleOpen = () =>{
        this.setState({isOpen: true});
    }

    toggleClose = () => {
        this.setState({isOpen: false});
    }

    render() {
        return (
    <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
            <div id="navPosition">
                <img id="robotsSize"src="/img/logorobot.png" alt="robotlogo" />
                    <a id="logo-container " href="/" className="brand-logo">coCoding</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/companies">Companies</a></li>
                        <li><a href="/classrooms">Classrooms</a></li>
                        <li><a className="waves-effect waves-light btn" href="#" onClick={this.toggleOpen}>Login</a></li>
                    </ul>
            </div>
        </div>
        <LoginModal isOpen={this.state.isOpen} isClosed={this.toggleClose}/>
    </nav>
        );
    }
}

export default Nav;