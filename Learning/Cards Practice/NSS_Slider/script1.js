//For indepth explaination of each part refer to script.js file
//This one is just generalization of what was done in script.js to muliple divs of class container

const container = document.querySelectorAll(".container");


container.forEach((element) => {

    /*
    The following way of selection is no longer correct; what we did:
        We treat element as a selector; if it were so then our approach would be right
        However element is rather a DOM ELEMENT not a class name

    const images = document.querySelectorAll(`.${element}.images .${element}.content`);
    const imageHolder = document.querySelector(`.${element}.images`);
    const buttons = document.querySelectorAll(`.${element}.button`);

    Hence correct way of doing it:
    */

    //The correct way:
    const images = element.querySelectorAll('.images .content');
    const imageHolder = element.querySelector('.images');
    const buttons = element.querySelectorAll('.button');

    let imageIndex = 1;

    const slideImage = (i) => {
        imageHolder.style.transform = `translate(-${i*100}%)`;
    };

    const updateClick = (eventObject) => {

        const btn = eventObject.currentTarget;
        //No need to check for button since eventObject is passed when button is pressed.
        //Or since we are listening to button itself
        if(btn.classList.contains('next')) {
            imageIndex++;
        }
        if(btn.classList.contains('prev')){
            imageIndex--;
        }

        //To keep imageIndex in bounds when buttons clicked
        if (imageIndex >= images.length) imageIndex = 0;
        if (imageIndex < 0) imageIndex = images.length - 1;

        //Now slideImage only performs sliding function and no bound checks
        slideImage(imageIndex); //Here we must pass the changed index.

    };

    buttons.forEach((b) => b.addEventListener('click', updateClick));
})




