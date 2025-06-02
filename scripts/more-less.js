const moreLessTxt= document.querySelectorAll('.more-less-text');



moreLessTxt.forEach((txt)=>{

    const button = txt.querySelector('.more-less');
    const hiddenText = txt.querySelector('.more');
    const dots = txt.querySelector('.dots');

    button.addEventListener('click',()=>{
        if(button.textContent === 'Read More'){
            dots.style.display = 'none';
            hiddenText.style.display = 'inline';
            button.textContent = 'Read Less';
        }else{
            dots.style.display = 'inline';
            hiddenText.style.display = 'none';
            button.textContent = 'Read More';
        }

    });

})



