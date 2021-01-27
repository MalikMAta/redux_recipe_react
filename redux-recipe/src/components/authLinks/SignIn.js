import React from 'react'

function SignIn() {
    return (
        <div className="create">
    
        <p>Sign In</p>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="text" />
              <label for="text">Username</label>
    
            </div>
          </div>
    
          <div className="row">
            <div className="input-field col s12">
              <input type="text" />
              <label for="text">Password</label>
    
            </div>
          </div>
    
        
    
          <button className="btn col s4 offset-s4 z-depth-5 ">Submit</button>
        </form>
      </div>
      </div>
    );
    }


export default SignIn


