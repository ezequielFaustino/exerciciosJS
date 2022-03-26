/* 
        - dados -> kmCarro, dias
        - manipulacao dos dados -> pegar a qtd de km percorridos por um carro e a qtd de dias.Calcular o preco a pagar, sabendo q o carro 60 R$ por dia  e 0,15 centavos por km rodado. 
        - restricoes -> valor do aluguel diario do carro é fixo!!
        - resultado esperado ->  exibir o total a pagar de acordo com os dias e a qtd de km rodada
        - passos necessarios:
            1. input float kmCarro
            2. input int dias
            3. total = (dias * 60) + (kmCarro * 0.15) 
            4. print 'o total a pagar por tantos dias e tantos km rodados é de total' 
*/
let dias = parseInt(prompt('digite quantos dias o carro foi usado: '))
let kmCarro = parseFloat(prompt('digite a Km do carro durante o tempo q foi usado: '))
let total = (dias * 60) + (kmCarro * 0.15)
alert(`o total a pagar por ${dias} dias e ${kmCarro} rodados é de R$ ${total.toFixed(2)} `) 

