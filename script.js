// Sistema Web de Chamados Acadêmicos
// Projeto acadêmico para estudos em HTML, CSS e JavaScript

let contadorChamados = 1;
const chamados = [];

const formChamado = document.getElementById("formChamado");
const listaChamados = document.getElementById("listaChamados");

formChamado.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const matricula = document.getElementById("matricula").value;
  const curso = document.getElementById("curso").value;
  const assunto = document.getElementById("assunto").value;
  const descricao = document.getElementById("descricao").value;

  const chamado = {
    id: `CH-${String(contadorChamados).padStart(3, "0")}`,
    nome: nome,
    matricula: matricula,
    curso: curso,
    assunto: assunto,
    descricao: descricao,
    status: "Aberto"
  };

  chamados.push(chamado);
  contadorChamados++;

  formChamado.reset();
  exibirChamados();
});

function exibirChamados() {
  listaChamados.innerHTML = "";

  if (chamados.length === 0) {
    listaChamados.innerHTML = '<p class="mensagem-vazia">Nenhum chamado registrado até o momento.</p>';
    return;
  }

  chamados.forEach(function(chamado) {
    const divChamado = document.createElement("div");
    divChamado.classList.add("chamado");

    divChamado.innerHTML = `
      <h3>${chamado.id} - ${chamado.assunto}</h3>
      <p><strong>Aluno:</strong> ${chamado.nome}</p>
      <p><strong>Matrícula:</strong> ${chamado.matricula}</p>
      <p><strong>Curso:</strong> ${chamado.curso}</p>
      <p><strong>Descrição:</strong> ${chamado.descricao}</p>
      <span class="status">${chamado.status}</span>
    `;

    listaChamados.appendChild(divChamado);
  });
}
