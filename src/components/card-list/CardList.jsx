import { Component } from "react";

import './CardList.css'
import { Card } from "../card/Card";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { id, name, email } = monster;

          return (
            <Card id={id} name={name} email={email} />
          );
        })}
      </div>
    );
  }
}
