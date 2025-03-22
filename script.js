

let random = Math.floor((Math.random()*8)+1)
let sentence = "Your result is "
let cont = document.querySelector(".container")
function flipCoin(random){
    let html = ` <div class=".container"><p></p></div>`
   
     if(random >= 5){
        document.querySelector(".container").innerHTML = `<p>${sentence}Heads</p>`
     }else if(random <= 5){
        document.querySelector(".container").innerHTML = `<p>${sentence}Tails</p>`
     }
}
flipCoin(random)
     