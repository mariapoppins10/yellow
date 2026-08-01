document.addEventListener("DOMContentLoaded", () => {
    const memoriesData = [
        { date: "December 25, 2023", caption: "First time mo yata akong binati ng “Mary Christmas.” Alam mo ba dahil super sayo ko, nag volunteer ako na maghugas ng pinggan hanggang New Year (masipag pa ako dati eh) hahahaha. Literal na merry talaga ang Christmas ko." },
        { date: "April 01, 2024", caption: "Pinagsagot kita ng survey. In my defense, way ko lang talaga 'yon ng pag-shoot ng shot. Kaso na-reject agad ako nang tawagin mo akong \"ATE Mary\". But still cute kasi sinagutan mo nga ang google form na yun hahaha." },
        { date: "October 2024", caption: "Nagkasabay tayo sa bus. Hindi ko talaga in-expect na magkakausap tayo ulit after graduation. Akala ko noon makaka-move on na ako sa'yo, pero pagkakita ko ulit sa'yo... back to zero na naman, ikaw na naman ang crush ko." },
        { date: "April 20, 2025", caption: "Where everything started. Buti na lang talaga sumama ka sa outing, at buti na lang nag-reply ka sa notes ko. Kahit one year na ang nakalipas, kinikilig pa rin ako every time na naaalala ko 'yon. (Yah, badingggg.)" },
        { date: "May 05, 2025", caption: "Sinabay mo akong umuwi. Akala ko isang beses lang mangyayari, pero naulit pa nang ilang beses. Doon ko na-realize na ayoko pala talaga sa traffic... unless ikaw ang kasama ko, at tuwing kasama kita nagw-wish ako na sana traffic ;>." },
        { date: "May 10, 2025", caption: "First time nating lumabas, Jollibee pa talaga. Grabe, sobrang kabado ako kasi tayong dalawa lang! Like magj-jollibee ako kasama ka? wow talaga" },
        { date: "August 04, 2025", caption: "Finally, nagawa rin kitang batiin exactly 12:00 AM. Super happy ko kasi naunahan ko ang lahat na batiin ka." },
        { date: "August 17, 2025", caption: "Hindi ko alam kung tanda mo pa 'to, pero ito 'yung pinagsulat mo ako sa journal book. Tapos ginabi pa tayo sa Café Chemist. Ang nasa isip ko lang noon, \"Eh crush n'yo pala si Allen? Pinagsusulat lang ako oh.\" Bleh." },
        { date: "August 23, 2025", caption: "First time atang magyaya ng isang Allen, and first time ko ring makapunta ng Padre Garcia kasama ka. I really like it kapag inaaya mo akong samahan ka, kahit saan pa 'yan." },
        { date: "September 10, 2025", caption: "Then ikaw naman ang bumati sa'kin ng 11:59 PM. Sorry kung assuming, pero until now naaalala ko pa rin nung sinabi mo, \"See what I did? You're my first while I'm your last.\" Cutiee." },
        { date: "December 29, 2025", caption: "Turns out, mutual pala ang feelings natin. I remember late ka pa dumating, tapos halos one hour yata akong naghintay sa'yo, pero worth it naman. Favorite plot twist bago matapos ang taon—hindi pala ako assuming. May mga time siguro na unconsciously, sabay nating naiisip ang isa't isa. Ewan ko, what do you think?" },
        { date: "February 15, 2026", caption: "Our Valentine's celebration. Ikaw lang ang gumawa ng Lego flower habang pinapanood lang kita, cute mo talaga, tsk. Tapos 'yung picture natin with Iris playing in the background? Kung alam mo lang kung gaano ako kinilig that day. Sinong hero ang sinave ko ba talaga sa past life ko teh???" },
        { date: "February 20, 2026", caption: "Interview day ko sa BSU, tapos humingi lang ako sa'yo ng simpleng good luck eh and you did nga tapos akala mo late lang ako kasi. At, guess what?? super cute lang ng universe kasi nagkita tayo sa daan, like ang lucky ko naman ata." },
        { date: "February 21, 2026", caption: "Our first concert together. Kahit sobrang ngalay ng binti ko, isa pa rin ito sa favorite memories ko with you. Quietly, I wished na sana tayo na lang lagi, at sana puwedeng i-extend pa nang konti ang araw na 'yon." },
        { date: "February 24, 2026", caption: "Isa ito sa pinakamabigat na araw ko. Pero somehow, you made it easier just by being there and listening. Doon ko na-realize na mas lalo pa pala kitang nagugustuhan, down bad yarn? Kaya thanks for eggxisting, thanks for your life :>>." },
        { date: "March 08, 2026", caption: "Our first sunset date... na medyo sablay kasi walang sunset sa San Nicolas. Hahaha. Pero okay lang, ikaw naman ang kasama ko." },
        { date: "March 15, 2026", caption: "Naalala mo 'yung usapan natin sa Café Chemist tungkol sa \"doon ka na\"? Doon ko rin na-realize na down bad na talaga ako sa'yo. Imagine, ayoko sa second chances, pero kapag ikaw... parang gusto kong subukan ulit. Tsk. Swerte mo na, Allen." },
        { date: "March 22, 2026", caption: "Finally, our real sunset date sa Butong. Hindi mo siguro alam, pero I like watching sunsets with you because they remind me of you—calm, beautiful, and peaceful. Parang gano'n din kasi ang feeling ko whenever I'm with you." },
        { date: "April 05, 2026", caption: "Fiesta sa inyo, pero ang saya na sabay nating pinanood ang fireworks. I think everything feels a little prettier kapag ikaw ang kasama ko." },
        { date: "May 01, 2026", caption: "Tinuruan mo akong mag-bike kasi sinabi kong gusto kong i-try. Literal na tinuruan mo ako kasi nagba-bike ka ng palakad hahaha, sorry takot kasi akong mag out of balance. Pero, when kaya ulitttt?" },
        { date: "May 10, 2026", caption: "First time kong makasama sa lakad n'yo. Thank you for including me. Wala, cute lang!" },
        { date: "May 30, 2026", caption: "Remember the Pikachu thing? Kahit sabihin mo na baduy, I find it cute kayaaaa. Na hagya pa kita maconvince na sabihin eh kung ano yun, tsk. Pikachuuuu pala ha, bleh." },
        { date: "June 28, 2026", caption: "Finally, sinabi mo na rin hahahaha. Dati crush lang naman kita, tapos ngayon.... wow, makikita mo talaga sa imagine mo na sakses ka eh, bigla kang sumakses. Alam mo, hanggang ngayon, habang ginagawa ko 'to, kinikilig pa rin ako." },
        { date: "July 12, 2026", caption: "Our day! Wow, boyfriend ko na ang elementary crush ko na 'to! Swerte mo naman hahahahaha ps. yung pancit canton with hard-boiled egg ko, tsk." }
    ];

    const startOverlay = document.getElementById("startOverlay");
    const startBtn = document.getElementById("startBtn");
    const jarCanvas = document.getElementById("jarCanvas");
    const ambientStars = document.getElementById("ambientStars");
    const jarContainer = document.getElementById("jarContainer");
    const starsInsideJar = document.getElementById("starsInsideJar");
    const burstContainer = document.getElementById("burstContainer");
    const memoryDisplay = document.getElementById("memoryDisplay");
    const memoryDate = document.getElementById("memoryDate");
    const memoryCaption = document.getElementById("memoryCaption");
    const jarPrompt = document.querySelector(".jar-prompt");
    const chapter5EndScreen = document.getElementById("chapter5EndScreen");
    const goToChapter6Btn = document.getElementById("goToChapter6Btn");
    const yellowSong = document.getElementById("yellowSong");

    let memoryCounter = 0;
    let isProcessingClick = false;
    const starColors = ["#ffeb3b", "#ff79c6", "#8be9fd", "#50fa7b", "#ffb86c", "#bd93f9"];

    if (jarPrompt) {
        jarPrompt.textContent = "CLICK THE STARS INSIDE THE JAR ✨";
    }

    document.addEventListener("mousemove", (e) => {
        if (!startOverlay.classList.contains("hidden-element")) {
            if (Math.random() > 0.3) {
                const sparkle = document.createElement("div");
                sparkle.className = "cursor-sparkle";
                sparkle.textContent = Math.random() > 0.5 ? "✨" : "💛";
                sparkle.style.left = e.clientX + "px";
                sparkle.style.top = e.clientY + "px";
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 600);
            }
        }
    });

    function createAmbientSky() {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement("div");
            star.className = "small-pixel-star";
            star.style.width = (Math.random() * 3 + 1) + "px";
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 3 + "s";
            ambientStars.appendChild(star);
        }
    }
    createAmbientSky();

    function populateJarStars() {
        starsInsideJar.innerHTML = "";
        for (let i = 0; i < memoriesData.length; i++) {
            const star = document.createElement("div");
            star.className = "mini-jar-star";
            star.textContent = "★";
            star.style.color = starColors[i % starColors.length];
            star.style.left = (Math.random() * 160 + 20) + "px";
            star.style.bottom = (Math.random() * 240 + 20) + "px";
            
            star.addEventListener("click", (e) => {
                e.stopPropagation();
                if (isProcessingClick || memoryCounter >= memoriesData.length) return;
                isProcessingClick = true;

                const rect = star.getBoundingClientRect();
                createFireworkBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);

                star.style.transform = `translateY(-140px) scale(2.5) rotate(360deg)`;
                star.style.opacity = "0";
                setTimeout(() => star.remove(), 400);

                const currentIdx = memoryCounter;
                memoryCounter++;

                setTimeout(() => {
                    memoryDate.textContent = memoriesData[currentIdx].date;
                    memoryCaption.textContent = memoriesData[currentIdx].caption;
                    memoryDisplay.classList.add("show-element");
                }, 300);
            });

            starsInsideJar.appendChild(star);
        }
    }
    populateJarStars();

    startBtn.addEventListener("click", () => {
        if (yellowSong) {
            yellowSong.volume = 0.5;
            yellowSong.play().catch(err => {
                console.log("Autoplay blocked or file missing:", err);
            });
        }

        startOverlay.style.opacity = "0";
        setTimeout(() => {
            startOverlay.classList.add("hidden-element");
            jarCanvas.classList.remove("hidden-element");
        }, 1000);
    });

    memoryDisplay.addEventListener("click", () => {
        memoryDisplay.classList.remove("show-element");
        
        if (memoryCounter >= memoriesData.length) {
            setTimeout(() => {
                triggerMassiveJarFireworksAndTransition();
            }, 400);
        } else {
            isProcessingClick = false;
        }
    });

    function createFireworkBurst(x, y) {
        const particleCount = 12;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "firework-particle";
            particle.textContent = Math.random() > 0.4 ? "✨" : "💛";
            particle.style.left = x + "px";
            particle.style.top = y + "px";

            const angle = (i / particleCount) * 2 * Math.PI;
            const velocity = Math.random() * 55 + 30;
            const destX = Math.cos(angle) * velocity;
            const destY = Math.sin(angle) * velocity;

            particle.style.setProperty('--x', `${destX}px`);
            particle.style.setProperty('--y', `${destY}px`);

            burstContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 800);
        }
    }

    function triggerMassiveJarFireworksAndTransition() {
        const rect = jarContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let wave = 0; wave < 4; wave++) {
            setTimeout(() => {
                createFireworkBurst(centerX + (Math.random() * 100 - 50), centerY + (Math.random() * 100 - 50));
            }, wave * 250);
        }

        setTimeout(() => {
            jarContainer.style.transition = "opacity 1s ease, transform 1s ease";
            jarContainer.style.opacity = "0";
            jarContainer.style.transform = "scale(1.4)";
            
            setTimeout(() => {
                jarContainer.classList.add("hidden-element");
                chapter5EndScreen.classList.add("show-element");
            }, 1000);
        }, 1000);
    }

   goToChapter6Btn.addEventListener("click", () => {
    window.location.href = "../chapter6.html";
});
});