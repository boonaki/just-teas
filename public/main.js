// let black = document.querySelector('#black')
// let green = document.querySelector('#green')
// let wulong = document.querySelector('#wulong')
// let white = document.querySelector('#white')
// let blends = document.querySelector('#blends')


let teaCount = 1000

let teaConts = document.getElementsByClassName('teaContainer')
document.querySelector('#buttonBack').addEventListener('click', _ => {
    let curr = teaConts[teaCount % teaConts.length]
    let next = teaConts[(teaCount+1) % teaConts.length]
    let newPrev = teaConts[(teaCount - 2) % teaConts.length]
    let prev = teaConts[(teaCount-1) % teaConts.length]
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

    teaCount--
})

document.querySelector('#buttonNext').addEventListener('click', _ => {
    let curr = teaConts[teaCount % teaConts.length]
    let next = teaConts[(teaCount+1) % teaConts.length]
    let newNext = teaConts[(teaCount + 2) % teaConts.length]
    let prev = teaConts[(teaCount-1) % teaConts.length]
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
    
    teaCount++
})

getCurrentSlide()
getNextSlide()
getPrevSlide()
function getCurrentSlide(){
    let current = teaConts[teaCount % teaConts.length]
    current.classList.remove('hidden')
    current.classList.add('current')
}

function getNextSlide(){
    let next = teaConts[(teaCount + 1) % teaConts.length]
    next.classList.remove('hidden')
    next.classList.add('next')  
    
}

function getPrevSlide(){
    let prev = teaConts[(teaCount - 1) % teaConts.length]
    prev.classList.remove('hidden')
    prev.classList.add('prev') 
}