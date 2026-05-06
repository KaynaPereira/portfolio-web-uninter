// Aguarda todo o HTML da página carregar antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. VALIDAÇÃO E ENVIO DO FORMULÁRIO
       ========================================= */
    const form = document.getElementById('formContato');
    const displayFeedback = document.getElementById('resultado');

    // Escuta o evento de "submit" (clique no botão de enviar)
    form.addEventListener('submit', function(event) {
        
        // Impede o comportamento padrão de recarregar a página [cite: 57]
        event.preventDefault(); 

        // Captura os valores digitados e remove espaços em branco nas pontas (.trim)
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('mensagem').value.trim();

        // Expressão Regular (Regex) para validar se o formato do e-mail é válido [cite: 60]
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verifica se o e-mail atende ao padrão
        if (!emailPattern.test(email)) {
            alert("Por favor, informe um endereço de e-mail válido.");
            return; // Interrompe a execução se o e-mail for inválido
        }

        // Verifica se os campos de nome e mensagem estão vazios [cite: 59]
        if(nome === "" || msg === "") {
            alert("Todos os campos precisam ser preenchidos.");
            return;
        }

        // Simulação de envio com sucesso via Alerta (exigência do professor) [cite: 61, 62]
        alert(`Mensagem enviada com sucesso, ${nome}! Entrarei em contato em breve.`);
        
        // Exibe mensagem de confirmação diretamente na tela do site [cite: 61, 62]
        displayFeedback.innerHTML = `<p style="color: #00adb5; margin-top: 15px; font-weight: bold;">Formulário enviado com sucesso!</p>`;
        
        // Limpa todos os campos do formulário após o envio bem-sucedido [cite: 61]
        form.reset();

        // Remove a mensagem verde da tela após 5 segundos para deixar a tela limpa novamente
        setTimeout(() => {
            displayFeedback.innerHTML = "";
        }, 5000);
    });

    /* =========================================
       2. ANIMAÇÃO DE ROLAGEM (FADE-IN)
       ========================================= */
    // Configurações do observador para disparar a animação quando a seção aparecer na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    // Cria o observador que adiciona a classe 'visivel' aos elementos
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target); // Para de observar após animar uma vez
            }
        });
    }, observerOptions);

    // Aplica o observador a todas as seções que possuem a classe 'fade-in'
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });
});