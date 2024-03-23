const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const navbar = document.querySelector('.navbar');


buttons.forEach(function (button) {
    button.addEventListener("click" , function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id === "grey")
        {
            body.style.backgroundColor=e.target.id;
            h1.style.color = "white";
            h2.style.color = "white";

            
        }
        if(e.target.id === "pink")
        {
            body.style.backgroundColor=e.target.id;
            h1.style.color = "red"
            h2.style.color = "red"        }
        if(e.target.id === "yellow")
        {
            body.style.backgroundColor=e.target.id;
            h1.style.color = "brown"
            h2.style.color = "brown"
         
        }
        if(e.target.id === "blue")
        {
            body.style.backgroundColor=e.target.id;
            h1.style.color = "yellow"
            h2.style.color = "yellow"
        }

    })
})