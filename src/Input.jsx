import React, { useState } from "react";

export default function Input(props) {
  let [name, setName] = useState("");

  let submit = (event) => {
    event.preventDefault();

    props.search(name);
  };

  return (
    <form className="row g-3" onSubmit={submit}>
      <div className="col-10">
        <input
          type="search"
          className="form-control"
          placeholder="country search"
          onChange={(event) => {
            setName(event.target.value);
            props.checkSearchData(event.target.value);
          }}
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          Search
        </button>
      </div>
    </form>
  );
}
