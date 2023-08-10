const cardNumberInput = document.getElementById("cardNumber");
const expiryInput = document.getElementById("expiry");
const cvvInput = document.getElementById("cvv");
const payButton = document.getElementById("payButton");

payButton.addEventListener("click", processPayment);

function processPayment() {
    const cardNumber = cardNumberInput.value;
    const expiry = expiryInput.value;
    const cvv = cvvInput.value;

    // Simulação de processamento de pagamento
    // Você precisaria integrar com um serviço de pagamento real aqui

    // Exemplo de sucesso
    // Se a transação for bem-sucedida, você pode redirecionar o usuário para uma página de confirmação
    window.location.href = "confirmacao.html";

    // Exemplo de falha
    // Se a transação falhar, você pode exibir uma mensagem de erro para o usuário
    // alert("Erro ao processar o pagamento. Por favor, tente novamente.");
}
