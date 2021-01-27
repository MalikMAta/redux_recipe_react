import React, {useState} from "react";

function Create() {

  
  return (
      <div className="create">

      <p>Want to add a new recipe?</p>
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input type="text" />
            <label for="text">Textarea</label>

          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input type="text" />
            <label for="text">Textarea</label>

          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 ">
            <input type="text" />
            <label for="text">Textarea</label>

          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" />
            <label for="textarea1">Textarea</label>
          </div>
        </div>

        <button className="btn col s4 offset-s4 z-depth-5 ">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Create;
