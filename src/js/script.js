const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {

    ul.innerHTML = '';    

    listaProdutos.forEach((produtos) => {
        const li = document.createElement('li');        
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        // Adicionando dados do produto aos elementos
        img.src = produtos.img;
        img.alt = produtos.nome;
        h3.innerText = produtos.nome;
        p.innerText = produtos.preco;
        span.innerText = produtos.secao;        

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        // Adicionando li ao HTML
        ul.appendChild(li);
    });
}
montarListaProdutos(produtos)

// Selecionando botao em nosso HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
const buscarPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
const input = document.querySelector('.campoBuscaPorNome');
const preco = document.querySelector('p');
const precoTotal = document.getElementById('precoTotal')



function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produtos) => {
        return produtos.secao === 'Hortifruti';
    });
    
    montarListaProdutos(listaHortifruti);
    precoProdutos(listaHortifruti)      
}

function mostrarTodos(){
    precoProdutos(produtos)
     return montarListaProdutos(produtos);
        
}

function mostrarPorNome(){
    let texto = input.value.toLowerCase();
    const inputName = produtos.filter((produtos) => {
        return produtos.nome.toLowerCase() === texto;
    });

    montarListaProdutos(inputName)
    precoProdutos(inputName)

}

function precoProdutos(produtos){

    precoTotal.innerText = ""
    
    const valorTotal = produtos.reduce((acc, {preco}) => acc + preco, 0)
    precoTotal.innerText = valorTotal
    
}
precoProdutos(produtos)

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);
botaoMostrarTodos.addEventListener('click', mostrarTodos);
buscarPorNome.addEventListener('click', mostrarPorNome);