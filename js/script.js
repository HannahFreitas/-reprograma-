//Objetivo: saber a hora de trabalhada

//Dados necessário
    //Dias trabalhados
    //Horas trabalhadas
    //Salário final (mensal)
var inputValorMes = document.querySelector("#ganho-mes"); 
var inputHorasDia = document.querySelector("#horas-dia"); 

var spanHora = document.querySelector(".secao__rodape .secao__rodape__valor span");
   //Multiplicar os dias trabalhados pelas horas 
   //Divisão do salário final por horas  trabalhadas


function calcularValorHora() {
    //dentro da função, será executado
    console.log("Hello World <3"); //Exibe uma mensagem
    console.log("Valor do mês", inputValorMes.value);
    console.log("Horas do dia", inputHorasDia.value);
    
    console.log("Valor final", spanHora);

    var qtdTotalDeHora = inputHorasDia.valueAsNumber * 22;
    console.log("Valor total de horas", qtdTotalDeHora);


    var valorHora = (inputValorMes.valueAsNumber /qtdTotalDeHora).toFixed(2);
    console.log("Valor hora final", valorHora);

    spanHora.textContent = "R$" + valorHora;
}
