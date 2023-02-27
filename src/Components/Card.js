import React from 'react';
import '../style/Card.css';

const Card = ({ card, index, handleClick }) => {
  const cardClassName = card.status ? 'ativo' : '';

  return (
    <div
      className={`card ${card.status} rounded-lg`}
      onClick={() => handleClick(index)}
    >
      <img src={card.img} alt={card.name} className="rounded-lg" />
    </div>
  );
};

export default Card;
