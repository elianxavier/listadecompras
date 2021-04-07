var lista = ["Minha", "lista", "de compras"];

function element(elemento) { return document.querySelector(elemento); }

function getNomeDoItem()
{
    return element("#nomeDoItem");
}

function addNaLista()
{
    const item = getNomeDoItem().value;

    if(item != "")
    {
        lista.push(item);
        getNomeDoItem().value = "";

        render();
    }
}

function render()
{
    element("#meusItens").innerHTML = "";

    lista.forEach((nomeDoItem, pos) => {
        const linha = document.createElement("div");
        const check = document.createElement("input");
        const div = document.createElement("div");
        const label = document.createElement("label");
        const btnExcluir = document.createElement("button");

        linha.setAttribute("class", "linha");

        check.type = "checkbox";
        check.id = pos;
        
        div.setAttribute("class", "label");

        label.for = check.id;
        label.innerHTML = nomeDoItem;

        btnExcluir.innerHTML = "<ion-icon name='close-outline'></ion-icon>";
        btnExcluir.id = check.id;
        btnExcluir.setAttribute("onclick", "apagar("+ check.id +")");
        btnExcluir.setAttribute("class", "btnExcluir");

        const meusItens = element("#meusItens");

        linha.appendChild(check);
        div.appendChild(label);
        linha.appendChild(div);
        linha.appendChild(btnExcluir);
        element("#meusItens").appendChild(linha);
    });
}

function apagar(id)
{
    console.log("");
    console.log("Parte 1: ");
    console.log(lista);

    lista = lista.filter((item) => {
        return item != lista[id];
    });

    console.log("Parte 2: ");
    console.log(lista);
    render();
}

render();