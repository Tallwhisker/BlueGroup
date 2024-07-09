import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './pages/components/Categories';

function App() {
  return (
    <div className="App">
      <header>
           <Categories />
      </header>
      <BrowserRouter>
        <Routes>
            {/* <Route path="" element={{}}> {/*Header element, sidor som barn under */}
            {/*</Route> */}
        </Routes>
    </BrowserRouter>
    </div>      
    
  );
}

export default App;
