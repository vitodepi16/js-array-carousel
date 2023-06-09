/* 
`
<div class="box-img" >
<img src="./img/01.webp" alt="">
</div> 
`
*/
// SECTION IMAGE
const image = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
];


// SECTION COSTANTI/VARIABILI
let boxSlide = '';
let currentIndex = 0;
const slide = document.querySelector('.slide');


// CICLI

for (let i = 0; i < image.length; i++){
    boxSlide += ` <div class="box-img" >
    <img src="${image[i]}" alt="superhero-${i}}">
    </div> 
    `;

}
slide.innerHTML += boxSlide;

document.querySelectorAll('.box-img')[currentIndex].classList.add('active');


// FUNZIONI
const up = document.querySelector('.up');
const down = document.querySelector('.down');
console.log(up, down);
up.addEventListener('click', goUp);

function goUp(){
    document.querySelectorAll('.box-img')[currentIndex].classList.remove('active');
    if (currentIndex === 0){
        currentIndex  = image.length - 1;
    } else {
        currentIndex -- ;
    }
    console.log(currentIndex);
    document.querySelectorAll('.box-img')[currentIndex].classList.add('active');
    
}

down.addEventListener('click', goDown);

function goDown(){
    document.querySelectorAll('.box-img')[currentIndex].classList.remove('active');
    if (currentIndex === image.length - 1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.querySelectorAll('.box-img')[currentIndex].classList.add('active')
}
