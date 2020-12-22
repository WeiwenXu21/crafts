import React, { Component } from 'react';
import Signin from './Signin';
import Spinner from './Spinner';
import Account from './Account';
import { API_URL } from './config';
import './App.css';
import * as Vibrant from 'node-vibrant'


export default class App extends Component {

  state = {
    // images: [],
    // info : [],
    email: '', 
    password: '', 
    first: '', 
    last: '',
    checkaccount: false,
    inaccount: false,
    signup: false,
    login: true
  }

  handleSubmit = e => {
    // console.log('A name was submitted: '+ this.state.email + ', ' + this.state.password+ ', ' + this.state.first+ ', ' + this.state.last);

    this.setState({
        checkaccount: true
        })
  }

 handleChange = e => {
      switch(e.target.id) {
        case "first":
            this.setState({
                first : e.target.value,
                })
            
        case "last":
            this.setState({
                last : e.target.value
                })
        case "email":
            // alert('A name was submitted: '+e.target.value);
            this.setState({
                email : e.target.value,
                // checkaccount: true
                })
        case "password":
            this.setState({
                password : e.target.value
                })
      }
  }

  removeImage = id => {
    // this.setState({
    //   images: this.state.images.filter(image => image.public_id !== id)
    // })
  }

  switch = word => {
    var signup,login;
    if(word == "signup"){signup = true;login = false;}
    else{login = true; signup = false;}
    return this.setState({login:login,signup:signup})
  }

  render() {
    const { email, password, first, last, checkaccount, inaccount, signup, login } = this.state

    const content = () => {
      switch(true) {
        case checkaccount:
          return <Spinner />
        // case images.length > 0:
        //   return <Images images={images} removeImage={this.removeImage} />
        case inaccount:
            return <Account />
        default:
          // return <Buttons onChange={this.onChange} /> , this.handleSubmit
          return <Signin switch={this.switch} signup={signup} login={login} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
      }
    }

    return (
      <div>
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}
