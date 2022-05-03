function caixaDeTextoNaLista() {
  let button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', function () {
    let createList = document.createElement('li');
    let ol = document.querySelector('#lista-tarefas');
    let input = document.querySelector('#texto-tarefa');
    ol.appendChild(createList);
    createList.innerHTML = input.value;
    input.value = '';
    createList.classList = 'list';
    let list = document.getElementsByClassName('list');

    createList.addEventListener('click', function () {
      if (createList.classList.contains('list'))
        for (let index = 0; index < list.length; index += 1) {
          list[index].classList.remove('back-color')
        }
      if (createList.classList.contains('list')) {
        createList.classList.add('back-color')
      }
    })

    let completed = document.getElementsByClassName('completed');
    createList.addEventListener('dblclick', function () {
      if (createList.classList.contains('completed')) {
        createList.classList.remove('completed');
      } else {
        createList.classList.add('completed');
      }
    })

    let buttonRemove = document.querySelector('#apaga-tudo');
    buttonRemove.addEventListener('click', function () {
      ol.removeChild(createList);
      localStorage.clear();
    })

    let buttonRemoveCompleted = document.querySelector('#remover-finalizados');
    buttonRemoveCompleted.addEventListener('click', function () {
      if (createList.classList.contains('completed')) {
        ol.removeChild(createList);
      }
    })
  })

}
caixaDeTextoNaLista();

let button = document.querySelector('#salvar-tarefas');
let list = document.getElementsByClassName('list');


function armazena() {
  let conta = 1;
  let str = 'completed';
  for (let index = 0; index < list.length; index += 1) {
    localStorage.setItem(index + conta, JSON.stringify(list[index].innerText));
    if (list[index].classList.contains('completed')) {
      conta += 1;
      localStorage.setItem(index + conta, JSON.stringify("completed"));
    }
  }


}

button.addEventListener('click', armazena)

function reloadPageContinue() {
  let arrayList = [];
  for (let index = 1; index <= localStorage.length; index += 1) {
    arrayList.push(JSON.parse(localStorage.getItem(index)));

  }

  for (let index = 0; index < arrayList.length; index += 1) {
    let createLi = document.createElement('li');
    let ol = document.querySelector('#lista-tarefas');
    ol.appendChild(createLi);
    createLi.classList.add('list');
    createLi.innerHTML = arrayList[index];
  }
  let createLi = document.getElementsByClassName('list');

  for (let index = 0; index < createLi.length; index += 1) {
    createLi[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < createLi.length; index2 += 1) {
        if (createLi[index2].classList.contains('back-color')) {
          createLi[index2].classList.remove('back-color')
        }
      }
      if (event.target.classList.contains('list')) {
        event.target.classList.add('back-color')
      }
    })
  }
  for (let index = 0; index < createLi.length; index += 1) {
    createLi[index].addEventListener('dblclick', function (event) {

      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
      } else {
        event.target.classList.add('completed');
      }
    })
  }


}
reloadPageContinue();


function voltaTudo () {
  let array = [];
  let completedLocal = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    array.push(JSON.parse(localStorage.getItem(index + 1)));
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] !== "completed") {
      list[index].innerHTML = JSON.parse(localStorage.getItem(index + 1));
    }
  }
  for(let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === "completed") {
      list[index2].classList.add("completed");
    }
  }

  let ol = document.getElementById('lista-tarefas');
  let buttonRemove = document.querySelector('#apaga-tudo');
  buttonRemove.addEventListener('click', function () {
    for(let index = 0; index < list.length; index += 1) {
      ol.removeChild(list[index]);
      localStorage.clear();

    }
  })

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === "completed") {
      ol.removeChild(list[index]);
      list[index - 1].classList.add("completed")
    }
  }
}
voltaTudo()


// index + conta