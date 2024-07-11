import './Category.css';
import {Link} from 'react-router-dom';
import ProduktKort from './produktkort';

function Category({id, catName, prodList}) {
//  ["electronics","travel","food","clothing","sports","kitchenware"]
// [{id:1,name:'Hemelektronik'},{id:2,name:'Resor'},{id:3,name:'Mat'},{id:4,name:'Kläder'},{id:5,name:'Sportprylar'},{id:6,name:'Matlagningsprylar'}];

 let slogans= [
    {id:1,slogan:'Njut av vårt fina utbud av handplockade media-prylar. Allt ifrån laptops,Tv-apparater,headphones m.m.Till finfina priser.'},
    {id:2,slogan:'Våra resor bjuder på allt från sol till snö och främmande vyer.Vi anlitar kända resebyråar som TUI,Ving,SolResor och BlueGroupTravels'},
    {id:3,slogan:'Hos oss kan du köpa mat i alla prisklasser från basvaror till lite finare sortiment'},
    {id:4,slogan:'Vi har samlat de största och namnkunnigaste märkena i vår klädavdelning. Värt att kolla upp !'},
    {id:5,slogan:'Vad vore idrott utan prylar att idrotta med? Kolla in våra heta sportprylar'},
    {id:6,slogan:'Behöver du en ny stekpanna ? Eller en kastrull från Jamie Olivers sortiment. Vi har det.'}
 ];

/* const demo = demoLista.filter(el=>
  el.type=="electronics"
); */

// skapar en ihopbyggd komponent: <><ProduktKort /><ProduktKort /><ProduktKort />...</>; 
function buildProductCards()
{
  const rows = [];
  for (let i = 0; i < prodList.length; i++) {
    rows.push(<ProduktKort key={id+i} produkt={prodList[i]}/>);
  }
  return <>{rows}</>;
}


let comps = buildProductCards();

  return (
    <div className="container">

      <h6><Link to='/' style={{}}>Hem</Link> -&gt; {catName}</h6>
      <div className='header'>
          <h2>{catName}</h2>
          <p>{slogans[id-1].slogan}</p>
      </div>
      
      <div className='container' style={{marginTop:'50px'}}>
        <div className='row'>
             {comps}
        </div>        
      </div>
    </div>
  )
}

export default Category;
