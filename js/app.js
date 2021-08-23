function dec(deci){
    var deci = document.getElementById('decimal').value
    const binario = []
    while(Math.floor(deci/2) >= 1){ //se a divisao for maior que 1 e se 2 for igual a 2 continu 
        if(Math.floor(deci%2 == 0)){
            binario.push(0)
        }
        else if(Math.floor(deci%2 == 1)){
            binario.push(1)
        }
        deci = Math.floor(deci/2)
    }

    binario.push(1)
    binario.reverse()

    var saida = document.getElementById('binario')
    saida.value=binario.join('')
}
