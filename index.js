

const Header = document.querySelector('.header')
const langDiv = document.querySelector('.switch__lang-div')
const lang = document.querySelector('.lang')
const langDivFooter = document.querySelector('.switch__lang-div-footer')
const langFooter = document.querySelector('.lang-footer')
let switching = false

// switch languages
function switchLang() {
    switching = !switching

    if (switching) {
        lang.textContent = 'Eng'
        langDiv.textContent = 'ქარ'
    } else {
        lang.textContent = 'ქარ'
        langDiv.textContent = 'Eng'
    }
}
langDiv.addEventListener('click', switchLang)

let switchingLangFooter = false

function switchLangFooter() {
    switchingLangFooter = !switchingLangFooter

    if (switchingLangFooter) {
        langFooter.textContent = 'Eng'
        langDivFooter.textContent = 'ქარ'
    } else {
        langFooter.textContent = 'ქარ'
        langDivFooter.textContent = 'Eng'
    }
}

langDivFooter.addEventListener('click', switchLangFooter)

// activate burger bar
const burger = document.querySelector('.burger')
const burgerBar = document.querySelector('.burger-bar')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active')
    if(burger.classList.contains('burger-active')){
        burgerBar.classList.add('burger-bar-active')
        Header.classList.add('switch-header-bg')
    }else{
        Header.classList.remove('switch-header-bg')
        burgerBar.classList.remove('burger-bar-active')
    }
})


// breakpoint 
function myFunction(x) {
    if (x.matches) { 
        burgerBar.classList.remove('burger-bar-active')
        burger.classList.remove('burger-active')
        Header.classList.remove('switch-header-bg')
    } 
  }
  
  var x = window.matchMedia("(min-width: 975px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });




// dropdown logic
const burgerBarDropdown = document.querySelectorAll('.dropdown-bar')
const dropdownCursorPointer = document.querySelectorAll('.dropdown-title')
const burgerArrowIcon = document.querySelectorAll('.dropdown-icon')


for(let i=0; i < dropdownCursorPointer.length; i++){
      dropdownCursorPointer[i].addEventListener('click', () => {
        for(let j=0; j < dropdownCursorPointer.length; j++){
            if (i !== j) {
                burgerBarDropdown[j].classList.remove('activate-dropdown-width');
                burgerArrowIcon[j].classList.remove('dropdown-arrow-icon-reverse');
              }
        }
        burgerBarDropdown[i].classList.toggle('activate-dropdown-width')
        burgerArrowIcon[i].classList.toggle('dropdown-arrow-icon-reverse')
      })  
}