import React from 'react';

const Card = ({ card, index, clickHandler }) => {
  return (
    <div className="">
      <img src={card.img} alt={card.name} />
    </div>
  );
};

export default Card;
