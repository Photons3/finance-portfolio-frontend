import React from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div className="cardlist">
      <Card companyName="Apple" ticker="AAPL" price={300} />
      <Card companyName="Microsoft" ticker="MSFT" price={100} />
      <Card companyName="Jester" ticker="JPL" price={320} />
    </div>
  );
};

export default CardList;
