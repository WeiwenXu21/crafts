import React from 'react';

export default props =>
    <div>
        <form id="signup" onSubmit={props.onSubmit}>
            <label>
                <input type="text" id="first" placeholder="First Name" onChange={props.onChange}/>
                <input type="text" id="last" placeholder="Last Name" onChange={props.onChange}/>
                <input type="email" id="email" placeholder="Email" onChange={props.onChange}/>
                <input type="password" id="password" placeholder="Password" onChange={props.onChange}/>
                <input type="password" id="confirm" placeholder="Confirm Password" onChange={props.onChange}/>
            </label>
            <input id="send" type="submit" value="Send" />
        </form>
    </div>