/* 
        - dados -> precoProduto, novoPreco
        - manipulacao dos dados -> exibir o produto com seu novo preco de 5% de desconto
        - restricoes -> 5% de desconto apenas!!
        - resultado esperado -> o preco final do produto ja com os 5% de desconto incluido
        - passos necessarios:
            1. input float precoProduto 'digite o valor do produto' 
            2. input novoPreco =  precoProduto- (precoProduto * 5/100)
            3. print 'o produto com o valor precoProduto com 5% de desconto fica novoPreco reais' 
*/
let precoProduto = parseFloat(prompt('digite o valor do produto R$: '));
let novoPreco = precoProduto - (precoProduto * 5/100);
alert(`o produto de R$ ${precoProduto.toFixed(2)}, com desconto de 5%, fica  R$ ${novoPreco.toFixed(2)}`);
