import React from 'react';
import Cards from '../Components/Cards';

const Home = ({ turns }) => {
  return (
    <section>
      <div className="grid">
        <Cards />
      </div>
    </section>
  );
};

export default Home;
