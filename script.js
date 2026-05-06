document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. Validação e Simulação de Envio do Formulário (Requisito UNINTER) */
    const form = document.getElementById('formContato');
    const displayFeedback = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o reload da página

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('mensagem').value.trim();

        // Regex para validar o formato de e-mail corretamente
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Por favor, informe um endereço de e-mail válido.");
            return;
        }

        if(nome === "" || msg === "") {
            alert("Todos os campos precisam ser preenchidos.");
            return;
        }

        // Simulação de envio com alerta exigido
        alert(`Mensagem enviada com sucesso, ${nome}! Entrarei em contato em breve.`);
        
        // Exibe mensagem na tela para melhor experiência
        displayFeedback.innerHTML = `<p style="color: #00adb5; margin-top: 15px; font-weight: bold;">Formulário enviado com sucesso!</p>`;
        
        // Limpa o formulário
        form.reset();

        // Limpa a mensagem após 5 segundos
        setTimeout(() => {
            displayFeedback.innerHTML = "";
        }, 5000);
    });

    /* 2. Animação de Scroll (Fade-in) */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });
});