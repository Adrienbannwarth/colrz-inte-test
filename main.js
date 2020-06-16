var btnBurger = document.querySelector('.btn-burger');
var containerMenu = document.querySelector('.container-menu');
var body = document.querySelector('body');
var btnLoop = document.querySelector('.img-loop')
var searchBar = document.querySelector('.search-bar')

btnBurger.addEventListener('click', function (e) {
  containerMenu.classList.toggle("open")
  body.classList.toggle("no-scroll")
  btnBurger.classList.toggle("is-cross")
});

btnLoop.addEventListener('click', function (e) {
  searchBar.classList.toggle("search-is-open")
});


