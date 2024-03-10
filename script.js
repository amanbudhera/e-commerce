// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.querySelector('.navbar')
const clos = document.querySelector('.close')

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if (clos){
    clos.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}