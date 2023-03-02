import './style/App.css';
import './style/Card.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="py-10 px-4 lg:p-10 fundo bg-cover bg-no-repeat ">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 py-4 ">
          Memory Potter
        </h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
