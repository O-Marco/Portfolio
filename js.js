/* --- LÓGICA DO BOTÃO VOLTAR AO TOPO --- */
/* --- LÓGICA DO BOTÃO VOLTAR AO TOPO --- */
/* --- LÓGICA DO BOTÃO VOLTAR AO TOPO --- */

const backToTopButton = document.getElementById("backToTop");

// Mostra o botão quando o utilizador desce 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
        backToTopButton.style.animation = "fadeIn 0.3s";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Ao clicar, sobe suavemente com um mini delay
// Ao clicar, sobe suavemente com um mini delay
// Ao clicar, sobe suavemente com um mini delay

backToTopButton.addEventListener("click", function() {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 200); // Mini delay de 200ms
});


const container = document.getElementById('skillsContainer');
container.innerHTML += container.innerHTML; // Duplica os cards automaticamente

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Seleciona todas as seções para animar
document.querySelectorAll('section').forEach((section) => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Contato
// Contato
// Contato

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const btn = document.getElementById('btnEnviar');
    const responseTerminal = document.getElementById('terminalResponse');
    
    // 1. Feedback visual no botão
    btn.innerText = "Sending...";
    btn.disabled = true;

    // Simulando um envio de API (2 segundos)
    setTimeout(() => {
        // 2. Limpa o formulário
        this.reset();

        // 3. Restaura o botão
        btn.innerText = "Message Sent!";
        btn.style.backgroundColor = "#2ecc71"; // Muda para verde se quiser

        // 4. Mostra a mensagem no terminal com efeito
        responseTerminal.style.display = "block";
        responseTerminal.style.color = "#00ff00"; // Verde terminal
        
        // Opcional: Voltar o botão ao normal após 3 segundos
        setTimeout(() => {
            btn.innerText = "Send Message";
            btn.disabled = false;
            btn.style.backgroundColor = ""; 
        }, 3000);

    }, 1500);
});