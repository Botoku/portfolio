let toggle = document.querySelector('.toggle')
let topbar = document.querySelector('.topbar')

let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')
let themeSwitch = document.querySelector('.themeSwitch')
let body = document.querySelector('body')
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    topbar.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
})


const toggleMenu = () =>{
    navigation.classList.remove('active')
    main.classList.remove('active')
}


document.querySelectorAll('.navigation li').forEach(link => {


    link.addEventListener('click', ()=>{
      toggleMenu()
    })
})

themeSwitch.addEventListener('click', ()=>{
    body.classList.toggle('dark')
})