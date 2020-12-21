const buttonShow = document.getElementById('show-all')
buttonShow.addEventListener('click', showAll.bind(null, buttonShow))

function showAll(button) {
  const extraElements = [...document.getElementsByClassName('extra')];
  button.style.display = 'none';

  extraElements.map((element) => element.classList.toggle('extra'));
}