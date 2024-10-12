// SCRIPT DAS ABAS DE ANAMNESE

function openTab(evt, tabName) {
    // Esconde todas as abas
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove a classe 'active' de todas as abas
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostra a aba atual e adiciona a classe 'active' no botão clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Define a aba padrão como "Principal"
  document.getElementById("principal").style.display = "block";


// SCRIPT DO MODAL PADRÃO

  // Obtém o modal
var modal = document.getElementById("evolucaoModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("abriModalBtn");

// Obtém o <span> que fecha o modal
var span = document.getElementsByClassName("fechar")[0];

// Quando o usuário clicar no botão, o modal é exibido
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), o modal é fechado
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, o modal é fechado
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Botão "Fechar"
document.querySelector('.fechar-btn').addEventListener('click', function() {
  modal.style.display = 'none';
});
