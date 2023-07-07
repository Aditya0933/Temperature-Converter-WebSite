console.log('rerr')
let celsiusInput = document.querySelector('.celsius > .icon > input')
let fahrenheitInput = document.querySelector('.fahrenheit > .icon > input')
let kelvinInput = document.querySelector('.kelvin > .icon > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})


/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})


btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})












































// console.log("Hello")
// let CelciusInput = document.querySelector('#container-1 > input')
// let FahrenheitInput = document.querySelector('#container-2 > input')
// let KelvinInput = document.querySelector('#container-3 > input')

// let btn = document.querySelector('.main-converter-btn > button')

// function roundnumber(number) {
//     return Math.round(number*100)/100
// }

// /*Celcius to Fahrenheight and Kelvin */
// CelciusInput.addEventListener('click',function(){
//     let cTemp = parseFloat(CelciusInput.value)
//     let fTemp = (cTemp*(9/5)) + 32
//     let kTemp = cTemp + 273.15

//     FahrenheitInput.value = roundnumber(fTemp)
//     KelvinInput.value = roundnumber(kTemp)
// })

// /*Fahrenheight to Celcius and Kelvin */
// FahrenheitInput.addEventListener('input',function(){
//     let fTemp = parseFloat(FahrenheitInput.value)
//     let cTemp = (fTemp - 32) * (5/9)
//     let kTemp = (fTemp - 32) * (5/9) + 273.15

//     CelciusInput.value = roundnumber(cTemp)
//     KelvinInput.value = roundnumber(kTemp)
// })

// /*Kelvin to Fahrenheight and Celcius */
// KelvinInput.addEventListener('input',function(){
//     let kTemp = parseFloat(KelvinInput.value)
//     let cTemp = kTemp - 273.15
//     let fTemp = (kTemp - 273.15) * (9/5) +32

//     FahrenheitInput.value = roundnumber(fTemp)
//     CelciusInput.value = roundnumber(kTemp)
// })

// /* ALL Clear Button */
// btn.addEventListener('click', () => {
//     console.log("oke")
//     CelciusInput.value = " "
//     FahrenheitInput.value = " "
//     KelvinInput.value = " "
//     console.log("done")
// })

