export default function sellProduct(product, amount){
    console.log('product :', product);
    product.stock -= amount;
    console.log('product :', product);
    return product;
}

