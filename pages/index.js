import React from "react";
import { signInWithGoogle,auth } from "../Components/firebase/firebase.utils";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withRouter } from "next/router";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handlechange = (e) => {
    const { value, name } = e.target;
    // console.log({[name]:value});
    this.setState({ [name]: value });
  };
  handlesubmit = async(e) => {
    e.preventDefault();
    var {email,password}=this.state;
    try{
        await auth.signInWithEmailAndPassword(email, password);
        
        //this.setState({email:"",password:""});
        this.props.router.push("/post");

    }catch(err){
        console.log(err);
    }
    
  };

  render() {
    return (
      <Container id='login'>
        <Row className='justify-content-md-center mt-5'>
          <Col xs={12} md={4}>
            <h3>SIGN-IN</h3>
            <form className='mt-3' onSubmit={this.handlesubmit}>
              <div className='form-outline mb-2'>
                <label className='form-label' htmlFor='email'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='form-control'
                  placeholder='Enter Email'
                  value={this.state.email}
                  onChange={(e) => this.handlechange(e)}
                  name='email'
                />
              </div>

              <div className='form-outline mb-4'>
                <label className='form-label' htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='form-control'
                  placeholder='Enter Password'
                  value={this.state.password}
                  onChange={(e) => this.handlechange(e)}
                  name='password'
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary btn-block mb-4'
                style={{ marginRight: "0.5rem" }}>
                Sign in
              </button>
              <button
                type='submit'
                className='btn btn-primary btn-block mb-4 ml-3'
                onClick={signInWithGoogle}>
                Sign in with Google
              </button>

            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Home);
