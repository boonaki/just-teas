function findTeaDesc(id){
    let expandeds = document.getElementsByClassName('basictea')
    for(let i = 0; i < expandeds.length ;i++){
        expandeds[i].classList.add('hidden')
        // expandeds[i].classList.remove('current')
    }
    document.getElementById(`tea-${id}`).classList.remove('hidden')
    // document.getElementById(`tea-${id}`).classList.add('current')
}