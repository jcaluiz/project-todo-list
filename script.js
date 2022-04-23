function caixaDeTextoNaLista() {
  let button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', function () {
    let createList = document.createElement('li');
    let ol = document.querySelector('#lista-tarefas');
    let input = document.querySelector('#texto-tarefa');
    ol.appendChild(createList);
    createList.innerText = input.value;
    input.value = '';
    createList.addEventListener('click', function () {
      createList.classList.add('back-color')
    })
  })

}

caixaDeTextoNaLista();
