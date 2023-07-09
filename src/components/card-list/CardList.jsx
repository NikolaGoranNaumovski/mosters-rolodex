import "./CardList.css";
import { Card } from "../card/Card";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;

        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};
