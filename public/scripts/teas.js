// let black = document.querySelector('#black')
// let green = document.querySelector('#green')
// let wulong = document.querySelector('#wulong')
// let white = document.querySelector('#white')
// let blends = document.querySelector('#blends')

let count = 1000
let pageCount = 1

let teaContainers = document.getElementsByClassName('teaContainer')

// RANDOM BACKGROUND COLOR
// RED GREEN BLUE GOLD BROWNISH
// const bgColors = ['rgb(243 202 202)' , 'rgb(196 229 212)', 'rgb(159 208 213)', 'rgb(189 162 89)', 'rgb(186 117 71 )']

// for(let i = 0; i < teaContainers.length; i++){
//     console.log(teaContainers[i], Math.random() * 5)
//     teaContainers[i].style.background = `${bgColors[Math.floor(Math.random() * 4)]}`
// }

// BACK BUTTON 
document.querySelector('#buttonBack').addEventListener('click', _ => {
    let current = teaContainers[count % teaContainers.length]
    let next = teaContainers[(count+1) % teaContainers.length]
    let prev = teaContainers[(count-1) % teaContainers.length]
    current.classList.remove('current')
    current.classList.add('next')
    current.classList.add('hidden')
    
    prev.classList.remove('previous')
    prev.classList.remove('hidden')
    prev.classList.add('current')

    next.classList.remove('next')
    next.classList.add('hidden')

    let newPrev = teaContainers[(count - 2) % teaContainers.length]
    // newPrev.classList.remove('')
    newPrev.classList.add('prev')

    pageCount--
    if(pageCount === 0){
        pageCount = 7
    }
    document.getElementById('dataCount').innerText = pageCount

    // document.getElementById('dataCount').innerText = teaContainers.indexOf(current)

    /**** OLD ****/
    // let curr = teaContainers[count % teaContainers.length]
    // let next = teaContainers[(count+1) % teaContainers.length]
    // let newPrev = teaContainers[(count - 2) % teaContainers.length]
    // let prev = teaContainers[(count-1) % teaContainers.length]
    // newPrev.classList.remove('hidden')
    // newPrev.classList.add('oldPrev')
    // setTimeout(() => {
    //     newPrev.classList.remove('oldPrev')
    //     newPrev.classList.add('prev')
    // })

    // prev.classList.remove('prev')
    // prev.classList.add('current')
    
    // curr.classList.add('next')
    // curr.classList.remove('current')

    // next.classList.remove('next') //removes next styling
    // next.classList.add('newNext')
    // setTimeout(() => {
    //     next.classList.remove('newNext')
    //     next.classList.add('hidden')
    // }, 500) 

    count--
})

// NEXT BUTTON
document.querySelector('#buttonNext').addEventListener('click', _ => {
    let current = teaContainers[count % teaContainers.length]
    let next = teaContainers[(count+1) % teaContainers.length]
    let prev = teaContainers[(count-1) % teaContainers.length]
    current.classList.remove('current')
    current.classList.add('previous')
    current.classList.add('hidden')
    
    next.classList.remove('next')
    next.classList.remove('hidden')
    next.classList.add('current')
    
    prev.classList.remove('previous')
    prev.classList.add('hidden')
    
    let newNext = teaContainers[(count + 2) % teaContainers.length]
    // newNext.classList.remove('hidden')
    newNext.classList.add('next')
    
    pageCount++
    if(pageCount > teaContainers.length + 1){
        pageCount = 1
    }
    document.getElementById('dataCount').innerText = pageCount
    
    
    /**** OLD ****/
    // //click next, remove hidden from new next
    // //give class that moves it
    // //
    // setTimeout(() => {
    //     newNext.classList.remove('newNext')
    //     newNext.classList.add('next')
    // })
    
    // next.classList.remove('next') //removes next styling
    // next.classList.add('current') //add current styling

    // curr.classList.add('prev')
    // curr.classList.remove('current')

    
    // prev.classList.remove('prev')
    // prev.classList.add('oldPrev')
    // setTimeout(() => {
    //     prev.classList.remove('oldPrev')
    //     prev.classList.add('hidden')
    // }, 500)
    
    count++
})

// ON PAGE LOAD, FIND SECS TO DISPLAY
getCurrentSlide()
// getNextSlide()
// getPrevSlide()
function getCurrentSlide(){
    let current = teaContainers[count % teaContainers.length]
    document.getElementById('dataCount').innerText = pageCount
    current.classList.remove('hidden')
    current.classList.add('current')
}

// function getNextSlide(){
//     let next = teaContainers[(count + 1) % teaContainers.length]
//     next.classList.remove('hidden')
//     next.classList.add('next')  
    
// }

// function getPrevSlide(){
//     let prev = teaContainers[(count - 1) % teaContainers.length]
//     prev.classList.remove('hidden')
//     prev.classList.add('prev') 
// }