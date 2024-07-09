import './App.css';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";

//Skript /\

//Komponenter \/

import Header from './pages/components/header';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/bluegroup'>
            <Routes>
                <Route path="/" element={<Header />}> {/*Header element, sidor som barn under */}

                </Route>
            </Routes>
        </BrowserRouter>
    </div>     
  );
}

export default App;
