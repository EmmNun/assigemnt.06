// Exibe mensagem no console
console.log("CSS + JavaScript funcionando!");

// Exibe alerta ao carregar a página
window.onload = function () {
    alert("Welcome to Assignment 6 with JavaScript!");
};

// Alterna entre modo claro e escuro
function changeTheme() {
    console.log("Toggling theme...");
    document.body.classList.toggle("dark-mode");
}
