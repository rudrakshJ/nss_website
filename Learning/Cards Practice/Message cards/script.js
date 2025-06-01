const button = document.getElementById('content-control');
const hiddenOnes = document.querySelectorAll('.hidden');

button.addEventListener('click', (eventObj) => {
    if(eventObj.target.textContent === 'Read More'){
        hiddenOnes.forEach((i)=>{
            i.classList.remove('hidden');
            eventObj.target.textContent = 'Read Less';
        })
    }else{
        hiddenOnes.forEach((i)=>{
            i.classList.add('hidden');
            eventObj.target.textContent = 'Read More';
        })
    }
})