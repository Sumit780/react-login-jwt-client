import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class User extends React.Component{

    handleLogout = () => {
        localStorage.clear();
        this.forceUpdate();
    }

    checkToken = () =>{
        let token = localStorage.getItem('token');
        if(token){
            return this.displayUser();
        }else{
            this.props.history.push('/login');
        }
    }
    
    displayUser = () =>{
     return (<>
     <Button  size="sm" className="float-right" onClick={()=> this.handleLogout()}>Logout</Button>
        <h1 className="d-flex justify-content-center mt-5">WELCOME USER</h1>
        <h1 className="d-flex justify-content-center mt-5">Hello world</h1>
        
        </>)
    }

    render(){
        return(
            <>
            {this.checkToken()}
            </>
        )
    }
}

export default withRouter(User);
