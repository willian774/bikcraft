//Marcar navlink

const navlink = document.querySelectorAll(".header-menu a");

function marcarlink(item) {
  if (
    item.pathname === location.pathname ||
    (item.pathname.includes("bicicletas") &&
      location.pathname.startsWith("/bicicletas"))
  ) {
    item.classList.add("ativo");
  }
}
navlink.forEach(marcarlink);

// Ativar item orçamento parâmetro URL REVISAR 1202

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  if (parametro) {
    // const opcao = document.getElementById(parametro); solucao mais prática, até pq tem ID msm
    const opcao = document.querySelector(`input[value=${parametro}]`); //solucao que eu pensei incialmente
    opcao.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequêntes REVISAR CÓDIGO 1203

const botaoPerguntas = document.querySelectorAll(".perguntas button");

function eventoPerguntas(botao) {
  function mostrarResposta(e) {
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    pergunta.setAttribute(
      "aria-expanded",
      resposta.classList.contains("ativo")
    );
  }
  botao.addEventListener("click", mostrarResposta);
}

botaoPerguntas.forEach(eventoPerguntas);

// Galeria bicicletas

const imagensGaleria = document.querySelectorAll(".bicicleta-imagens img");
const galeria = document.querySelector(".bicicleta-imagens");

function eventoImagens(bicicletas) {
  function trocarImagem(bicicleta) {
    const imagem = bicicleta.currentTarget;
    const media = matchMedia("(min-width:1000px)").matches;
    if (media) {
      galeria.prepend(imagem);
    }
  }
  bicicletas.addEventListener("click", trocarImagem);
}

imagensGaleria.forEach(eventoImagens);
