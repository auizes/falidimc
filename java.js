function imc(){
    let Nome = document.getElementById('Nome').value
    let Altura = document.getElementById('Altura').value
    let Peso = document.getElementById('Peso').value
    let resultado = document.getElementById('resultado')

    if(Nome !== '' && Altura !== '' && Peso !== "" ){
        let imc = (parseFloatfloat(Peso) / parseFloat(Altura * Altura) * 1000).toFixed(1)


        let resultado

        if(imc <= 18.5){
            resultado = "Abaixo do peso"
        }

        else if(imc >= 18.6 && imc < 24.9){
            resultado = "Dentro do peso"
        }

        








        document.querySelector("resultado").innerHTML = '$(Nome), IMC: $(imc). peso $(resultado)'
    }

    else{document.querySelector("resultado").innerHTML = "Prencha todos os campos!"}

}