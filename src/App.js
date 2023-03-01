import Cards from './Components/Cards';
import Timer from './Components/Timer';
import './style/App.css';
import './style/Card.css';

function App() {
  return (
    <div className="p-10 fundo bg-cover bg-no-repeat ">
      <div className="text-center">
        <div className="py-6 md:py-10 lg:py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 py-4 ">
            Memory Potter
          </h1>
          <samp className="text-2xl md:text-3xl lg:text-4xl text-gray-200">
            <Timer maxTime={120} />
          </samp>
        </div>
        <div className="grid">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
