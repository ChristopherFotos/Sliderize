let slider   = Array.from(document.getElementsByClassName('sliderize'))[0]
let children = Array.from(slider.children)

let forward = 0

document.addEventListener('click', e=>{

    if(forward < 1200) forward +=302
    if(forward > 1200) forward = 0

    children.forEach(c=>{
        c.style.transform = `translateX(-${forward}px)`
    })
})

setInterval(()=>{
    if(forward < 1200) forward +=302
    if(forward > 1200) forward = 0

    children.forEach(c=>{
        c.style.transform = `translateX(-${forward}px)`
    })
}, 3000)