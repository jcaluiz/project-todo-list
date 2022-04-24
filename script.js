function caixaDeTextoNaLista() {
  let button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', function () {
    let createList = document.createElement('li');
    let ol = document.querySelector('#lista-tarefas');
    let input = document.querySelector('#texto-tarefa');
    ol.appendChild(createList);
    createList.innerText = input.value;
    input.value = '';
    createList.classList = 'list';
    let list = document.getElementsByClassName('list');
  
    createList.addEventListener('click', function () {
      if(createList.classList.contains('list'))
      for(let index = 0; index < list.length; index += 1){
        list[index].classList.remove('back-color')
      }
      if (createList.classList.contains('list')) {
        createList.classList.add('back-color')
      }
    })
    let completed = document.getElementsByClassName('completed');
    createList.addEventListener('dblclick', function() {
      if (createList.classList.contains('completed')) {
        createList.classList.remove('completed');
      }
      else {
        createList.classList.add('completed');
      }
    })
    let buttonRemove = document.querySelector('#apaga-tudo');
    buttonRemove.addEventListener('click', function() {
      ol.removeChild(createList);
    })
  })

}
caixaDeTextoNaLista();
