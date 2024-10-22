

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(tab.getAttribute('href'));

           //Remove a classe ativa de todas as abas e oculta todos os formulários
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(form => form.style.display = 'none');

         //Adiciona a classe ativa à aba clicada e mostra o formulário correspondente
            tab.classList.add('active');
            target.style.display = 'block';
        });
    });
});
