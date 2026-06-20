/* =====================================================================
   FOR PAPA ❤️ — SCRIPT
   ALL EDITABLE TEXT LIVES IN THE "CONTENT" OBJECT BELOW.
   Change names, memories, years, facts, letter text, etc. right here —
   nothing else in the file needs to change.
   ===================================================================== */

const CONTENT = {
  // ---- Lock screen ----
  pin: "201123", // 👉 change this 4-digit PIN to your special family number
  wrongMessages: [
    "Papa, try again 😄",
    "You know this one!",
    "Hint: sabka birthdate❤️",
    "At times apka ATM pin😉",
    "Say Prettyy please for PIN!"
  ],

  // ---- Balloon memories (10 items) ----
  balloonMemories: [
    { img: "images/photo1.jpeg",  title: "Certified Heartbreaker",      text: "Papa's old photos are the reason I understand why Mummy said yes." },
    { img: "images/photo2.jpg",  title: "Confidence Level: Papa",  text: "Papa explaining something complicated while everyone else pretended they understood." },
    { img: "images/photo3.jpg",  title: "Still Young, Just Better Dressed",  text: "Every superhero needs a league of equally mischievous sidekicks." },
    { img: "images/photo4.jpg",  title: "Our Favorite Love Story",        text: "Because these two always end up on the same team." },
    { img: "images/photo5.jpg",  title: "The Repeat Offender",   text: "Caught once again being exceptionally good at what he does." },
    { img: "images/photo6.jpg",  title: "Family Sandwich",     text: "Surrounded by his girls and pretending he doesn't absolutely love the attention." },
    { img: "images/photo7.jpg",  title: "Our Safe Place",       text: "The world feels a little less scary when you're around." },
    { img: "images/photo8.jpg",  title: "Before becoming Papa",       text: "Evidence that Papa had a pretty interesting life long before we came along." },
    { img: "images/photo9.jpg",  title: "Dad of the Year",     text: "Some people say 'I love you.' Papa brought golgappas." },
    { img: "images/photo10.jpg", title: "Partners Since Foreverr",          text: "Co-founders of this family. CEOs of all major decisions." }
  ],

  // ---- Timeline (8 events) ----
  timeline: [
    { year: "1990", img: "images/timeline1.jpeg", title: "It Began With You and Mmmy- The Peaceful Era", desc: "A time when Mom and Papa still had free time, money, and uninterrupted sleep." },
    { year: "Some Year", img: "images/timeline2.jpg", title: "Couple's Trip", desc: "कृपया प्रतीक्षा करें। सिस्टम में जल्द ही शोर, हँसी और खर्चे जोड़े जाएंगे।" },
    { year: "1995", img: "images/timeline3.jpg", title: "The First Princess", desc: "Aur isi din se ghar thoda zyada khush aur thoda kam shaant ho gaya." },
    { year: "Some year again..", img: "images/timeline4.jpg", title: "Papa = Playground", desc: "Papa relax karne ki koshish kar rahe the. Didi ke kuch aur plans the." },
    { year: "2001", img: "images/timeline5.jpg", title: "Papa's 3rd Boss", desc: "Mummy aur Didi ke baad company ne ek aur manager hire kar li." },
    { year: "2002", img: "images/timeline6.jpg", title: "Kuttu kuttu & The Palu Palus", desc: "Featuring: Kuttu Uttu, Palu Palu, Palu Palu and one very happy Papa."},
    { year: "2003", img: "images/timeline7.jpg", title: "Palu Palu ki Favourite Seat", desc: "Hum dono ki favourite jagah? Papa ke UPAARRR." },
    { year: "2026", img: "images/Timeline8.jpeg", title: "Us Now", desc: "Still our hero, still our favorite person." }
  ],

  // ---- Fun facts (flip cards) ----
  funFacts: [
    { emoji: "🏆", front: "Best Dad Award", back: "Won every year, unanimously." },
    { emoji: "☕", front: "Favourite Food", back: "Jitna chatpata, utna achha" },
    { emoji: "📞", front: "Favorite quote", back: "\"Practice makes a man precise\"" },
    { emoji: "🚗", front: "Hidden Talent", back: "Actually hidden nahi hai. Sabko pata hai..Papa gaayenge. Baaki sab sunenge. Choice nahi hai." },
    { emoji: "💸", front: "Weakness", back: "Koi bhi bhai paise maange aur Papa mana kar dein? Impossible." },
    { emoji: "💪", front: "Biggest Achievement", back: "Kuttu Uttu aur dono Palu Palu." }
  ],

  // ---- Gallery (12 photos) ----
  gallery: Array.from({ length: 12 }, (_, i) => `images/gallery${i + 1}.jpg`),

  // ---- Letter to Papa ----
  letter:
`Congratulations!

You have successfully completed:

✔ Raising Didi
✔ Raising Me
✔ Surviving Kuttu Uttu
✔ Managing endless family functions
✔ Listening to our random stories
✔ Winning debates nobody asked for
✔ Teaching maths (with appropriate levels of daant)
✔ Bringing golgappas at exactly the right time

Achievement Unlocked:
🏆 World's Best Papa

For years, you have served as:

Driver 🚗
Maths Teacher 📚
Problem Solver 🔧
Singer 🎤
ATM for relatives 💸
and Full-Time Papa ❤️

Despite being outnumbered by Kuttu Kuttu and two Palu Palus,
you somehow managed to survive.

Thank you for every sacrifice,
every life lesson,
every laugh,
and every time you pretended not to be worried while actually worrying the most.

No matter how old I get,
We'll always be your Palu Palus.

Happy Father's Day Papa.

Now please stop reading and go eat something chatpata.

Love,
Puja Princi❤️`,

  // ---- Certificate ----
  certificateName: "Papa"
};

/* =====================================================================
   AMBIENT BACKGROUND — floating hearts & sparkles
   ===================================================================== */
(function ambientFloaters() {
  const layer = document.getElementById("ambient-layer");
  const emojis = ["💖", "💕", "❤️", "✨", "🌸"];
  function spawn() {
    const el = document.createElement("span");
    const isSparkle = Math.random() > 0.3;
    el.className = "floaty " + (isSparkle ? "sparkle" : "heart-emoji");
    el.textContent = isSparkle ? "✨" : emojis[Math.floor(Math.random() * emojis.length)];
    const left = Math.random() * 100;
    const duration = 7 + Math.random() * 6;
    const drift = (Math.random() * 80 - 40) + "px";
    el.style.left = left + "vw";
    el.style.setProperty("--drift", drift);
    el.style.animationDuration = duration + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 500);
  }
  setInterval(spawn, 650);
  for (let i = 0; i < 6; i++) setTimeout(spawn, i * 300);
})();

/* =====================================================================
   SECTION 1 — LOCK SCREEN LOGIC
   ===================================================================== */
(function lockScreen() {
  let entered = "";
  const dotsWrap = document.getElementById("pinDots");
  const dots = dotsWrap.querySelectorAll(".dot");
  const message = document.getElementById("lockMessage");
  const keypad = document.getElementById("keypad");
  const lockScreenEl = document.getElementById("lock-screen");
  const ribbonOverlay = document.getElementById("ribbonOverlay");

  function renderDots() {
    dots.forEach((d, i) => d.classList.toggle("filled", i < entered.length));
  }

  function shake() {
    dotsWrap.classList.remove("shake");
    requestAnimationFrame(() => dotsWrap.classList.add("shake"));
    message.textContent = CONTENT.wrongMessages[Math.floor(Math.random() * CONTENT.wrongMessages.length)];
  }

  function unlock() {
    message.textContent = "";
    lockScreenEl.classList.add("unlocking");
    ribbonOverlay.classList.add("opening");
    setTimeout(() => {
      lockScreenEl.classList.add("leave");
      document.body.style.overflow = "auto";
      showBalloonSection();
    }, 750);
  }

  keypad.addEventListener("click", (e) => {
    const btn = e.target.closest(".key");
    if (!btn) return;
    const key = btn.dataset.key;

    if (key === "clear") {
      entered = "";
      message.textContent = "";
      renderDots();
      return;
    }
    if (key === "back") {
      entered = entered.slice(0, -1);
      renderDots();
      return;
    }
    if (entered.length >= 6) return;
    entered += key;
    renderDots();

    if (entered.length === 6) {
      if (entered === CONTENT.pin) {
        unlock();
      } else {
        setTimeout(() => {
          shake();
          entered = "";
          renderDots();
        }, 180);
      }
    }
  });
})();

/* lock page scroll until unlocked */
document.body.style.overflow = "hidden";

function showBalloonSection() {
  const section = document.getElementById("balloon-section");
  section.classList.remove("hidden-section");
  initBalloons();
}

/* =====================================================================
   SECTION 2 — BALLOON POP MEMORIES
   ===================================================================== */
function initBalloons() {
  const field = document.getElementById("balloonField");
  const stack = document.getElementById("polaroidStack");
  const continueBtn = document.getElementById("continueAfterBalloons");
  const colors = ["#F2A6C0", "#F7C6A3", "#E8AFC0", "#F4D6C8", "#EBB6D0"];
  let poppedCount = 0;

  CONTENT.balloonMemories.forEach((mem, i) => {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    const leftPercent = 5 + (i * 9) % 90;
    balloon.style.left = leftPercent + "%";
    balloon.style.top = (Math.random() * 60) + "%";
    balloon.style.animationDelay = (Math.random() * 2) + "s";
    const color = colors[i % colors.length];
    balloon.innerHTML = `
      <svg viewBox="0 0 64 78">
        <ellipse cx="32" cy="32" rx="28" ry="32" fill="${color}"/>
        <ellipse cx="22" cy="20" rx="8" ry="11" fill="rgba(255,255,255,0.35)"/>
        <polygon points="28,62 36,62 32,70" fill="${color}"/>
        <line x1="32" y1="70" x2="32" y2="78" stroke="#C97B91" stroke-width="1.5"/>
      </svg>`;
    balloon.addEventListener("click", () => popBalloon(balloon, mem));
    field.appendChild(balloon);
  });

  function popBalloon(balloon, mem) {
    if (balloon.classList.contains("popped")) return;
    balloon.classList.add("popped");
    spawnConfetti(balloon);
    addPolaroid(mem);
    poppedCount++;
    if (poppedCount === CONTENT.balloonMemories.length) {
      continueBtn.classList.remove("hidden-section");
    }
  }

  function spawnConfetti(balloon) {
    const rect = balloon.getBoundingClientRect();
    const fieldRect = field.getBoundingClientRect();
    const colorsConf = ["#E8A2B8", "#D4AF7A", "#FFD9C2", "#F2A6C0"];
    for (let i = 0; i < 14; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-burst";
      piece.style.left = (rect.left - fieldRect.left + rect.width / 2) + "px";
      piece.style.top = (rect.top - fieldRect.top + rect.height / 2) + "px";
      piece.style.background = colorsConf[i % colorsConf.length];
      piece.style.setProperty("--cx", (Math.random() * 160 - 80) + "px");
      piece.style.setProperty("--cy", (Math.random() * 140 + 60) + "px");
      piece.style.setProperty("--cr", (Math.random() * 540) + "deg");
      field.appendChild(piece);
      setTimeout(() => piece.remove(), 1000);
    }
  }

  function addPolaroid(mem) {
    const card = document.createElement("div");
    card.className = "polaroid";
    card.style.setProperty("--rot", (Math.random() * 8 - 4) + "deg");
    card.innerHTML = `
      <img src="${mem.img}" alt="${mem.title}" loading="lazy" onerror="this.style.background='linear-gradient(135deg,#FCE4EC,#FFE2D1)'; this.removeAttribute('src');" />
      <div class="p-title">${mem.title}</div>
      <div class="p-text">${mem.text}</div>`;
    stack.appendChild(card);
  }

  continueBtn.addEventListener("click", () => {
    revealRemainingSections();
    document.getElementById("timeline-section").scrollIntoView({ behavior: "smooth" });
  });
}

/* =====================================================================
   REVEAL REMAINING SECTIONS (3 → 9) AFTER BALLOON GAME
   ===================================================================== */
let remainingRevealed = false;
function revealRemainingSections() {
  if (remainingRevealed) return;
  remainingRevealed = true;
  ["timeline-section", "funfacts-section", "gallery-section",
    "video-section", "letter-section", "certificate-section", "final-section"
  ].forEach(id => document.getElementById(id).classList.remove("hidden-section"));

  buildTimeline();
  buildFunFacts();
  buildGallery();
  typeLetter();
  document.getElementById("certName").textContent = CONTENT.certificateName;
  initScrollReveal();
}

/* =====================================================================
   SECTION 3 — TIMELINE
   ===================================================================== */
function buildTimeline() {
  const wrap = document.getElementById("timeline");
  CONTENT.timeline.forEach(item => {
    const el = document.createElement("div");
    el.className = "tl-item";
    el.innerHTML = `
      <div class="tl-card">
        <div class="tl-year">${item.year}</div>
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.style.background='linear-gradient(135deg,#FCE4EC,#FFE2D1)'; this.removeAttribute('src');" />
        <div class="tl-title">${item.title}</div>
        <p class="tl-desc">${item.desc}</p>
      </div>`;
    wrap.appendChild(el);
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll(".tl-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.2 });
  items.forEach(item => observer.observe(item));
}

/* =====================================================================
   SECTION 4 — FUN FACTS (flip cards)
   ===================================================================== */
function buildFunFacts() {
  const grid = document.getElementById("funfactsGrid");
  CONTENT.funFacts.forEach(fact => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <div class="flip-emoji">${fact.emoji}</div>
          <div class="flip-label">${fact.front}</div>
        </div>
        <div class="flip-back">
          <div class="flip-label">${fact.back}</div>
        </div>
      </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

/* =====================================================================
   SECTION 5 — GALLERY + LIGHTBOX
   ===================================================================== */
function buildGallery() {
  const wall = document.getElementById("galleryWall");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const heartBurst = document.getElementById("heartBurst");

  CONTENT.gallery.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = "Papa memory";
    img.onerror = () => { img.style.background = "linear-gradient(135deg,#FCE4EC,#FFE2D1)"; img.removeAttribute("src"); };
    img.addEventListener("click", () => {
      lightboxImg.src = src;
      lightbox.classList.add("open");
    });
    wall.appendChild(img);
  });

  document.getElementById("lightboxClose").addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("open");
    else if (e.target.id === "lightboxImg") spawnHeart(e);
  });

  function spawnHeart(e) {
    const rect = heartBurst.getBoundingClientRect();
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = "❤️";
    heart.style.left = (e.clientX - rect.left) + "px";
    heart.style.top = (e.clientY - rect.top) + "px";
    heartBurst.appendChild(heart);
    setTimeout(() => heart.remove(), 900);
  }
}

/* =====================================================================
   SECTION 7 — LETTER TYPEWRITER
   ===================================================================== */
function typeLetter() {
  const el = document.getElementById("letterText");
  const text = CONTENT.letter;
  let i = 0;
  el.innerHTML = '<span class="cursor"></span>';

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        obs.disconnect();
        startTyping();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(el);

  function startTyping() {
    const interval = setInterval(() => {
      if (i >= text.length) {
        clearInterval(interval);
        return;
      }
      const written = text.slice(0, i + 1);
      el.innerHTML = escapeHtml(written) + '<span class="cursor"></span>';
      i++;
    }, 28);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
}

/* =====================================================================
   SECTION 8 — CERTIFICATE DOWNLOAD (rendered to canvas → PNG)
   ===================================================================== */
document.getElementById("downloadCertBtn").addEventListener("click", () => {
  const cert = document.getElementById("certificate");
  renderCertificateToCanvas(cert).then(canvas => {
    const link = document.createElement("a");
    link.download = "Best-Father-Certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

function renderCertificateToCanvas(el) {
  return new Promise(resolve => {
    const rect = el.getBoundingClientRect();
    const scale = 2;
    const canvas = document.createElement("canvas");
    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);

    // background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = "#D4AF7A";
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);

    ctx.textAlign = "center";
    ctx.fillStyle = "#8A6470";
    ctx.font = "12px Quicksand, sans-serif";
    ctx.fillText("CERTIFICATE OF", rect.width / 2, 60);

    ctx.fillStyle = "#B76E79";
    ctx.font = "italic 28px 'Playfair Display', serif";
    ctx.fillText("World's Best Father", rect.width / 2, 95);

    ctx.fillStyle = "#8A6470";
    ctx.font = "12px Quicksand, sans-serif";
    ctx.fillText("AWARDED TO", rect.width / 2, 130);

    ctx.fillStyle = "#5A3B45";
    ctx.font = "italic 26px 'Cormorant Garamond', serif";
    ctx.fillText(CONTENT.certificateName, rect.width / 2, 165);

    ctx.fillStyle = "#8A6470";
    ctx.font = "13px Quicksand, sans-serif";
    wrapText(ctx, "For endless support, infinite patience,", rect.width / 2, 200);
    wrapText(ctx, "unconditional love & lifetime guidance.", rect.width / 2, 220);

    ctx.font = "20px Caveat, cursive";
    ctx.fillStyle = "#5A3B45";
    ctx.textAlign = "left";
    ctx.fillText("Puja Princi", 40, rect.height - 50);
    ctx.font = "10px Quicksand, sans-serif";
    ctx.fillText("With love", 40, rect.height - 30);

    ctx.textAlign = "right";
    ctx.font = "30px serif";
    ctx.fillText("🏅", rect.width - 40, rect.height - 40);

    resolve(canvas);
  });
}
function wrapText(ctx, text, x, y) { ctx.fillText(text, x, y); }

/* =====================================================================
   SECTION 9 — FINAL SURPRISE: confetti, music toggle, replay
   ===================================================================== */
(function finalSection() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let confettiRunning = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function launchConfetti() {
    const colors = ["#E8A2B8", "#D4AF7A", "#FFD9C2", "#F2A6C0", "#FFFFFF"];
    particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 2,
      vy: 2 + Math.random() * 3,
      size: 4 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vr: (Math.random() - 0.5) * 8
    }));
    if (!confettiRunning) {
      confettiRunning = true;
      requestAnimationFrame(animateConfetti);
    }
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let stillAlive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;
      if (p.y < canvas.height + 20) stillAlive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });
    if (stillAlive) {
      requestAnimationFrame(animateConfetti);
    } else {
      confettiRunning = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  const finalSectionEl = document.getElementById("final-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) launchConfetti();
    });
  }, { threshold: 0.5 });
  observer.observe(finalSectionEl);

  // music toggle
  const musicBtn = document.getElementById("musicToggle");
  const music = document.getElementById("bgMusic");
  let playing = false;
  musicBtn.addEventListener("click", () => {
    if (playing) {
      music.pause();
      musicBtn.textContent = "🔇 Music";
    } else {
      music.play().catch(() => {});
      musicBtn.textContent = "🔊 Music";
    }
    playing = !playing;
  });

  // replay button — scrolls back to top & restarts confetti on revisit
  document.getElementById("replayBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    launchConfetti();
  });
})();
