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

<<<<<<< HEAD


// console.log(demoLista[0].type,demoLista[1].type,demoLista[2].type);

=======
>>>>>>> 053f73491eb65d239313deb688e5c24bd49857be
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

//Parametern "produkt" är 1st produkt (ser ut som demoProdukt)
export default function ProduktKort({ produkt }) {

<<<<<<< HEAD
    //demoProdukt = produkt;

    const [ content, setContent ] = useState(produkt);
=======
    //Content = produkt - Alla värden i produkt-objektet blir content.värde
    const [ content, setContent ] = useState(demoProdukt);
>>>>>>> 053f73491eb65d239313deb688e5c24bd49857be

    //Ändra w-25 när kortet har en container som sätter storleken
    return (
         <div className="card text-start m-2 w-25" style={{minWidth:'220px',boxShadow:'0 2px 2px rgba(0,0,0,0.2)'}}>  
            <img src={require(`../../../public/data/thumbnails/${content.image}`)} alt={content.name} className="card-img-top"  />
            <div className="card-body">

                {/* content.brand = produkt.brand */}
                <p className="card-text my-0">{content.brand}</p>

                {/* content.name = produkt.name */}
                <h5 className="card-title">{content.name}</h5>
                <div className="container-fluid row px-0 py-3">
<<<<<<< HEAD
                    <div className="col-9 d-flex flex-column justify-content-between" >
=======
                    <div className="col-9 d-flex flex-column justify-content-between">

                        {/* content.price/original_price = produkt.price/original_price */}
>>>>>>> 053f73491eb65d239313deb688e5c24bd49857be
                        <CardPrice price={content.price} orgPrice={content.original_price} />

                        {/* content.quantity = produkt.quantity */}
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

//Parametern "amount" är Produktens "quantity" värde
function CardQuantity({amount}) {

    //Om mängden produkter är över 100, text blir 100+
    if (amount > 100) return (
        <h6 className="card-subtitle">
            <span><i className="bi bi-box-seam-fill text-success  fs-5"></i>{` 100+ på lager`}</span>
        </h6>
    );

    //Om mängden är under 1 så visas Slut på lager
    if (amount < 1) return (
        <h6 className="card-subtitle">
            <span><i className="bi bi-box-seam-fill text-danger fs-5"></i>{` Slut på lager`}</span>
        </h6>
    );

    //Om värdet är 1-100 visas värdet
    return (
        <h6 className="card-subtitle">
            <span><i className="bi bi-box-seam-fill"></i>{` ${amount}st kvar`}</span>
        </h6>
    );
};

//Parametrarna "price, orgPrice" är produktens "price, original_Price" värden
function CardPrice({price, orgPrice}) {
    
    //Om orgPrice är satt, använd det men stryk över det
    if (orgPrice > 0) return (
        <h6 className="card-subtitle">
            <span className="text-decoration-line-through">{orgPrice}</span> {` ${price} SEK`}
        </h6>
    );

    //Annars visas endast priset
    return (
        <h6 className="card-subtitle">
            {` ${price} SEK`}
        </h6>
        );
};