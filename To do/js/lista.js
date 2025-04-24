const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const lista = document.getElementById('lista');
const input = document.getElementById('novaTarefa');
const inputBox = document.getElementById('novoInput');

function render() {
  lista.innerHTML = '';
  tarefas.forEach((t, i) => {
    lista.innerHTML += `
      <div class="tarefa">
        <input type="checkbox" ${t.feita ? 'checked' : ''} onchange="toggle(${i})">
        <span class="${t.feita ? 'feita' : ''}">${t.texto}</span>
        <button onclick="del(${i})">🗑️</button>
      </div>`;
  });
}

function add() {
  const txt = input.value.trim();
  if (!txt) return;
  tarefas.push({ texto: txt, feita: false });
  salvar();
  input.value = '';
  inputBox.style.display = 'none';
}

function toggle(i) {
  tarefas[i].feita = !tarefas[i].feita;
  salvar();
}

function del(i) {
  tarefas.splice(i, 1);
  salvar();
}

function salvar() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  render();
}

// Corrigido: renomeado para coincidir com o HTML
function showInput() {
  inputBox.style.display = 'flex';
  input.focus();
}

render();
