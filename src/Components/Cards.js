import React, { useState, useEffect } from 'react';
import vira from '../img/vira.jpg';
import Card from './Card';

const cardImages = [
  {
    src: '../images/01.jpg',
    matched: false,
  },
  {
    src: '../images/02.jpg',
    matched: false,
  },
  {
    src: '../images/03.jpg',
    matched: false,
  },
  {
    src: '../images/04.jpg',
    matched: false,
  },
  {
    src: '../images/05.jpg',
    matched: false,
  },
  {
    src: '../images/06.jpg',
    matched: false,
  },
  {
    src: '../images/07.jpg',
    matched: false,
  },
  {
    src: '../images/08.jpg',
    matched: false,
  },
  {
    src: '../images/09.jpg',
    matched: false,
  },
  {
    src: '../images/10.jpg',
    matched: false,
  },
  {
    src: '../images/11.jpg',
    matched: false,
  },
  {
    src: '../images/12.jpg',
    matched: false,
  },
  {
    src: '../images/13.jpg',
    matched: false,
  },
  {
    src: '../images/14.jpg',
    matched: false,
  },
  {
    src: '../images/15.jpg',
    matched: false,
  },
  {
    src: '../images/16.jpg',
    matched: false,
  },
];

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // chance por cliques
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //  ambaralhar card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Comparando as 2 cartas
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  // resetando as chances e acrescentando 1 tentativa
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Iniciando automaticamente o jogo
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <div className="py-4">
        <samp className="text-2xl text-gray-200">Movimentos: {turns}</samp>
      </div>
      <div className="pt-4 pb-10">
        <button
          onClick={shuffleCards}
          className="py-2 px-4 bg-green-600 font-bold text-gray-800"
        >
          New Game
        </button>
      </div>

      <div>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-8">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              back={vira}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
