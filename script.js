function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

function scrollActive(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const headerHeight = 70;
    const sectionPosition = section.offsetTop - headerHeight;

    window.scrollTo({ top: sectionPosition, behavior: "smooth" })

    const menu = document.getElementById('navMenu');
    menu.classList.remove('active')
}

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('doadorForm');

    const formData = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        nomeA: form.nomeA.value,
        idade: form.idade.value,
        especie: form.especie.value,
        caracteristicas: form.caracteristicas.value,
        dataCadastro: new Date().toLocaleDateString()
    }

    let doadores = JSON.parse(localStorage.getItem('doadores')) || [];
    doadores.push(formData);
    localStorage.setItem('doadores', JSON.stringify(doadores));

    const successMessage = document.getElementById('sucessMessage');
    successMessage.classList.add('show');
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    form.reset(); // Limpa o formulário depois do envio
}

function exibirDoadores() {
    const doadores = JSON.parse(localStorage.getItem('doadores')) || [];
    const tabelaContainer = document.getElementById('tabelaDoadores');

    if (!tabelaContainer) return;

    if (doadores.length === 0) {
        tabelaContainer.innerHTML = '<p>Nenhum animal para adoção encontrado</p>'
    }
}
