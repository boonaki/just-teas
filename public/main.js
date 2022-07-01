// let black = document.querySelector('#black')
// let green = document.querySelector('#green')
// let wulong = document.querySelector('#wulong')
// let white = document.querySelector('#white')
// let blends = document.querySelector('#blends')


let count = 1000

let teaContainers = document.getElementsByClassName('teaContainer')

//RANDOM BACKGROUND COLOR
const bgColors = ['#f3caca' , '#c4e5d4', '#9fd0d5', '#bda259', '#cf895a']

for(let i = 0; i < teaContainers.length; i++){
    console.log(teaContainers[i], Math.random() * 5)
    teaContainers[i].style.background = `${bgColors[Math.floor(Math.random() * 4)]}`
}

// teaContainers.forEach((container) => {
//     container.style.background = `${bgColors[Math.random() * 5]}`
// })

// BACK BUTTON 
document.querySelector('#buttonBack').addEventListener('click', _ => {
    let curr = teaContainers[count % teaContainers.length]
    let next = teaContainers[(count+1) % teaContainers.length]
    let newPrev = teaContainers[(count - 2) % teaContainers.length]
    let prev = teaContainers[(count-1) % teaContainers.length]
    newPrev.classList.remove('hidden')
    newPrev.classList.add('oldPrevPlus')
    setTimeout(() => {
        newPrev.classList.remove('oldPrevPlus')
        newPrev.classList.add('prev')
    })

    prev.classList.remove('prev')
    prev.classList.add('current')
    
    curr.classList.add('next')
    curr.classList.remove('current')

    next.classList.remove('next') //removes next styling
    next.classList.add('newNextPlus')
    setTimeout(() => {
        next.classList.remove('newNextPlus')
        next.classList.add('hidden')
    }, 500) 

    count--
})

// NEXT BUTTON
document.querySelector('#buttonNext').addEventListener('click', _ => {
    let curr = teaContainers[count % teaContainers.length]
    let next = teaContainers[(count+1) % teaContainers.length]
    let newNext = teaContainers[(count + 2) % teaContainers.length]
    let prev = teaContainers[(count-1) % teaContainers.length]
    //click next, remove hidden from new next
    //give class that moves it
    //
    newNext.classList.remove('hidden')
    newNext.classList.add('newNextPlus')
    setTimeout(() => {
        newNext.classList.remove('newNextPlus')
        newNext.classList.add('next')
    })
    
    next.classList.remove('next') //removes next styling
    next.classList.add('current') //add current styling

    curr.classList.add('prev')
    curr.classList.remove('current')

    
    prev.classList.remove('prev')
    prev.classList.add('oldPrevPlus')
    setTimeout(() => {
        prev.classList.remove('oldPrevPlus')
        prev.classList.add('hidden')
    }, 500)
    
    count++
})

getCurrentSlide()
getNextSlide()
getPrevSlide()
function getCurrentSlide(){
    let current = teaContainers[count % teaContainers.length]
    current.classList.remove('hidden')
    current.classList.add('current')
}

function getNextSlide(){
    let next = teaContainers[(count + 1) % teaContainers.length]
    next.classList.remove('hidden')
    next.classList.add('next')  
    
}

function getPrevSlide(){
    let prev = teaContainers[(count - 1) % teaContainers.length]
    prev.classList.remove('hidden')
    prev.classList.add('prev') 
}