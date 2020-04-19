import Util from 'util'

export default class Product{
    constructor(description, buyPrice, sellPrice, stock){
        this.description = description;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.stock = stock;
    }
    getStock(){
        return this.stock;
    }
}
