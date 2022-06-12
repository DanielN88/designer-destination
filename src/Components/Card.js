import react from "react";
import "../Styling/Card.css";

const Card = (props) => {
  return (
    <div className="attraction-card" key={props.xid}>
      <h3 className="card-title">{props.name}</h3>
      <img
        src={props.image}
        alt={props.name}
        style={{ height: 280, width: 280, objectFit: "contain" }}
        className="card-image"
      />
      <p className="card-address">{props.address}</p>
    </div>
  );
};

export default Card;
