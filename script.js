document.addEventListener('DOMContentLoaded', () => {
    
    // --- April Fools Jokes ---
    const isAprilFools = true; // Hardcoded for the task
    
    if (isAprilFools) {
        console.log("Happy April Fools! MinePaint is now a premium software.");
        
        // 1. "Buy" instead of "Download"
        const downloadButtons = document.querySelectorAll('a[href*="download"], a[href*="mediafire"], .btn-primary');
        downloadButtons.forEach(btn => {
            if (btn.textContent.toLowerCase().includes('download')) {
                btn.innerHTML = btn.innerHTML.replace(/Download/g, 'Buy for $99.99');
                btn.classList.add('premium-btn');
            }
        });

        // 2. Rickroll Bug Tracker
        const bugTrackerLinks = document.querySelectorAll('a[href*="bugtracker"]');
        bugTrackerLinks.forEach(link => {
            link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            link.target = "_blank";
        });

        // 3. Chaos: Random Upside Down
        setInterval(() => {
            if (Math.random() > 0.9) {
                document.body.style.transition = "transform 0.5s ease-in-out";
                document.body.style.transform = document.body.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
            }
        }, 5000);

        // 4. Floating Chaos: Make sections move a bit
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.addEventListener('mouseover', () => {
                if (Math.random() > 0.5) {
                    section.style.transition = "all 0.3s ease";
                    section.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 2 - 1}deg)`;
                }
            });
        });

        // 5. Change font to Comic Sans
        document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
        
        // 6. Fake Changelog Entry
        const timeline = document.querySelector('.modern-timeline');
        if (timeline) {
            const jokeEntry = document.createElement('div');
            jokeEntry.className = 'timeline-entry reveal active';
            jokeEntry.innerHTML = `
                <div class="timeline-marker tag-patch" style="background: #ff00ea;"><i class="fa-solid fa-ghost"></i></div>
                <div class="timeline-card" style="border: 2px dashed #ff00ea;">
                    <div class="card-header">
                        <div class="ver-info">
                            <span class="badge" style="background: #ff00ea; color: white;">APRIL FOOLS</span>
                            <h2>Version Bt-Y26PR01 (PRANK)</h2>
                        </div>
                        <span class="date"><i class="fa-regular fa-calendar"></i> April 1, 2026</span>
                    </div>
                    <p class="summary-text"><strong>MinePaint is now a paid subscription!</strong></p>
                    <div class="change-group">
                        <h3><i class="fa-solid fa-money-bill-wave text-primary"></i> New Economy</h3>
                        <ul>
                            <li>Added <strong>$99.99/month</strong> subscription for saving files.</li>
                            <li>Added <strong>$5.99</strong> fee per block placed.</li>
                            <li>Integrated <strong>NFT support</strong> for every pixel drawn.</li>
                            <li>Added <strong>Herobrine</strong> to the canvas (he might delete your work).</li>
                            <li>MinePaint now requires a <strong>NASA Supercomputer</strong> to run at 30 FPS.</li>
                        </ul>
                    </div>
                </div>
            `;
            timeline.prepend(jokeEntry);
        }

        // 7. Herobrine Banner (Fixed Overlap)
        const banner = document.createElement('div');
        banner.id = 'herobrine-banner';
        banner.style.cssText = "background: #ff0000; color: #fff; text-align: center; padding: 10px; font-family: 'Press Start 2P', cursive; font-size: 0.8rem; position: fixed; top: 0; left: 0; width: 100%; z-index: 10002; border-bottom: 3px solid #000;";
        banner.innerHTML = "⚠️ SYSTEM COMPROMISED BY HEROBRINE ⚠️ MINEPAINT IS NOW PAID ⚠️";
        document.body.prepend(banner);
        document.body.style.paddingTop = "50px";
        const mainHeader = document.getElementById('navbar');
        if (mainHeader) mainHeader.style.top = "44px";

        // 8. Rotating Logo
        const logos = document.querySelectorAll('.logo img');
        logos.forEach(logo => {
            logo.style.transition = "transform 2s linear";
            setInterval(() => {
                logo.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 2000);
        });

        // 9. Fleeing Button
        const heroBtn = document.querySelector('.hero-buttons .btn-primary');
        if (heroBtn) {
            heroBtn.style.position = 'relative';
            heroBtn.addEventListener('mouseover', () => {
                heroBtn.style.left = Math.random() * 500 - 250 + 'px';
                heroBtn.style.top = Math.random() * 500 - 250 + 'px';
            });
        }

        // 10. Herobrine Jumpscare
        setInterval(() => {
            const ghost = document.createElement('img');
            ghost.src = 'app_icon.png';
            ghost.style.cssText = `position:fixed; left:${Math.random()*100}%; top:${Math.random()*100}%; width:100px; z-index:10000; opacity:0.5; pointer-events:none; filter: grayscale(1) brightness(2);`;
            document.body.appendChild(ghost);
            setTimeout(() => ghost.remove(), 200);
        }, 3000);

        // 11. Screen Shake on Gallery Click
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                document.body.classList.add('ultra-shake');
                setTimeout(() => document.body.classList.remove('ultra-shake'), 1000);
            });
        });

        // 12. Randomly hide text
        setInterval(() => {
            const ps = document.querySelectorAll('p');
            const randomP = ps[Math.floor(Math.random() * ps.length)];
            if(randomP) randomP.style.visibility = randomP.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 1000);

        // 13. Doom Timer
        const timerContainer = document.createElement('div');
        timerContainer.id = 'doom-timer';
        timerContainer.style.cssText = "position:fixed; top:100px; right:20px; background:red; color:white; padding:10px; font-family:'Press Start 2P'; font-size:10px; z-index:10001; border:4px double white;";
        document.body.appendChild(timerContainer);
        let timeLeft = 666;
        setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timerContainer.innerHTML = `SYSTEM PURGE IN: ${timeLeft}s`;
            } else {
                document.body.style.filter = "contrast(500%) invert(100%)";
                timerContainer.innerHTML = "SYSTEM PURGED!";
                setTimeout(() => document.body.style.filter = "none", 500);
                timeLeft = 666;
            }
        }, 1000);

        // 14. Konami Code
        let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;
        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    document.body.classList.toggle('party-mode');
                    konamiIndex = 0;
                }
            } else { konamiIndex = 0; }
        });

        // 15. Minecraft Particle Trail
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.8) {
                const particle = document.createElement('div');
                particle.className = 'mc-particle';
                particle.style.left = e.pageX + 'px';
                particle.style.top = e.pageY + 'px';
                particle.style.background = Math.random() > 0.5 ? '#5d3b1a' : '#3b8526';
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }
        });

        // 16. Talking Blocks
        const quotes = ["WHY AM I FLOATING?", "HELP ME!", "IS THIS PIXEL ART?", "I WANT TO BE A DIAMOND!", "404 BRAIN NOT FOUND"];
        document.querySelectorAll('.floating-block').forEach(block => {
            block.addEventListener('mouseover', () => {
                const bubble = document.createElement('div');
                bubble.className = 'speech-bubble';
                bubble.innerText = quotes[Math.floor(Math.random() * quotes.length)];
                block.appendChild(bubble);
                setTimeout(() => bubble.remove(), 2000);
            });
        });

        // 17. Dizzy Scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const diff = Math.abs(currentScroll - lastScroll);
            if (diff > 50) document.body.style.filter = `blur(${diff/20}px) hue-rotate(${diff}deg)`;
            else document.body.style.filter = "none";
            lastScroll = currentScroll;
        });

        // 18. Random BSOD
        document.addEventListener('click', () => {
            if (Math.random() > 0.99) {
                const bsod = document.createElement('div');
                bsod.className = 'bsod-screen';
                bsod.innerHTML = `<div>:(</div><p>Your MinePaint ran into a problem... (0% complete)</p>`;
                document.body.appendChild(bsod);
                setTimeout(() => bsod.remove(), 2000);
            }
        });

        // 19. Author Swaps
        const authors = document.querySelectorAll('.author-card img');
        if (authors.length >= 2) {
            authors[0].src = 'https://placehold.co/150x150/5d3b1a/white?text=POTATO';
            authors[1].src = 'https://placehold.co/150x150/white/orange?text=CHICKEN';
        }

        // 20. Random Screen Glitches
        setInterval(() => {
            if (Math.random() > 0.8) {
                const glitchDiv = document.createElement('div');
                glitchDiv.style.cssText = `position:fixed; inset:0; z-index:10003; pointer-events:none; background:rgba(255,0,0,0.1); backdrop-filter: invert(1) hue-rotate(90deg) skew(${Math.random()*20}deg);`;
                document.body.appendChild(glitchDiv);
                setTimeout(() => glitchDiv.remove(), 150);
            }
        }, 8000);

        // 21. Fake Lag / Freezing
        setInterval(() => {
            if (Math.random() > 0.9) {
                document.body.classList.add('fake-lag');
                const loading = document.createElement('div');
                loading.id = 'fake-loading';
                loading.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:100004; background:rgba(0,0,0,0.8); color:white; padding:20px; font-family:'Press Start 2P'; border:2px solid white;";
                loading.innerHTML = "RECALIBRATING PROFITS...";
                document.body.appendChild(loading);
                setTimeout(() => {
                    document.body.classList.remove('fake-lag');
                    if(document.getElementById('fake-loading')) document.getElementById('fake-loading').remove();
                }, 2000);
            }
        }, 15000);
    }

    // --- Standard Website Logic (Mobile Menu, Scroll, etc.) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .btn-sm');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => revealOnScroll.observe(reveal));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });
});
