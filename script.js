document.getElementById("cancelar-ginecologia").addEventListener("click", function() {
    if (confirm("Deseja realmente cancelar? Todas as alterações serão perdidas.")) {
        document.getElementById("form-avaliacao").reset();
    }
});

document.getElementById("salvar-ginecologia").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Avaliação salva com sucesso!");
});
