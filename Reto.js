const btnToggle= document.querySelector('.toggle-btn')

btnToggle.addEventListener("click", function() {
  document.getElementById('menu_lateral').classList.toggle('active')
});
