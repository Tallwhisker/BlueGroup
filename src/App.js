import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={{}}> {/*Header element, sidor som barn under */}

            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
