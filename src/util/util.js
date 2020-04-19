import faker from 'faker';
import Product from '../model/product';
export default class Util{
    static generateProduct(amount){
        //description, buyPrice, sellPrice, stock
        let products = [];
        for(let i = 0; i<amount; i++){

            const description = faker.commerce.product();
            const buyPrice = faker.commerce.price(50, 99);
            const sellPrice = faker.commerce.price(100, 200);
            const stock = faker.random.number(10);

            let p = new Product(description, buyPrice, sellPrice, stock);
            products.push(p);
        }
        return products;

    }
}
