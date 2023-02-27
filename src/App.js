import Cards from './Components/Cards';
import './style/App.css';

function App() {
  return (
    <div className="px-10 py-10">
      <div className="text-center">
        <h1 className="text-4xl text-gray-500 py-20">Harry Potter</h1>
        <div className="grid">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
