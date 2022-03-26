/* 
        - dados -> numero(1-10), chuteUsuario
        - manipulacao dos dados -> se usuario chutar um numero acima, exiba 'chute acima', caso numero abaixo 'chute abaixo' e se o user acertar, exiba 'voce acertou!!'
        - restricoes -> o jogo so acaba quando o usuario acerta o numero!!
        - resultado esperado -> espera que o usuario possa jogar ate acertar o numero
        - passos necessarios:
            1. numAleatorio (1-10) -> Math.random()
            2. acertou = Falso
            3. input chuteUsuario 'digite o numero a ser chutado!!'
            4. if chuteUsuario > numAleatorio
                print 'chute acima do valor gerado!!'
            5. if chuteUsuario < numAleatorio
                print 'chute abaixo do valor gerado!!'
            6. if chuteUsuario = numAleatorio
                print 'voce acertou!!'
*/
var numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min);
var chuteUsuario = parseInt(prompt('digite o numero a ser chuta (1-10): '))
var string = ""
string+= `num aleatorio: ${numeroAleatorio(1,11)} \n`
string+= `chute usuario: ${chuteUsuario} \n`
string+= `------------------------------------`
alert(string);
