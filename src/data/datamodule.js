
//Fulimportera data från exporterad variabel p.g.a React & Node samarbetade inte.
import { data } from "./product-data.js";

//Skapa tomt objekt för att förvara datan
const databas = {};

//Iterera på INDATA, varje index = obj
data.products.forEach(obj => {

    //Extrahera kategorin från nuvarande obj
    let objCat = obj.type;

    //Om "databas"-objektet EJ har ovan kategori, skapa det som en TOM array
    if(!databas[objCat]) {
        databas[objCat] = [];
    };

    //Push HELA objektet in i databas.kategori
    databas[objCat].push(obj);
});

//Exportera databas.
//Format: "databas"."kategori" = []
export {
    databas
}