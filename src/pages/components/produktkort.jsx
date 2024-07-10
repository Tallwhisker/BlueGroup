import { useState } from "react"
import { Link } from "react-router-dom";


const demoArray = [
    "Biff", 
    "En Produkt av exemplarisk kvalitet. Kött från utvalda gårdar.(Kilopris)", 
    700, 
    // "http://kevinrickardsson.se/WebProjects/Cakes/Media/Cupcake2.png"
    'active-sports-gear-dartboard-piltavla.jpg'
];

// Input array[0] = namn, [1] = beskrivning, [2] = pris, [3] = bildlänk
export default function ProduktKort({ produkt }) {
    const [ content, setContent ] = useState(demoArray);
    

    //Ändra w-25 när kortet har en container som sätter storleken
    return (
        <div className="card text-start m-2 w-25"> 
            <img src={require('../../../public/data/thumbnails/' + content[3])} alt={content[0]} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title mb-3">{content[0]}</h5>
                <p className="card-text">{content[1]}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-subtitle">{`${content[2]} SEK`}</h6>
                    <Link href="/"><i class="bi bi-bag card-buyitem"></i></Link>
                </div>
            </div>
        </div>
    );
};