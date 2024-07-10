import './App.css';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";

//Skript /\

//Komponenter \/

import Header from './pages/components/header';
import Categories from './pages/components/Categories';
import Footer from './pages/components/footer';


function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/bluegroup'>
            <Routes>
                <Route path="/" element={<Header />}> {/*Header element, sidor som barn under */}
                    <Route index element={<Categories />} />
                </Route>
            </Routes>
            <Footer /> {/*Footer element */}
        </BrowserRouter>
    </div>     
  );
}

export default App;
