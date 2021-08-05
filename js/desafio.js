//Objetivo: qual o valor que ele vai cobrar pela e quantas horas quer se dedicar ao projeto
  // valor da hora multiplicado por horas trabalhadas

var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");

var spanResultado = document.querySelector("#resposta");


function calcular() {
    console.log("Valor da Hora", inputValorHora.value);
    console.log("Horas de Projeto", inputHorasProjeto.value);

    console.log("Resultado", spanResultado);

    var calcularValorProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber);
    console.log("Resultado final", calcularValorProjeto);

    spanResultado.textContent = "R$" + calcularValorProjeto; 
}