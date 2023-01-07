 import React from 'react'
 
 export default function SignUp() {
  return (
    <div className="container">
    <div id="signup">Signup</div>
     <div className="credentials">
        <div>
            <input type="text" placeholder="Full Name"/>
        </div>
        <br/>
        <div>
            <input type="email" placeholder="Email"/>
        </div>
        <br/>
        <div>
            <input type="password" placeholder="Password"/>
        </div>
        <br/>
        <div>
            <input type="password" placeholder="Confirm Password"/>
        </div>
        <br/>
    </div>
    <div className="errors">
        <p style={{color: "red"}}>Error : All the fields are mandatory</p>
    </div>
    <br/>
    <div className="success">
       <p style={{color: "green"}}>Successfully Signed In.</p> 
    </div>
    <br/>
    <button id="button">Signup</button>
</div>
   )
 }
 