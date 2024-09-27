import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new"> {props.new_price} Birr</div>
        <div className="item-price-old"> {props.old_price} Birr</div>
      </div>
    </div>
  );
};

export default item;
