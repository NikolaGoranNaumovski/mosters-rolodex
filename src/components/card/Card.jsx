import { Component } from "react";

import './Card.css'

export class Card extends Component {
  render() {
    const { name, id, email } = this.props;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}set=set2size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
