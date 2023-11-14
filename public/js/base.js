const nome = "João Pedro";
let nome2 = "";
let pessoaDefault = {
    nome: "João Pedro",
    idade: "25",
    trabalho: "Entregador"
}

let nomes = ["João Pedro", "João Paulo", "Pedro Paulo"];

let pessoasListaVazia= [];

let pessoas = [
    {
        nome: "João Pedro",
        idade: "25",
        trabalho: "Entregador"
    },
    {
        nome: "João Paulo",
        idade: "28",
        trabalho: "Engenheiro"
    }
];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS------")
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa( {
    nome: "Felipe",
    idade: "24",
    trabalho: "Agronomo"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa( {
//    nome: "João Pedro",
//    idade: "28",
//    trabalho: "Engenheiro"
//})



//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silçva");

//alterarNome();