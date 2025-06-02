const toggleButton = document.querySelector('.nav-toggle-button');
const dropDown = document.querySelector('.dropdown-menu');
const toggleButtonIcon = document.querySelector('.nav-toggle-button i');

// The below allows us to close navBars on phones when we click somewhere outside the dropdown
const mainPart = document.getElementById('mainPart');
const topPart = document.getElementById('topPart');
const bottomPart = document.getElementById('bottomPart');


toggleButton.onclick = () => {
       

    dropDown.classList.toggle('close');

    let isClose = dropDown.classList.contains('close');
    toggleButtonIcon.classList.remove(isClose ? 'fa-xmark' : 'fa-bars');
    toggleButtonIcon.classList.add(isClose ? 'fa-bars' : 'fa-xmark');

}


mainPart.addEventListener('click', () => {
    if (! dropDown.classList.contains('close')) {
        dropDown.classList.add('close');
        toggleButtonIcon.classList.remove('fa-xmark');
        toggleButtonIcon.classList.add('fa-bars');
    }
});
topPart.addEventListener('click', () => {
    if (! dropDown.classList.contains('close')) {
        dropDown.classList.add('close');
        toggleButtonIcon.classList.remove('fa-xmark');
        toggleButtonIcon.classList.add('fa-bars');
    }
});
bottomPart.addEventListener('click', () => {
    if (! dropDown.classList.contains('close')) {
        dropDown.classList.add('close');
        toggleButtonIcon.classList.remove('fa-xmark');
        toggleButtonIcon.classList.add('fa-bars');
    }
});

