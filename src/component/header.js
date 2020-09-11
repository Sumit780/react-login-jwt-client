import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from './logo192.png';

class Header extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Assignment
                </Navbar.Brand>
            </Navbar>
            </>
        )
    }
}

export default Header;

