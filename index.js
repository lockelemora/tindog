// Remember to import the data and Dog class!
import dogsData from './data.js'
import Dog from './Dog.js'

//Variables
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
let isWaiting = false

//Event listeners
document.getElementById("reject-button").addEventListener("click", reject)
document.getElementById("accept-button").addEventListener("click", accept)





function reject() {
    if (!isWaiting) {
        currentDogIndex += 1
        currentDog = new Dog(dogsData[currentDogIndex])                
        currentDog.setMatchStatus(false)
        isWaiting = true
        renderStamp()
        if (currentDogIndex < dogsData.length) {
            setTimeout(() => {
                render()    
            }, 1000)        
        } else {
            setTimeout(() => {
                document.getElementById("main-container").innerHTML = `<div class="end-message">No more dogs availabe</div>`
            }, 1000)      
        }
        setTimeout(() => {
            isWaiting = false
        }, 1000)
    }
}

function accept() {
    if (!isWaiting) {
        currentDogIndex += 1
        currentDog = new Dog(dogsData[currentDogIndex])                
        currentDog.setMatchStatus(true)
        isWaiting = true
        renderStamp()
        if (currentDogIndex < dogsData.length) {
            setTimeout(() => {
                render()    
            }, 1000)        
        } else {
            setTimeout(() => {
                document.getElementById("main-container").innerHTML = `<div class="end-message">No more dogs availabe</div>`
            }, 1000)      
        }
        setTimeout(() => {
            isWaiting = false
        }, 1000)
    }
}

function renderStamp() {
    document.getElementById("stamp").innerHTML = currentDog.getStampHtml()
    setTimeout(() => {
        document.getElementById("stamp").innerHTML = ''
    }, 1000)
}

function render() {
    document.getElementById("content").innerHTML = currentDog.getDogHtml()
}

render()