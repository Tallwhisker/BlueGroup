import React from 'react';
import './Categories.css';

 function Categories() {

  let big_src = require('./Images/travel_3.jpg');

  let src1 = require('./Images/computer_24.png');
  let src2 = require('./Images/flight_24.png');
  let src3 = require('./Images/grocery_24.png');
  let src4 = require('./Images/apparel_24.png');
  let src5 = require('./Images/sports_soccer_24.png');
  let src6 = require('./Images/frying_24.png');


  return ( 
    
  
     <div className="container-fluid">
     <div className='row corr' style={{width:'100%',textAlign:'center'}}>
      <div className="col-sm-6 corr_left">
      <ul>
        <li key={1}><button href="#"><img src={src1} /><span style={{marginLeft:'20px'}}></span>Hem Elektronik</button></li>
        <li key={2}><button href="#"><img src={src2} /><span style={{marginLeft:'20px'}}>Resor</span></button></li>
        <li key={3}><button href="#"><img src={src3} /><span style={{marginLeft:'20px'}}></span>Mat</button></li>
        <li key={4}><button href="#"><img src={src4} /><span style={{marginLeft:'20px'}}>Kläder</span></button></li>
        <li key={5}><button href="#"><img src={src5} /><span style={{marginLeft:'20px'}}>Sportprylar</span></button></li>
        <li key={6}><button href="#"><img src={src6} /><span style={{marginLeft:'20px'}}>Matlagningsprylar</span></button></li>
      </ul>
      </div>
    
     <div className="col-sm-6 corr_right">
        <img key={1}  src={big_src} alt="" />
      </div>
     </div>
    </div>
  
   
  )
}


export default Categories;
