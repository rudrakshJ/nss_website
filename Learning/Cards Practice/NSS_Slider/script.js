// The following script was applicable when there was a single div element of class container1
//For multiple divs of same class container refer to the script1.js


const container = document.querySelector(".container1");
const images = document.querySelectorAll('.images .content');
//Note there is a difference between .images.content and .images .content selector

const imageHolder = document.querySelector('.images');
const buttons = document.querySelectorAll('.button');


let imageIndex = 1;
// let intervalId;
// intervalId is a number returned by the setInterval function and would be used to stop automatic updation


const slideImage = () => {
    if (imageIndex >= images.length) imageIndex = 0;
    if (imageIndex < 0) imageIndex = images.length - 1;

    //Wierd logic:
    //imageIndex = images.length === imageIndex ? 0 : imageIndex<0 ? images.length - 1 : imageIndex;
    //First checks is image.length === image index:
        //If true then sets imageIndex to 0
        //If false then:
            //Is imageIndex negative:
                //If true then sets imageIndex to the last image.
                // If false then sets it to imageIndex.

    //Below we can see the use of template literals:
    imageHolder.style.transform = `translate(-${imageIndex*100}%)`;
};

//eventObject is generated when button would be clicked and passed here
//It would allow us to do button related manipulation.
const updateClick = (eventObject) => {
    //clearInterval(intervalId);
    //clearInterval would stop the repeated action i.e. autoSlide identified by intervalId
    const btn = eventObject.currentTarget;
    //Important : eventObject.currentTarget vs eventObject.target
    /* eventObject.target:
        eventObject.target refers to the actual element that triggered the event
        (i.e., the element where the event originated).
        If you click on a <span> inside a <button>, eventObject.target will be the <span>.
        Use when you want to know exactly which element was clicked, even if it is nested
        inside another element.


        eventObject.currentTarget:
        eventObject.currentTarget refers to the element to which the event listener is attached.
        If you add a click listener to a <button>, eventObject.currentTarget will always be that
        <button>, no matter where inside it you click.
        Use when you want to always refer to the element with the event listener,
        regardless of where the click happened inside it

    */

    if(btn.classList.contains('next') && btn.classList.contains('button')) {
        imageIndex++;
    }
    if(btn.classList.contains('prev') && btn.classList.contains('button')){
        imageIndex--;
    }
    //imageIndex += eventObject.target.classList.contains('next') ? 1 : -1 ;
    //It finds the updated image index
    slideImage(); //No need to pass imageIndex here since we are updating it globally
    //After the index update, slideImage goes to the new image given by imageIndex.

    // autoSlide();
    //Finally we restart the autoslide
};

// const autoSlide = () => {
//     // Start the slideshow by calling slideImage() every 2 seconds
//     intervalId = setInterval(() => slideImage(++imageIndex), 2000);
//     // setInterval is a function which calls the passed function every 2000ms.
//     //Note: The first argument must be a function.
//     //Hence, we make a shorthand arrow function that calls slideImage(++imageIndex)
//     //We can't directly pass slideImage(++imageIndex) as first argument
//     // bcs it will not be function rather it is replaced by
//     //an undefined value returned by slideImage() function
// };
// // Call autoSlide function on page load
// autoSlide();

buttons.forEach((b) => b.addEventListener('click', updateClick));
//forEach() allows us to do certain action for each element of array on which it is called i.e. buttons here
//b is like a loop variable just like we have one in for loop in python.
//When button is clicked, javascript automatically creates event object and passes it as first
//argument of updateClick
//Observe that we above write updateClick can't we write updateClick() --->>> NNOOOOOO!!
//Reason is that if we write as updateClick() it will be run as a function call right away
//And would get replaced by its return value.
//On the other handwriting updateClick alone is not a function call but a function itself


// //Now we want to stop auto slide when mouse hovers over our frame and restart it when mouse is removed
// container.addEventListener('mouseover', ()=>clearInterval(intervalId));
// //The reason for using arrow is again bcs we don't want a function call to be passed as argument
// //Rather we want function therefore arrow function is used to write inplace function in short manner
//
// container.addEventListener('mouseout', autoSlide);
