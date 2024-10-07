const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let interval;

const colorChanger = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[parseInt(Math.random()*16)];
    }

    return color;
}

// console.log(parseInt(Math.random()*8));

// console.log(colorChanger());


const coloChange = () => {
    document.body.style.backgroundColor = colorChanger();
}

const colorInterval = () => {
   interval = setInterval(coloChange, 1000);
}

start.addEventListener("click", colorInterval);

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});