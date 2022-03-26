/* 
        - dados -> numero
        - manipulacao dos dados -> exibir a tabuada do numero
        - restricoes -> numero deve ser inteiro
        - resultado esperado -> a tabuada do numero ate 10
        - passos necessarios:
            1. input int digite o numero
            2. numero in tabuada
            3. 1 x 1 = 1...
*/

let num = parseInt(prompt('digite um numero inteiro: '));

for(let i = 1; i<11; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}
//console.log(num);
