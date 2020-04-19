export default function sellProduct(product, amount){
    console.log('product :', product);
    product.stock -= 1;
    console.log('product :', product);
    return product;
}

