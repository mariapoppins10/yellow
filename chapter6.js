document.addEventListener("DOMContentLoaded", () => {
    // 1. GENERATE AMBIENT STARS
    const starContainer = document.getElementById("ambientStars");
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 2.5 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        const duration = Math.random() * 3 + 2;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;
        starContainer.appendChild(star);
    }

    // 2. YELLOW-THEMED INTERACTIVE GAME & MUSIC TRIGGER
    const questionOverlay = document.getElementById("questionOverlay");
    const celebrationContainer = document.getElementById("celebrationContainer");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const birthdayAudio = document.getElementById("birthday-audio");

    let noClickCount = 0;
    const noPhrases = ["Not really 🌧️", "A bit cloudy? 🌥️", "Choose yellow! 💛", "Always bright! ✨", "No choice na! 🌟"];

    noBtn.addEventListener("click", () => {
        noClickCount++;
        let currentSize = 1 + (noClickCount * 0.3);
        yesBtn.style.transform = `scale(${currentSize})`;
        
        if (noClickCount < noPhrases.length) {
            noBtn.textContent = noPhrases[noClickCount];
        } else {
            noBtn.style.display = "none"; 
        }
    });

    yesBtn.addEventListener("click", () => {
        if (birthdayAudio) {
            birthdayAudio.volume = 0.8;
            birthdayAudio.play().catch(error => {
                console.log("Audio play failed:", error);
            });
        }

        questionOverlay.classList.add("hidden-element");
        setTimeout(() => {
            questionOverlay.style.display = "none";
            celebrationContainer.classList.remove("hidden-element");
            celebrationContainer.classList.add("show-element");
            startTypingEffect();
        }, 500);
    });

    // 3. TYPING EFFECT PARA SA TITLE AT SUBTITLE
    function startTypingEffect() {
        const titleText = "Happy Birthday, Allen! ✨";
        const subtitleText = "Make a wish, my favorite mammal...";
        
        const titleElement = document.getElementById("typingTitle");
        const subtitleElement = document.getElementById("typingSubtitle");
        
        let i = 0;
        function typeTitle() {
            if (i < titleText.length) {
                titleElement.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeTitle, 70);
            } else {
                let j = 0;
                function typeSubtitle() {
                    if (j < subtitleText.length) {
                        subtitleElement.textContent += subtitleText.charAt(j);
                        j++;
                        setTimeout(typeSubtitle, 50);
                    }
                }
                setTimeout(typeSubtitle, 300);
            }
        }
        typeTitle();
    }

    // 4. BLOW CANDLE & SENTENCE-BY-SENTENCE TYPING OVER SHOOTING STARS
    const blowBtn = document.getElementById("blowCandleBtn");
    const candle = document.querySelector(".candle");
    const finalMessageContainer = document.getElementById("finalMessageContainer");
    const outroBtn = document.getElementById("outroBtn");
    const outroContainer = document.getElementById("outroContainer");

    blowBtn.addEventListener("click", () => {
        candle.classList.add("blown");
        blowBtn.style.display = "none";

        celebrationContainer.classList.add("hidden-element");

        setTimeout(() => {
            celebrationContainer.style.display = "none";
            
            finalMessageContainer.classList.remove("hidden-element");
            finalMessageContainer.classList.add("show-element");
            
            startShootingStars();
            startSentenceTyping();
        }, 600);
    });

    // SENTENCE BY SENTENCE TYPING LOGIC (ONE SENTENCE PER LINE)
    function startSentenceTyping() {
        const wishSentenceEl = document.getElementById("wishSentence");
        const line1El = document.getElementById("line1");
        const line2El = document.getElementById("line2");
        const line3El = document.getElementById("line3");

        const textWish = "Your wish is written in the stars... ✨";
        const sentence1 = "Happy birthday again, my Allen.";
        const sentence2 = "Thank u for simply eggxisting. I hope this makes u smile, baby :>";
        const sentence3 = "I hope all your dreams written in the stars come true ✨";

        // Type Wish Title
        let i = 0;
        function typeWish() {
            if (i < textWish.length) {
                wishSentenceEl.textContent += textWish.charAt(i);
                i++;
                setTimeout(typeWish, 40);
            } else {
                setTimeout(typeLine1, 300);
            }
        }

        // Type Line 1
        let j = 0;
        function typeLine1() {
            if (j < sentence1.length) {
                line1El.textContent += sentence1.charAt(j);
                j++;
                setTimeout(typeLine1, 30);
            } else {
                setTimeout(typeLine2, 300);
            }
        }

        // Type Line 2
        let k = 0;
        function typeLine2() {
            if (k < sentence2.length) {
                line2El.textContent += sentence2.charAt(k);
                k++;
                setTimeout(typeLine2, 25);
            } else {
                setTimeout(typeLine3, 300);
            }
        }

        // Type Line 3
        let l = 0;
        function typeLine3() {
            if (l < sentence3.length) {
                line3El.textContent += sentence3.charAt(l);
                l++;
                setTimeout(typeLine3, 20);
            } else {
                // Pagka-tapos ang huling linya, lumitaw ang button
                setTimeout(() => {
                    outroBtn.classList.remove("hidden-element");
                    outroBtn.classList.add("show-element");
                }, 500);
            }
        }

        typeWish();
    }

    // 5. TRANSITION PAPUNTA SA FINAL OUTRO SCREEN AT FIREWORKS
    outroBtn.addEventListener("click", () => {
        finalMessageContainer.classList.add("hidden-element");
        setTimeout(() => {
            finalMessageContainer.style.display = "none";
            outroContainer.classList.remove("hidden-element");
            outroContainer.classList.add("show-element");
            
            startFireworks();
        }, 500);
    });

    // 6. SHOOTING STARS ANIMATION ENGINE
    function startShootingStars() {
        const canvas = document.getElementById("shootingStarsCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let shootingStars = [];

        class ShootingStar {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = 0;
                this.length = Math.random() * 80 + 40;
                this.speed = Math.random() * 8 + 6;
                this.angle = Math.PI / 4;
                this.opacity = Math.random() * 0.7 + 0.3;
            }
            update() {
                this.x -= Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                if (this.y > canvas.height || this.x < 0) {
                    this.reset();
                }
            }
            draw() {
                ctx.save();
                ctx.strokeStyle = `rgba(255, 235, 59, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x + Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                ctx.stroke();
                ctx.restore();
            }
        }

        for (let i = 0; i < 6; i++) {
            let star = new ShootingStar();
            star.y = Math.random() * canvas.height;
            shootingStars.push(star);
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });
        }
        animate();
    }

    // 7. FIREWORKS ANIMATION ENGINE
    function startFireworks() {
        const canvas = document.getElementById("fireworksCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let fireworks = [];
        let particles = [];

        class Firework {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height;
                this.targetY = Math.random() * (canvas.height * 0.5);
                this.speed = Math.random() * 3 + 4;
                this.angle = -Math.PI / 2 + (Math.random() * 0.4 - 0.2);
                this.hu = Math.random() * 60 + 40;
            }
            update() {
                this.y -= this.speed;
            }
            draw() {
                ctx.save();
                ctx.fillStyle = `hsl(${this.hu}, 100%, 50%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        class Particle {
            constructor(x, y, hu) {
                this.x = x;
                this.y = y;
                this.hu = hu;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 6 + 1;
                this.friction = 0.95;
                this.gravity = 0.08;
                this.alpha = 1;
                this.decay = Math.random() * 0.015 + 0.015;
            }
            update() {
                this.speed *= this.friction;
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed + this.gravity;
                this.alpha -= this.decay;
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = `hsl(${this.hu}, 100%, 60%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        function createExplosion(x, y, hu) {
            for (let i = 0; i < 70; i++) {
                particles.push(new Particle(x, y, hu));
            }
        }

        function animateFireworks() {
            requestAnimationFrame(animateFireworks);
            ctx.fillStyle = "rgba(11, 11, 22, 0.2)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.06) {
                fireworks.push(new Firework());
            }

            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].update();
                fireworks[i].draw();

                if (fireworks[i].y <= fireworks[i].targetY) {
                    createExplosion(fireworks[i].x, fireworks[i].y, fireworks[i].hu);
                    fireworks.splice(i, 1);
                }
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].alpha <= 0) {
                    particles.splice(i, 1);
                }
            }
        }

        animateFireworks();
    }
});