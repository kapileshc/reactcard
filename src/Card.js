import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
const Card = (props) => {
  const checkmark = (props) =>{
   return  props === "true" ? <i className="fas fa-check"></i> :<i className="fas fa-times"></i> ;
  }
  const classcheck = (props) =>{
    return props === "true" ? "" :"text-muted";
  }
  return (
    <div className="pricing col-lg-4">
      <div className="card mb-5 mb-lg-0 bg-white">
      <h5 className="card-title text-muted text-uppercase text-center">{props.data.name}</h5>
      <h6 className="card-price text-center">{props.data.price}<span className="h6">/month</span></h6>
      <hr />
      <ul className="fa-ul">
        {props.data.features.map( ele => <li key={ele.name} className={classcheck(ele.valid)}><span className="fa-li">{checkmark(ele.valid)}</span>{ele.name}</li> )}
      </ul>
      <div className="d-grid">
        <button className="btn btn-primary text-uppercase">Subscription</button>
      </div>
      </div>
    </div>
  );
};

export default Card;