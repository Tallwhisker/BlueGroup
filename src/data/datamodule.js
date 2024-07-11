import { data } from "./product-data.js";
const databas = {};

data.products.forEach(obj => {
    let objCat = obj.type;

    if(!databas[objCat]) {
        databas[objCat] = [];
    };

    databas[objCat].push(obj);
})
console.log(databas);
export {
    databas
}