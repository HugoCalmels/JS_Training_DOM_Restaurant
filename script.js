var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
var random_side = sides[Math.floor(Math.random()*sides.length)]
var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var menuRandom = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget) // getting targer for what tab we click on
    tabContents.forEach(tabContent => { // then making all the tabs disapear
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => { // then making all the tabs disapear
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active') // then only making only the tab we clicked as active
  })
})  



const openMenuButtons = document.querySelectorAll('[data-menu-target]')
const closeMenuButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openMenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = document.querySelector(button.dataset.menuTarget)
    const menuBody = document.getElementById('menu-body')
    const menuMenu = document.getElementById('test')
    menuBody.innerHTML = menuRandom
    menuMenu.innerHTML = menuRandom
    
    openMenu(menu)
    
  })
})

overlay.addEventListener('click', () => {
  const menus = document.querySelectorAll('.menu.active')
  menus.forEach(menu => {
    closeMenu(menu)
  })
})

closeMenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = button.closest('.menu')
    closeMenu(menu)
  })
})

function openMenu(menu) { 
  if (menu == null) return 
  menu.classList.add('active')
  overlay.classList.add('active')
}

function closeMenu(menu) { 
  if (menu == null) return 
  menu.classList.remove('active')
  overlay.classList.remove('active')
}





const boxs = document.querySelectorAll('.grid-item')
let dragged;

for (let box of boxs) {
box.ondragstart = (e) => {
  dragged = box;
  e.dataTransfer.setData('text/plain', box.innerHTML)
  box.classList.add("dragged");
}

box.ondragover = (e) => {
  e.preventDefault();
}

box.ondragenter = () => {
  box.classList.add("dropHover")
}

box.ondragleave = () => {
  box.classList.remove("dropHover")
}

box.ondragend = () => {
  box.classList.remove("dragged")
}

box.ondrop = (e) => {
  dragged.innerHTML = box.innerHTML;
  box.innerHTML = e.dataTransfer.getData("text/plain");
  box.classList.remove("dropHover")
}
}