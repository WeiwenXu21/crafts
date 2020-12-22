import React from 'react';

export default props =>
    <div>
        <form id="login" onSubmit={props.onSubmit}>
            <label>
                <input type="email" id="email" placeholder="Email" onChange={props.onChange}/>
                <input type="password" id="password" placeholder="Password" onChange={props.onChange}/>
            </label>
            <input id="send" type="submit" value="Send" />
        </form>  
    </div>