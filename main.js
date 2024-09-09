function pesquisar() {
    // Seleciona o elemento da página onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados");

    // Captura o valor digitado pelo usuário no campo de pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Verifica se o campo de pesquisa está vazio.
    if (!campoPesquisa) {
        // Exibe uma mensagem informando que a busca está vazia.
        section.innerHTML = "<div class='container'><p class='mensagem-busca'>Busca vazia, digite o nome da fruta!<p></div>";
        return; // Encerra a função, pois não há o que pesquisar.
    }

    // Converte o texto de pesquisa para letras minúsculas para evitar problemas de case sensitive.
    campoPesquisa = campoPesquisa.toLowerCase();

    // Variáveis para armazenar o resultado final da pesquisa e informações temporárias sobre a fruta.
    let resultado = "";
    let nome = "";
    let beneficios = "";

    // Loop que percorre todas as frutas disponíveis no array 'frutas'.
    for (let fruta of frutas) {
        // Converte o nome, benefícios e tags da fruta para letras minúsculas.
        nome = fruta.nome.toLowerCase();
        beneficios = fruta.beneficios.toLowerCase();
        tags = fruta.tags.toLowerCase();

        // Verifica se o nome, benefícios ou tags da fruta contêm o texto digitado pelo usuário.
        if (nome.includes(campoPesquisa) || beneficios.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se houver uma correspondência, adiciona o resultado formatado em HTML à variável 'resultado'.
            resultado += `
            <div class="item-resultado">
                <img src="${fruta.imagem}" alt="${fruta.nome}" class="imagem-fruta">
                <h2>
                    <a href="#">${fruta.nome}</a>
                </h2>
                <p class="descriao-meta">
                    ${fruta.beneficios}
                </p>
                <a href="${fruta.link}" target="_blank">mais informações!</a>
            </div>
            `;
        }
    }

    // Verifica se nenhum resultado foi encontrado.
    if (!resultado) {
        // Caso não haja correspondências, exibe uma mensagem informando que a busca não encontrou resultados.
        resultado = "<div class='container'><p class='mensagem-busca'>Informação não confere<p></div>";
    }

    // Atualiza o conteúdo da seção de resultados com o conteúdo armazenado na variável 'resultado'.
    section.innerHTML = resultado;
}
