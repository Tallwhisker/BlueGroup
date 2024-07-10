import React from 'react';
import { useState, useEffect } from 'react';
import './Categories.css';
import {Link,useNavigate} from 'react-router-dom';



function Categories() {

    const [clsNm, setClsNm] = useState('show');

    const [bigSrc, setBigSrc] = useState(require('./Images/travel_1.jpg'));

    const [i, setI] = useState(0);

    const [showAnim, setShowAnim] = useState(true);

    let src1 = require('./Images/computer_24.png');
    let src2 = require('./Images/flight_24.png');
    let src3 = require('./Images/grocery_24.png');
    let src4 = require('./Images/apparel_24.png');
    let src5 = require('./Images/sports_soccer_24.png');
    let src6 = require('./Images/frying_24.png');

    let slider = ['travel_3.jpg', 'media_1.jpg', 'media_3.jpg', 'cooking_1.jpg', 'cooking_2.jpg', 'food_3.jpg', 'food_4.jpg', 'sports_2.jpg', 'sports_3.jpg', 'clothes_1.jpg', 'clothes_2.jpg',
        'travel_4.jpg', 'travel_2.jpg', 'cooking_4.jpg', 'cooking_3.jpg', 'food_1.jpg', 'food_2.jpg'];


    useEffect(() => {
        if (showAnim) {
            let timer = setTimeout(() => {
                if (clsNm === 'show') {
                    setClsNm('hide');
                }
                else {
                    setClsNm('show');
                }

                clearTimeout(timer);     // Memory managing: Timeouts
            }, 5000);
            setTimeout(() => {

                setBigSrc(require('./Images/' + slider[i]));

                if (i <= 15) {
                    let j = i + 1;
                    setI(j);
                }
                else {
                    setI(0);
                }
            }, 10000);
        }
    });

    const navigate = useNavigate();

    function handleCatChange(id){

        let helpStr = "";
        switch(id){
           case 1:
              helpStr='/Hemelektronik';
              break;
           case 2:
               helpStr='/Resor';
               break;
           case 3:
              helpStr='/Mat';
              break;
           case 4:
                helpStr='/Klader';
                break;
           case 5:
              helpStr='/Sport';
              break;
           case 6:
               helpStr='/Matlagning';
               break;
        }
        
        navigate(helpStr);
    }

    let catList = [{id:1,name:'Hemelektronik'},{id:2,name:'Resor'},{id:3,name:'Mat'},{id:4,name:'Kläder'},{id:5,name:'Sportprylar'},{id:6,name:'Matlagningsprylar'}];

    return (
        <section id='heroSection'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-4  d-flex justify-content-center align-items-center">
                        <ul className='m-0 p-0' key={"catList"}>
                            <li key={catList[0].id}><button onClick={()=>handleCatChange(catList[0].id)} href="#"><img src={src1} /><span style={{ marginLeft: '20px' }}>Hemelektronik</span></button></li>
                            <li key={catList[1].id}><button onClick={()=>handleCatChange(catList[1].id)} href="#"><img src={src2} /><span style={{ marginLeft: '20px' }}>Resor</span></button></li>
                            <li key={catList[2].id}><button onClick={()=>handleCatChange(catList[2].id)} href="#"><img src={src3} /><span style={{ marginLeft: '20px' }}></span>Mat</button></li>
                            <li key={catList[3].id}><button onClick={()=>handleCatChange(catList[3].id)} href="#"><img src={src4} /><span style={{ marginLeft: '20px' }}>Kläder</span></button></li>
                            <li key={catList[4].id}><button onClick={()=>handleCatChange(catList[4].id)} href="#"><img src={src5} /><span style={{ marginLeft: '20px' }}>Sportprylar</span></button></li>
                            <li key={catList[5].id}><button onClick={()=>handleCatChange(catList[5].id)} href="#"><img src={src6} /><span style={{ marginLeft: '20px' }}>Matlagningsprylar</span></button></li>
                        </ul>
                    </div>
                    <div className="col-12 col-xl-8 d-flex justify-content-center align-items-center container-fluid">
                        <img key={1} className={clsNm} style={{ borderRadius: '4px' }} src={bigSrc} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Categories;
