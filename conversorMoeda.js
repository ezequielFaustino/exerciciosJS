/* 
        - dados -> dinheiro em R$
        - manipulacao dos dados -> exibir o dinheiro em R$ e converter para $
        - restricoes -> numero quebrado!!
        - resultado esperado -> exibir quantos dolares a pessoa pode comprar
        - passos necessarios:
            1. input float real digite o seu dinheiro em R$
            2. 1$ atual = R$ 5.63
            3. dolar = real / 5.63
            4. print com real voce pode comprar tantos $
*/

let real = parseFloat(prompt('digite o seu dinheiro em R$: '))
//alert(real);
let dolar = real / 5.63;
alert(`com R$ ${real} reais você pode comprar $ ${dolar.toFixed(2)} dolares`)
