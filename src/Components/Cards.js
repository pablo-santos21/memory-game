import React, { useState, useRef } from 'react';
import Card from './Card';

const Cards = () => {
  const [cards, setCards] = useState(
    [
      { id: 0, name: 'Logo', status: '', img: './images/01.jpg' },
      { id: 0, name: 'Logo', status: '', img: './images/01.jpg' },
      { id: 1, name: 'Hogwarts', status: '', img: './images/02.jpg' },
      { id: 1, name: 'Hogwarts', status: '', img: './images/02.jpg' },
      { id: 2, name: 'Hermione', status: '', img: './images/03.jpg' },
      { id: 2, name: 'Hermione', status: '', img: './images/03.jpg' },
      { id: 3, name: 'Rony', status: '', img: './images/04.jpg' },
      { id: 3, name: 'Rony', status: '', img: './images/04.jpg' },
      { id: 4, name: 'Brazao', status: '', img: './images/05.jpg' },
      { id: 4, name: 'Brazao', status: '', img: './images/05.jpg' },
      { id: 5, name: 'Harry Potter', status: '', img: './images/06.jpg' },
      { id: 5, name: 'Harry Potter', status: '', img: './images/06.jpg' },
      { id: 6, name: 'Dumbledore', status: '', img: './images/07.jpg' },
      { id: 6, name: 'Dumbledore', status: '', img: './images/07.jpg' },
      { id: 7, name: 'Minerva', status: '', img: './images/08.jpg' },
      { id: 7, name: 'Minerva', status: '', img: './images/08.jpg' },
      { id: 8, name: 'Gina', status: '', img: './images/09.jpg' },
      { id: 8, name: 'Gina', status: '', img: './images/09.jpg' },
      { id: 9, name: 'Valdemort', status: '', img: './images/10.jpg' },
      { id: 9, name: 'Valdemort', status: '', img: './images/10.jpg' },
      { id: 10, name: 'Hagrid', status: '', img: './images/11.jpg' },
      { id: 10, name: 'Hagrid', status: '', img: './images/11.jpg' },
      { id: 11, name: 'Siryus', status: '', img: './images/12.jpg' },
      { id: 11, name: 'Siryus', status: '', img: './images/12.jpg' },
      { id: 12, name: 'Grifindor', status: '', img: './images/13.jpg' },
      { id: 12, name: 'Grifindor', status: '', img: './images/13.jpg' },
      { id: 13, name: 'Slytherin', status: '', img: './images/14.jpg' },
      { id: 13, name: 'Slytherin', status: '', img: './images/14.jpg' },
      { id: 14, name: 'Ravenclaw', status: '', img: './images/15.jpg' },
      { id: 14, name: 'Ravenclaw', status: '', img: './images/15.jpg' },
      { id: 15, name: 'Hufflepuff', status: '', img: './images/16.jpg' },
      { id: 15, name: 'Hufflepuff', status: '', img: './images/16.jpg' },
    ].sort(() => Math.random() - 0.5),
  );

  const [viewCard, setViewCard] = useState(-1);
  const viewIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[viewCard].id) {
      cards[viewCard].status = 'ativo matched';
      cards[currentCard].status = 'ativo matched';
      setViewCard(-1);
    } else {
      cards[currentCard].status = 'ativo';
      setCards([...cards]);
      setTimeout(() => {
        setViewCard(-1);
        cards[currentCard].status = 'unmatch';
        cards[viewCard].status = 'unmatch';
        setCards([...cards]);
      }, 1000);
    }
  };

  const handleClick = (index) => {
    if (index !== viewIndex.current) {
      if (cards[index].status === 'ativo matched') {
        alert('já combinado');
      } else {
        if (viewCard === -1) {
          viewIndex.current = index;
          cards[index].status = 'ativo';
          setViewCard([...cards]);
          setViewCard(index);
        } else {
          matchCheck(index);
          viewIndex.current = -1;
        }
      }
    } else {
      alert('Carta ja Selecionada');
    }
  };

  return (
    <div className="grid grid-cols-8 gap-8">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Cards;
