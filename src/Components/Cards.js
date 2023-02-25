import React, { useState, useRef } from 'react';
import Card from './Card';
import {
  imagem01,
  imagem02,
  imagem03,
  imagem04,
  imagem05,
  imagem06,
  imagem07,
  imagem08,
  imagem09,
  imagem10,
  imagem11,
  imagem12,
  imagem13,
  imagem14,
  imagem15,
  imagem16,
} from '../assets/images/index';

const Cards = ({ card, index }) => {
  const [cards, setCards] = useState([
    { id: 0, name: 'Logo', status: '', img: { imagem01 } },
    { id: 0, name: 'Logo', status: '', img: { imagem01 } },
    { id: 1, name: 'Hogwarts', status: '', img: { imagem02 } },
    { id: 1, name: 'Hogwarts', status: '', img: { imagem02 } },
    { id: 2, name: 'Hermione', status: '', img: { imagem03 } },
    { id: 2, name: 'Hermione', status: '', img: { imagem03 } },
    { id: 3, name: 'Rony', status: '', img: { imagem04 } },
    { id: 3, name: 'Rony', status: '', img: { imagem04 } },
    { id: 4, name: 'Brazao', status: '', img: { imagem05 } },
    { id: 4, name: 'Brazao', status: '', img: { imagem05 } },
    { id: 5, name: 'Harry Potter', status: '', img: { imagem06 } },
    { id: 5, name: 'Harry Potter', status: '', img: { imagem06 } },
    { id: 6, name: 'Dumbledore', status: '', img: { imagem07 } },
    { id: 6, name: 'Dumbledore', status: '', img: { imagem07 } },
    { id: 7, name: 'Minerva', status: '', img: { imagem08 } },
    { id: 7, name: 'Minerva', status: '', img: { imagem08 } },
    { id: 8, name: 'Gina', status: '', img: { imagem09 } },
    { id: 8, name: 'Gina', status: '', img: { imagem09 } },
    { id: 9, name: 'Valdemort', status: '', img: { imagem10 } },
    { id: 9, name: 'Valdemort', status: '', img: { imagem10 } },
    { id: 10, name: 'Hagrid', status: '', img: { imagem11 } },
    { id: 10, name: 'Hagrid', status: '', img: { imagem11 } },
    { id: 11, name: 'Siryus', status: '', img: { imagem12 } },
    { id: 11, name: 'Siryus', status: '', img: { imagem12 } },
    { id: 12, name: 'Grifindor', status: '', img: { imagem13 } },
    { id: 12, name: 'Grifindor', status: '', img: { imagem13 } },
    { id: 13, name: 'Slytherin', status: '', img: { imagem14 } },
    { id: 13, name: 'Slytherin', status: '', img: { imagem14 } },
    { id: 14, name: 'Ravenclaw', status: '', img: { imagem15 } },
    { id: 14, name: 'Ravenclaw', status: '', img: { imagem15 } },
    { id: 15, name: 'Hufflepuff', status: '', img: { imagem16 } },
    { id: 15, name: 'Hufflepuff', status: '', img: { imagem16 } },
  ]);
  return (
    <div className="container">
      {cards.map((card, index) => {
        return <Card card={card} />;
      })}
    </div>
  );
};

export default Cards;
