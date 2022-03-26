/* 
        - dados -> numero
        - manipulacao dos dados -> exibir o dobro, triplo e a sua raiz quadrada do numero
        - restricoes -> numero deve ser quebrado!!
        - resultado esperado -> o dobro, triplo e a raiz quadrada do numero em questao
        - passos necessarios:
            1. input float digite o numero
            2. dobro numero*2
            3. triplo numero*3
            4. raizQuadrada numero |Math.sqrt()|
            5. print dobro, triplo e raizQuadrada
*/

let num = parseFloat(prompt('digite o numero: '));
dobro = num * 2;
triplo = num * 3;
raizQuadrada = Math.sqrt(num);
alert(`${num} | dobro =  ${dobro} | triplo = ${triplo} | raizQuadrada = ${raizQuadrada.toFixed(2)}`);
