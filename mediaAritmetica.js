/* 
        - dados -> notaA e notaB
        - manipulacao dos dados -> calcular a media do aluno com as duas notas
        - restricoes -> as notas devem ser numeros quebrados
        - resultado esperado -> exibir na tela a mediaAritmetica do aluno com as 2 notas
        - passos necessarios:
            1. input float notaA
            2. input float notaB
            3. media (notaA+notaB) / 2
            4. print o aluno com as notas A e B teve media X
*/

let notaA = parseFloat(prompt('digite a primeira nota: '));
let notaB = parseFloat(prompt('digite a segunda nota: '));
let media = (notaA+notaB) / 2
alert(`1a nota: ${notaA} | 2a nota: ${notaB} | media = ${media}`);
