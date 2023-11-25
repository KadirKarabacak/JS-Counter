'use strict'
const appCounter = document.querySelector('.app_counter')
const decreaseBtn = document.querySelector('.btn--decrease')
const resetBtn = document.querySelector('.btn--reset')
const increaseBtn = document.querySelector('.btn--increase')

decreaseBtn.addEventListener('click', function(){
   appCounter.textContent--
   if(appCounter.textContent <= -1) appCounter.style.color = "rgb(255, 0, 0)"
   if(appCounter.textContent >= 1) appCounter.style.color = "#70e000"
   if(appCounter.textContent == 0) appCounter.style.color = "black"
})

increaseBtn.addEventListener('click', function(){
    appCounter.textContent++
    if(appCounter.textContent <= -1) appCounter.style.color = "rgb(255, 0, 0)"
    if(appCounter.textContent >= 1) appCounter.style.color = "#70e000"
    if(appCounter.textContent == 0) appCounter.style.color = "black"
})

resetBtn.addEventListener('click', function(){
    appCounter.textContent = 0
    appCounter.style.color = "black"
})