const stars = document.querySelector(".stars");

function createStar(){

    const star = document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "✦";

    let x;
    let y;

    // Prevent stars from appearing over the center
    do{

        x = Math.random() * window.innerWidth;

        y = Math.random() * window.innerHeight;

    }

    while(

        x > window.innerWidth * 0.30 &&
        x < window.innerWidth * 0.70 &&
        y > window.innerHeight * 0.25 &&
        y < window.innerHeight * 0.75

    );

    star.style.left = x + "px";

    star.style.top = y + "px";

    // Cute tiny sizes
    star.style.fontSize = (5 + Math.random()*8) + "px";

    // Different twinkle speed
    star.style.animationDuration = (2 + Math.random()*4) + "s";

    // Different starting time
    star.style.animationDelay = (Math.random()*5) + "s";

    stars.appendChild(star);

    // Remove after 10 seconds
    setTimeout(()=>{

        star.remove();

    },10000);

}

// Initial stars
for(let i=0;i<100;i++){

    createStar();

}

// Keep creating stars
setInterval(createStar,120);