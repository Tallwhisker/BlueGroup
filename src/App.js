import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './pages/components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {/* <Route path="" element={{}}> Header element, sidor som barn under */}
            <Route index element={<Categories />} />

            {/*</Route> */}
        </Routes>
    </BrowserRouter>
    </div>      
  );
}

export default App;
