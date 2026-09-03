const citacao = document.getElementById("citacao");
const autor = document.getElementById("autor");
const botao = document.getElementById("botaoCitacao");

const citacoes = [
    {
        texto: "Acredite em você e nunca desista dos seus objetivos.",
        autor: "Autor desconhecido"
    },
    {
        texto: "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
        autor: "Robert Collier"
    },
    {
        texto: "A melhor maneira de prever o futuro é criá-lo.",
        autor: "Peter Drucker"
    },
    {
        texto: "Nunca é tarde para aprender algo novo.",
        autor: "Autor desconhecido"
    },
    {
        texto: "Grandes conquistas começam com pequenos passos.",
        autor: "Autor desconhecido"
    },
    {
        texto: "A persistência é o caminho para alcançar seus sonhos.",
        autor: "Autor desconhecido"
    },
    {
        texto: "Aprender é crescer todos os dias.",
        autor: "Autor desconhecido"
    },
    {
        texto: "Não tenha medo de errar, tenha medo de não tentar.",
        autor: "Autor desconhecido"
    }
];

function buscarCitacao() {
    const numeroAleatorio = Math.floor(Math.random() * citacoes.length);

    const citacaoEscolhida = citacoes[numeroAleatorio];

    citacao.textContent = '"' + citacaoEscolhida.texto + '"';
    autor.textContent = "— " + citacaoEscolhida.autor;
}

botao.addEventListener("click", buscarCitacao);

// Mostra uma citação assim que abrir o site
buscarCitacao();