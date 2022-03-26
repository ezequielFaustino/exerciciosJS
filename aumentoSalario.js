/* 
        - dados -> salario, novoSalario
        - manipulacao dos dados -> ler o salario do funcionario e mostrar seu novo salario com 15% de aumento
        - restricoes -> apenas 15% de aumento!!
        - resultado esperado -> o novo salario com 15% de aumento exibido na tela
        - passos necessarios:
            1. input salario 'digite o salario atual R$'
            2. input novoSalario =  salario + (salario * 15/100)
            3. print 'o salario do funcionario de reais, com 15% de aumento agora é de R$ novoSalario' 
*/
let salario = parseFloat(prompt('digite o salario atual R$: '));
let novoSalario = salario + (salario * 15/100);
alert(` o salario do funcionario de ${salario} reais, com 15% de aumento agora é de ${novoSalario} reais`);
