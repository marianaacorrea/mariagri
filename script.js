// Aguarda que o documento carregue completamente
document.addEventListener("DOMContentLoaded", function() {

    // Seleção dos elementos do HTML
    const btnCalcular = document.getElementById("btn-calcular");
    const selectTransporte = document.getElementById("transporte");
    const divResultado = document.getElementById("resultado");

    // Adiciona o evento de clique ao botão
    btnCalcular.addEventListener("click", function() {
        const opcaoEscolhida = selectTransporte.value;
        
        // Limpa classes anteriores do resultado
        divResultado.className = "";
        
        // Lógica de resposta baseada na opção selecionada
        if (opcaoEscolhida === "bicicleta") {
            divResultado.innerHTML = "🌱 <strong>Excelente!</strong> A tua pegada é zero. Andar a pé ou de bicicleta é a melhor forma de proteger o planeta.";
            divResultado.classList.add("bom");
        } 
        else if (opcaoEscolhida === "autocarro") {
            divResultado.innerHTML = "🚌 <strong>Bom trabalho!</strong> Dividir o transporte reduz drasticamente as emissões de CO2 por pessoa.";
            divResultado.classList.add("bom");
        } 
        else if (opcaoEscolhida === "eletrico") {
            divResultado.innerHTML = "⚡ <strong>Moderado!</strong> Carros elétricos são melhores que os tradicionais, mas lembra-te que a produção da bateria também tem impacto.";
            divResultado.classList.add("medio");
        } 
        else if (opcaoEscolhida === "carro") {
            divResultado.innerHTML = "⚠️ <strong>Alto impacto!</strong> Carros a combustão emitem muitos gases poluentes. Sempre que puderes, partilha boleias ou usa transportes alternativos.";
            divResultado.classList.add("mau");
        }

        // Torna a div visível suavemente
        divResultado.style.display = "block";
    });
});
