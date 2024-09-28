const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    console.log(button);
    const colorPallete = ['grey', 'rgb(228, 171, 64)', 'rgb(47, 173, 177)', 'rgb(192, 57, 57)'];

    button.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(document.getElementById(e.target.id).style.backgroundColor);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = colorPallete[0];
        }else if(e.target.id === 'orange'){
            body.style.backgroundColor = colorPallete[1];
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = colorPallete[2];
        }else if(e.target.id === 'red'){
            body.style.backgroundColor = colorPallete[3];
        }
    })
})