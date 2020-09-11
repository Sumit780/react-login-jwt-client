import React from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let { email, password } = this.state;
        Axios.post('http://localhost:4000/login', {
            email,
            password,
        })
            .then((res) => this.authenticated(res))
            .catch((err) => console.log(err));
    }

    authenticated = (res) => {
        if(res.status === 200 && res.statusText === "OK"){
           localStorage.setItem('token',JSON.stringify(res.data.token))
           if(localStorage.getItem('token')){
            this.verifyToken();
            this.props.history.push('/user');
           }
        }
    }

    verifyToken = () =>{
        let token = localStorage.getItem('token'); 
        Axios.get('http://localhost:4000/users', { headers: {"Authorization" : `Bearer ${token}`}})
        .then((res) => {
            if(res.data.success === true){
                this.props.history.push('/user')
            }
        })
        .catch((err) => console.log(err));
    }


    render() {

        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        
                        <Col></Col>
                        <Col className="shadow p-3 mb-5 bg-white rounded">
                            <Form>
                            <h3>Login</h3>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={() => this.handleClick()}>
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(Login);