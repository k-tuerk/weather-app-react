import React from "react";

export default function Search() {
  return (
    <form>
      <div className="md-form">
        <input
          type="text"
          placeholder="Insert City"
          class="form-control"
          id="searchCity"
        />
        <button className="submit">Submit</button>
        <button className="currentLocation">Current Location</button>
      </div>
    </form>
  );
}
