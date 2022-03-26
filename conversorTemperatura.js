/* 
        - dados -> celsius, fahrenheit
        - manipulacao dos dados -> converter a temperatura em C° para F°
        - restricoes -> ---
        - resultado esperado -> exibir na tela a temperatura em C° e depois a conversao em F°
        - passos necessarios:
            1. input float celsius 'digite a temperatura em C°'
            2. input fahre = (celsius * 9/5) + 32
            3. print 'a temperatura de C° convertida é de F°
*/

let celsius = parseFloat(prompt('digite a temperatura em C° '))
let fahre = (celsius * 9/5) + 32
alert(`a temperatura de ${celsius} C° convertida é de ${fahre} F°`) 
