let nextDom = document.querySelector("#next");
let prevDom = document.querySelector("#prev");

let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

let timeRunning = 3000;
let runTimeout;
let timeAutoNext = 7000;

let runAutoRun = setTimeout(() => {
    nextDom.click(); //this method used to execute a click on an element as if the user manually clicked on it
},timeAutoNext);


//when user clicks on next button then run this function whose variable value is next
nextDom.onclick = function() {
    showSlider('next');
}

//when user clicks on prev button then run this function whose variable value is prev
prevDom.onclick = function() {
    showSlider('prev');
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]); //move the fist slider item to the end of row so that second slider item become first
        thumbnailDom.appendChild(itemThumbnail[0]);//move the fist thumbnail item to the end of row so that second thumbnail item become first
        carouselDom.classList.add('next');
    } else {
        let positionLastItem =  itemSlider.length - 1;
        //move the last slider item to the first position 
        listItemDom.prepend(itemSlider[positionLastItem]);
        //move the last thumbnail item to the first position 
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeout); //clears a timer set with the setTimeout() method
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning);

    clearTimeout(runAutoRun); //clears a timer set with the setTimeout() method
}