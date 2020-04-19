import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

test('deve validar baixa de estoque da venda de uma unidade', () => {
    let p = new Product('Celular', 500.00, 900.00, 10);
    p = sell(p,1);
    expect(p.getStock()).toBe(9);
});

test('deve validar baixa de estoque da venda de mais do que uma unidade', () => {
    let p = new Product('Celular', 500.00, 900.00, 10);
    p = sell(p,3);
    expect(p.getStock()).toBe(7);
});
