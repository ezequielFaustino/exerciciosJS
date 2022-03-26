/* 
        - dados -> largura, altura (em metros), cada 1L de tinta pinta uma area de 2m²
        - manipulacao dos dados -> pegar a area total de uma parede e exibir quantos litros de tinta precisa para pinta-la
        - restricoes -> tanto a largura quanto a altura é medida em metros
        - resultado esperado -> a qtd de tinta necessario para pintar uma area  de X m² de uma parede;
        - passos necessarios:
            1. input largura digite a largura da parede m: 
            2. input altura digite a altura da parede m:
            3. area = largura * altura == area m²
            4. pintar = area / 2
            5. print 'para pintar a parede de area metros² é preciso pintar litros de tinta' 
*/
let largura = parseFloat(prompt('digite a largura da parede em metros: '))
let altura = parseFloat(prompt('digite a altura da parede em metros: '))
let area = largura * altura
let pintar = area / 2
alert(`para pintar uma parede com ${area} m², é preciso ${pintar} litros de tinta`);
