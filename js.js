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