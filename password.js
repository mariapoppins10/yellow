// ===========================
// Create Tiny Stars
// ===========================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    starsContainer.appendChild(star);

}

// ===========================
// Continue Button
// ===========================

const button = document.getElementById("continueBtn");

button.addEventListener("click", checkPassword);

// Allow Enter key
document.getElementById("password").addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});

// ===========================
// Check Password
// ===========================

function checkPassword() {

    const password = document
        .getElementById("password")
        .value
        .trim()
        .toLowerCase();

    const container = document.getElementById("container");
    const success = document.getElementById("success");
    const error = document.getElementById("error");

    if (password === "please") {

        error.textContent = "";

        // Fade out password page
        container.style.opacity = "0";

        setTimeout(() => {

            container.style.display = "none";

            success.style.display = "block";

        }, 1000);

        // Go to Chapter 5 inside the folder
setTimeout(() => {

    window.location.href = "chapter5/chapter5.html";

}, 3500);

    }

    else {

        error.textContent = "Say the magic word, beggar. 🙂";

    }

}