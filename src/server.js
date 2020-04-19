import express from 'express';
import Util from '../src/util/util'

export const app = express();

let products = Util.generateProduct(200);
app.get('/', (request, response) => {
    response.json(products);
})

app.listen(3000);


