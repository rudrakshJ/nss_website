const toggleButton = document.querySelector('.nav-toggle-button');
const dropDown = document.querySelector('.dropdown-menu');
const toggleButtonIcon = document.querySelector('.nav-toggle-button i');

toggleButton.onclick = () => {


    dropDown.classList.toggle('close');

    let isClose = dropDown.classList.contains('close');
    toggleButtonIcon.classList.remove(isClose ? 'fa-xmark' : 'fa-bars');
    toggleButtonIcon.classList.add(isClose ? 'fa-bars' : 'fa-xmark');

}