
//cria um array onde vai ser armazenada a lista
var lista = ["Minha", "lista", "de compras"];


//função para pegar um elemento de forma mais simples apesar de desnecessário, não precisa replicar isso no teu projeto
function element(elemento) { return document.querySelector(elemento); }


//função que mostra a lista na tela
function render()
{
    //seleciona a seção onde vão ficar os itens da lista
    const meusItens = element("#meusItens");

    /* limpa a seção antes de renderizar tudo de volta.
    para que a lista não seja mostrada repetidamente */
    meusItens.innerHTML = "";

    //percorre a lista passando o conteúdo e o numero da posição do array
    lista.forEach((nomeDoItem, pos) => {

        //cria as tags
        const linha = document.createElement("div");
        const check = document.createElement("input");
        const div = document.createElement("div");
        const label = document.createElement("label");
        const btnExcluir = document.createElement("button");

        //adiciona os atributos das tags
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", pos);

        linha.setAttribute("class", "linha");
        linha.setAttribute("id", "linha" + check.id);

        //adiciona um disparador de evento, para quando o usuário clicar, ele alterar o estilo da linha
        check.addEventListener("change", () => { checked(linha.id, check.checked) });
        
        div.setAttribute("class", "label");

        label.setAttribute("for", check.id);
        label.innerHTML = nomeDoItem;//põe o nome do item dentro do label

        //põe o ícone de excluir no botão de excluir
        btnExcluir.innerHTML = "<ion-icon name='close-outline'></ion-icon>"; //adiciona o ícone de excluir no botão
        
        btnExcluir.setAttribute("class", "btnExcluir");

        //adiciona um disparador de evento, para quando o usuário clicar, ele apagar o item
        btnExcluir.addEventListener("click", () => { apagar(check.id) });

        //organiza as tags filhas dentro das devidas tags mães
        linha.appendChild(check);//põe a checkbox dentro da linha
        div.appendChild(label);//põe a label dentro da div
        linha.appendChild(div);//põe a div dentro da linha
        linha.appendChild(btnExcluir);//põe o botão de excluir dentro da linha
        
        meusItens.appendChild(linha);//põe a linha com todos os elementos dela dentro da seção
    });
}

//função que vai alterar a linha quando ela for marcada
function checked(id, state)
{
    let linha = element("#"+id);

    if(state)
    {
        linha.setAttribute("class", "linha-checked");
    } else
    {
        linha.setAttribute("class", "linha");
    }
}


//função que adiciona o item na lista
function addNaLista()
{
    //pega o valor digitado pelo usuário
    const item = element("#nomeDoItem").value;
    
    if(item != "")
    {
        /* caso a caixa de texto não estiver vazia,
        ele adiciona o item no fim da lista */
        lista.push(item);
        
        //esvazia a caixa de texto para que o próximo item possa ser adicionado
        element("#nomeDoItem").value = "";

        //atualiza a seção para mostrar o novo item no site
        render();
    } else
    {
        /* caso a caixa de texto esteja vazia,
        ele emite um alerta para que o usuário a preencha */
        alert("Digite um item para ser adicionado!!!");
    }
}


//função que apaga um item da lista
function apagar(id)
{
    //cria uma lista auxiliar
    let auxLista = [];

    //adiciona na auxiliar todos os itens da lista, menos o item a ser excluído
    lista.forEach((nomeDoItem, pos) => {
        if(pos != id && nomeDoItem != "")
        {
            auxLista.push(nomeDoItem);
        }
    });

    //passa a lista auxiliar para a lista principal
    lista = auxLista;
    
    //atualiza a seção
    render();
}


//mostra a lista logo de cara, para caso tiver algo já adicionado, já ser visualizado
render();

//cria um disparador de evento, para quando clicar no botão, ele ativar a função de adicionar na lista
element("#btnAdd").addEventListener("click", addNaLista);