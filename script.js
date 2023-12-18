function MyProject() {
const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.navbar-links');
// console.log(navButton);
navButton.addEventListener('click', () => {
    navLinks.classList.toggle('navbar-links_open');
})
}
MyProject();



const CreateSlideShow = () => {
    let slides = document.querySelectorAll('.player-card2');

    let button1 = document.querySelector('.control-btn1');
    let button2 = document.querySelector('.control-btn2');

    let intervalID = null;
    let activeIndex = 0;

    const DeactivateSlide = () => {
        for(let slide of slides){
            slides[activeIndex].classList.remove('active');
        }
    }

    const ActivateSlide = () => {
        DeactivateSlide();
        slides[activeIndex].classList.add('active');
    }

    const increaseIndex = () => {
        if(activeIndex < slides.length-1){
            activeIndex++;
        } else{
            activeIndex = 0;
        }
    }

    const decreaseIndex = () => {
        if(activeIndex > 0){
            activeIndex--;
        } else{
            activeIndex = slides.length-1;
        }
    }

    ActivateSlide();

    const switchSlide = () => {
        DeactivateSlide();
        increaseIndex();
        ActivateSlide();
    }

    const switchSlide2 = () => {
        DeactivateSlide();
        decreaseIndex();
        ActivateSlide();
    }

    intervalID = setInterval(switchSlide, 2000);

    button1.addEventListener('click', () => {
        switchSlide2();
    });

    button2.addEventListener('click', () => {
        switchSlide();
    });

    let slideshowContainer = document.querySelector('.page-content2');
    slideshowContainer.addEventListener('mouseover', () => {
        clearInterval(intervalID);
    })

    slideshowContainer.addEventListener('mouseout', () => {
        intervalID = setInterval(switchSlide, 2000);
    })
}

CreateSlideShow();
