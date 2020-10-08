

// allowing them to pass in an element is redundant. There's already a way to do that, it's called writing an element into your HTML. 
// Instead, just let the user specify 'sliderizeChildren', which will make slides out of all the child elements in the container. 

// A setup function that will run on initialization, a teardown function that allows the user to remove the slider from the page and runs 
// some function(s) in the process, and various lifecycle functions 

class Slider {
    constructor(container, pictures, {slideDistance, forwardButton, backButton, autoSlide, setup,} = {}){

        this.forwardButton  = forwardButton
        this.backButton     = backButton
        this.container      = container
        this.pictures       = pictures
        this.offset         = 0
        this.slides         = []
        this.createPhotoContainer()
        this.addButtonListeners()
        
        if(pictures){
            this.addPictures()
        } else {
            
        }

        if(!slideDistance){ 
            this.slideDistance = this.container.getBoundingClientRect().width 
        }

        if(autoSlide){ 
            setInterval(this.slideForward.bind(this), autoSlide) 
        }

        if(setup){ 
            if(typeof setup === 'function'){
                setup()
            }; 
            if(typeof setup === 'array'){
                setup.forEach(f => f())
        }}
 
        window.onresize = () => {
            this.slideDistance = this.container.getBoundingClientRect().width
            this.offset = 0
            this.slides.forEach(s=>{
                s.style.transform = `translateX(-${this.offset}px)`
            })
        }
    }

    createPhotoContainer(){
        this.container.style.display = 'flex'
        this.container.style.overflow = 'hidden'
    }

    addPictures(){
        this.pictures.forEach(p => {
            let img = document.createElement('img')
            img.src = p
            img.classList.add('slider_item')
            this.slides.push(img)
            this.container.appendChild(img)
        })
    }

    slideForward(){
        console.log('sliding')
        if(this.offset < (this.slideDistance * this.slides.length)) {this.offset += this.slideDistance; console.log(this.offset)}
        if(this.offset === (this.slideDistance * this.slides.length)) {this.offset = 0}

        this.slides.forEach(s=>{
            s.style.transform = `translateX(-${this.offset}px)`

        })
    }

    slideBackward(){
        if(this.offset > 0) this.offset -= this.slideDistance
    
        this.slides.forEach(s=>{
            s.style.transform = `translateX(-${this.offset}px)`
        })
    }

    addButtonListeners(){
        console.log('running')
        if(this.forwardButton){
            this.forwardButton.addEventListener('click', e => {
            this.slideForward()
        })}

        if(this.forwardButton){
            this.backButton.addEventListener('click', e => {
            this.slideBackward()
        })}
    }
}
