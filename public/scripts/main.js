


function findTeaDesc(id){
    let expandeds = document.getElementsByClassName('basictea')
    for(let i = 0; i < expandeds.length ;i++){
        expandeds[i].classList.add('hidden')
    }
    document.getElementById(`tea-${id}`).classList.remove('hidden')
}