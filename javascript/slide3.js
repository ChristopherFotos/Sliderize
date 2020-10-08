let slider = new Slider(
    document.getElementsByClassName('sliderize')[0],
    ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'],
    {
    forwardButton: document.getElementsByClassName('for')[0],
    backButton: document.getElementsByClassName('back')[0],
    autoSlide: 4000
    }
)