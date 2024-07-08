import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={{}}> {/*Header element, sidor som barn under */}

                </Route>
            </Routes>
        </BrowserRouter>
    </div>      
  );
}

export default App;
