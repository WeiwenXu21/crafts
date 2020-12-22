import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './Signin.css';
import logo from './logo.svg';



export default props =>

    <div className='App'>
        <div className='App-header'>
            <h1>Color Palette Inspector</h1>
                {/* <label htmlFor='single'>
                <img src={logo} className="App-logo" alt="logo" />
                </label> */}
            {/* <input type='file' id='single' onChange={props.onChange} /> */}
            <div>
                <div id="buttons">
                    <p id="signupButton" onClick={props.switch.bind(null,"signup")} className={props.signup ? "yellow":"blue"}>Sign In</p>
                    <p id="loginButton" onClick={props.switch.bind(null,"login")} className={props.login ? "yellow":"blue"}> Login</p>
                </div>
                {props.signup?<Signup  onChange={props.onChange} onSubmit={props.onSubmit}/> : null}
                {props.login? <Login  onChange={props.onChange} onSubmit={props.onSubmit}/> : null}
            </div>
        </div>
    </div>

    


// var Parent  = React.createClass({
//     getInitialState:function(){
//       return {signup:false,login:true}
//     },
//     switch:function(word){
//         var signup,login;
//         if(word == "signup"){signup = true;login = false;}
//         else{login = true; signup = false;}
//         return this.setState({login:login,signup:signup})
//     },
//     render:function(){      
//         var self = this;
//             return (
//                 <div>
//                     <div id="buttons">
//                         <p id="signupButton" onClick={self.switch.bind(null,"signup")} className={self.state.signup ? "yellow":"blue"}>Sign In</p>
//                         <p id="loginButton" onClick={self.switch.bind(null,"login")} className={self.state.login ? "yellow":"blue"}> Login</p>
//                     </div>
//                     { self.state.signup?<Signup/> : null}
//                     {self.state.login? <Login /> : null}
//                </div>
//             )
//     }
// })

// export default class Signin extends Comment{
//     state = {
//         signup: false,
//         login: true
//     }

//     switch = word => {
//         var signup,login;
//         if(word == "signup"){signup = true;login = false;}
//         else{login = true; signup = false;}
//         return this.setState({login:login,signup:signup})
//     }

//     render () {
//         return (
//             <div>
//                 <div id="buttons">
//                     <p id="signupButton" onClick={self.switch.bind(null,"signup")} className={self.state.signup ? "yellow":"blue"}>Sign In</p>
//                     <p id="loginButton" onClick={self.switch.bind(null,"login")} className={self.state.login ? "yellow":"blue"}> Login</p>
//                 </div>
//                 { self.state.signup?<Signup/> : null}
//                 {self.state.login? <Login /> : null}
//            </div>
//         )
//     }
// }



// var Signup = React.createClass({
//     render:function(){
//         return (
//             <div>
//                 <div id="signup">
//                     <input type="text" id="first" placeholder="First Name"/>
//                     <input type="text" id="last" placeholder="Last Name"/>
//                     <input type="email" id="email" placeholder="Email"/>
//                     <input type="password" id="password" placeholder="Password"/>
//                     <input type="password" id="confirm" placeholder="Confirm Password"/>
//                     <button id="send">Send</button>
//                 </div>
//             </div> 
//         )
//     }
// })
  
// var Login = React.createClass({
//     render:function(){
//         return (
//             <div>
//                 <div id="login">
//                     <input type="email" id="email" placeholder="Email"/>
//                     <input type="password" id="password" placeholder="Password"/>
//                     <button id="send">Send</button>
//                 </div>  
//             </div>
                
//         )
//     }
// })
