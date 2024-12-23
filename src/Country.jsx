import React from "react";

export default function Country(props) {
  const getCurrency = () => {
    let currency = "";
    if (props.item.currencies) {
      currency = Object.keys(props.item.currencies);
      currency = currency.join("| ");
    }
    return currency;
  };
  return (
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src={props.item.flags.svg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.name.common}</h5>
          <h5 className="card-title">Currency:{getCurrency()}</h5>
        </div>
      </div>
    </div>
  );
}
