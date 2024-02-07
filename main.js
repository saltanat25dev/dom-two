const board = document.querySelector('#board')
const numbers = 500
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'white',
    'black'
];

for (let i = 0;i < numbers;i++){
    const block = document.createElement('div');
    const open = document.querySelector('.open');
    const close = document.querySelector('.close')

    block.classList.add ('block')

    block.addEventListener('mouseover' , ()=>{
        setColors(block)
    })
    block.addEventListener('mouseleave',()=>{
        removeColors(block)
    })

    board.append(block)
}

function getColorsRandom (){
    const index = Math.round(Math.random() * colors.length)
    return colors[index]
}

function setColors(block) {
    const colors = getColorsRandom();
    block.style.background = colors;
    block.style.boxShadow = `0 0 10px ${colors},0 0 10px ${colors}`
}
function removeColors (block){
    block.style.background = "#1d1d1d"
    block.style.boxShadow = '0 0 2px #000'
}
btns.addEventListener('click' ,() =>{

})





