import { Link } from "react-router-dom";

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

//Parametern "produkt" är 1st produkt (ser ut som ovan)
export default function ProduktKort({ produkt }) {

    //Ändra w-25 om kortet har en container som sätter storleken
    return (
         <div className="card text-start m-2 w-25 justify-content-between" style={{minWidth:'220px',boxShadow:'0 2px 2px rgba(0,0,0,0.2)'}}>  
            <img src={require(`./Images/thumbnails/${produkt.image}`)} alt={produkt.name} className="card-img-top"  />
            <div className="card-body">
            
                <div>
                    <p className="card-text my-0">{produkt.brand}</p>
                    <h5 className="card-title">{produkt.name}</h5>
                </div>
                
                  <div className="container-fluid row px-0 py-3">
                    <div className="col-9 d-flex flex-column justify-content-between" >
                    
                        <CardPrice price={produkt.price} orgPrice={produkt.original_price} />
                        <CardQuantity amount={produkt.quantity} />
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