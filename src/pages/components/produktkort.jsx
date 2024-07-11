import { useState } from "react"
import { Link } from "react-router-dom";

const demoProdukt = {
    "brand": "Dell",
    "name": "Vostro 3520 Core i5 16GB 512GB 15.6",
    "type": "electronics",
    "image": "dell-vostro-3520-core-i5-16gb-512gb-156.jpg",
    "price": 5490,
    "original_price": 7490,
    "quantity": 101
};


/* const demoLista = [{"brand":"Dell","name":"Vostro 3520 Core i5 16GB 512GB 15.6","type":"electronics","image":"dell-vostro-3520-core-i5-16gb-512gb-156.jpg",
    "price":5490,"original_price": 7490,"quantity": 101},
    {"brand":"Samsung","name":"512GB 15.6","type":"something_else","image":"hjhj.jpg",
        "price":2490,"original_price": 3490,"quantity": 101},
        {"brand":"HP","name":"HP 3520 Core i5 16GB 512GB 15.6","type":"electronics","image":"db-156.jpg",
            "price":5490,"original_price": 7490,"quantity": 101}
]; */

// const demo = JSON.parse('"' + demoLista[0] + '"');

//const demo = JSON.parse(demoLista[0]);

// demoLista.sort((a, b) => (a.type > b.type? 1 : -1));

/* const demo = demoLista.filter(el=>
    el.type=="electronics"
);
console.log(demo.length);
console.log(demo[0].type,demo[1].type); */


// console.log(demoLista[0].type,demoLista[1].type,demoLista[2].type);

/*
Produkt = {
    brand,
    name,
    type,
    image,
    price,
    original_price,
    quantity
}
*/

export default function ProduktKort({ produkt }) {
    const [ content, setContent ] = useState(demoProdukt);

    //Ändra w-25 när kortet har en container som sätter storleken
    return (
         <div className="card text-start m-2 w-25" style={{minWidth:'220px'}}>  
            <img src={require(`../../../public/data/thumbnails/${content.image}`)} alt={content.name} className="card-img-top" />
            <div className="card-body">
                <p className="card-text my-0">{content.brand}</p>
                <h5 className="card-title">{content.name}</h5>
                <div className="container-fluid row px-0 py-3">
                    <div className="col-9 d-flex flex-column justify-content-between">
                        <CardPrice price={content.price} orgPrice={content.original_price} />
                        <CardQuantity amount={content.quantity} />
                    </div>
                    <div className="col-3 text-center">
                    <Link to="/"><i className="bi bi-bag card-buyitem text-black fs-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

function CardQuantity({amount}) {

    if (amount > 100) return (
        <h6 className="card-subtitle">
            <span><i className="bi bi-box-seam-fill text-success  fs-5"></i>{` 100+ på lager`}</span>
        </h6>
    );

    if (amount < 1) return (
        <h6 className="card-subtitle">
            <span><i className="bi bi-box-seam-fill text-danger fs-5"></i>{` Slut på lager`}</span>
        </h6>
    );

    return (
        <h6 className="card-subtitle">
            <span><i className="bi bi-box-seam-fill"></i>{` ${amount}st kvar`}</span>
        </h6>
    );
};

function CardPrice({price, orgPrice}) {
    
    if (orgPrice > 0) return (
        <h6 className="card-subtitle">
            <span className="text-decoration-line-through">{orgPrice}</span> {` ${price} SEK`}
        </h6>
    );

    return (
        <h6 className="card-subtitle">
            {` ${price} SEK`}
        </h6>
        );
};