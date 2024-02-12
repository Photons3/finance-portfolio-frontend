import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="cardimage"
      />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Ullamco dolore et ea eu pariatur id officia. Ut magna exercitation sunt
        occaecat dolore aliquip. Cillum nisi Lorem laboris eiusmod dolore. Sit
        ullamco ipsum proident ut enim enim occaecat duis cupidatat ipsum
        reprehenderit. Occaecat aliquip aliqua ullamco consectetur enim ad in eu
        pariatur occaecat laboris mollit. Ex do ea exercitation est mollit
        consequat amet.
      </p>
    </div>
  );
};

export default Card;
