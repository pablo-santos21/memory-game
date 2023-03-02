import React from 'react';

const Card = ({ card, back, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="Card Potter" />
        <img
          className="back"
          src={back}
          onClick={handleClick}
          alt="Card Back"
        />
      </div>
    </div>
  );
};

export default Card;
