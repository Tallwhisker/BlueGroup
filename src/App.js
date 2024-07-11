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
import Category from './pages/components/Category';


function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/bluegroup'>
            <Routes>
                <Route path="/" element={<Header />}> {/*Header element, sidor som barn under */}
                    <Route index element={<Categories />} />
                    <Route path="/Hemelektronik" element={<Category id={1} catName={'Hemelektronik'} />} />
                    <Route path="/Resor" element={<Category id={2}  catName={'Resor'} />} />
                    <Route path="/Mat" element={<Category id={3} catName={'Mat'} />} />
                    <Route path="/Klader" element={<Category id={4} catName={'Kläder'} />} />
                    <Route path="/Sport" element={<Category id={5} catName={'SportPrylar'} />} />
                    <Route path="/Matlagning" element={<Category id={6} catName={'Matlagningsprylar'} />} />
                </Route>
                
            </Routes>
            <Footer /> {/*Footer element */}
        </BrowserRouter>
    </div>     
  );
}

export default App;
