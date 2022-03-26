/* 
        - dados -> valor em metros
        - manipulacao dos dados -> exibir o valor em centimetros, milimetros e kilometros
        - restricoes -> numero deve ser quebrado!!
        - resultado esperado -> o valor em centimetros, milimetros e kilometros do numero em questao
        - passos necessarios:
            1. input float digite o valor em metros
            2. centimetro metro * 100
            3. milimetro metro * 1000
            4. kilometro metro / 1000 
            5. print centimetro | milimetro | kilometro
*/

let num = parseFloat(prompt('digite o valor em metros: '))
let centimetro = num * 100;
let milimetro = num * 1000;
let km = num / 1000
alert(`${num} metro | centimetros: ${centimetro}| milimetro: ${milimetro} | kilometro: ${km}`);
