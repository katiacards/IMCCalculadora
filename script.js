var botao = document.getElementById("calcular");

function calcularImc() {

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var resultado = document.getElementById("resultado");

    var imc = peso / (altura * altura);

    resultado.textContent = validar(altura, resultado, imc);

}

function mostrarResultado(imc) {

    if (imc < 0) {
        return "Valor inválido";
    }
    if (imc < 20) {
        return "Abaixo do peso";
    }
    if (imc > 19 && imc < 26) {
        return "Peso normal";
    }
    if (imc > 25 && imc < 30) {
        return "Sobrepeso";

    }
    if (imc > 30 && imc < 35) {
        return "Obesidade Grau I"

    }
    if (imc > 35 && imc < 40) {
        return "Obesidade Grau II"

    }
    if (imc > 40) {
        return "Obesidade Grau III"

    }


}

function validar(altura, resultado, imc) {
    if (altura == 0) {
        return "Necessário preencher todos os campos para continuar"
    }


resultado.textContent = mostrarResultado(imc);
}


botao.addEventListener('click', calcularImc);