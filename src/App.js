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

import { databas } from './data/datamodule';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/BlueGroup'>
            <Routes>
                <Route path="/" element={<Header />}> {/*Header element, sidor som barn under */}
                    <Route index element={<Categories />} />
                    <Route path="/Hemelektronik" element={<Category id={1} catName={'Hemelektronik'} prodList={databas.electronics} />} />
                    <Route path="/Resor" element={<Category id={2}  catName={'Resor'} prodList={databas.travel} />} />
                    <Route path="/Mat" element={<Category id={3} catName={'Mat'} prodList={databas.food} />} />
                    <Route path="/Klader" element={<Category id={4} catName={'Kläder'} prodList={databas.clothing} />} />
                    <Route path="/Sport" element={<Category id={5} catName={'SportPrylar'} prodList={databas.sports} />} />
                    <Route path="/Matlagning" element={<Category id={6} catName={'Matlagningsprylar'} prodList={databas.kitchenware} />} />
                </Route>
            </Routes>
            <Footer /> {/*Footer element */}
        </BrowserRouter>
    </div>     
  );
}

export default App;
