let modeButtons=document.querySelectorAll('.mode')
let colorB=document.querySelector('#colorBtn')
let rainbowB=document.querySelector('#rainbowBtn')
let erasB=document.querySelector('#eraserBtn')
let slider= document.querySelector('#sizeSlider')
let currentMode='color';
let grid=document.querySelector('.grid-container')
let sliderVal=document.querySelector('#sizeValue')
let colPick=document.querySelector('#colorPicker')
let boxes=[]
let clear=document.querySelector('#clearBtn')

changeGridSize()
colPick.addEventListener('change',()=>{
    let colorVal=colPick.value
    console.log(colorVal)
})
function changeGridSize(){
    grid.innerHTML=''

    for (let i = 0; i <slider.value*slider.value ; i++) {
        let box=document.createElement('div')
        box.classList.add('box');
        box.style.width=`${550/slider.value}px`
        box.style.height=`${550/slider.value}px`
        box.style.margin='0'
        grid.appendChild(box)
        boxes.push(box)
    }
    boxes.forEach(boxx =>{
        boxx.addEventListener('mouseover',()=>{
            if(currentMode=='color'){
                boxx.style.backgroundColor=`${colPick.value}`
            }
            else if(currentMode=='rainbow'){
                let red=Math.floor(Math.random()*256)
                let green=Math.floor(Math.random()*256)
                let blue=Math.floor(Math.random()*256)

                boxx.style.backgroundColor=`rgb(${red},${green},${blue})` 
            }
            else if(currentMode=='eraser'){
                boxx.style.backgroundColor=`white`

            }
        })
    })
}
sliderVal.textContent=`${slider.value}x${slider.value}`

slider.addEventListener('mousemove',()=>{
    sliderVal.textContent=`${slider.value}x${slider.value}`
})
slider.addEventListener('mouseleave',()=>{
    changeGridSize()
})

modeButtons.forEach(mode =>{
   mode.addEventListener('click',()=>{
    if(mode.id=='colorBtn'){
        colorB.classList.add('active')
        rainbowB.classList.remove('active')
        erasB.classList.remove('active')
        currentMode='color'
    }
    else if(mode.id=='rainbowBtn'){
        colorB.classList.remove('active')
        rainbowB.classList.add('active')
        erasB.classList.remove('active')
        currentMode='rainbow'

    }
    else if(mode.id=='eraserBtn'){
        colorB.classList.remove('active')
        rainbowB.classList.remove('active')
        erasB.classList.add('active')
        currentMode='eraser'
    }
    console.log(currentMode)

   })
})
clear.addEventListener('click',()=>{
    changeGridSize()
})

