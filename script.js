/* Notes that appear when a highlighted word in the paragraph is tapped. */
const NOTES = {
  vark: {
    title: "VARK",
    body: "Short for Visual, Auditory, Reading/writing and Kinaesthetic. A questionnaire made in 1987 that sorts people by how they prefer to take information in.",
    color: "var(--memory)",
    icon: "list",
  },
  visual: {
    title: "Visual",
    body: "Prefers pictures, diagrams, colour and charts. Often remembers where something was on the page.",
    color: "var(--visual)",
    icon: "eye",
  },
  auditory: {
    title: "Auditory",
    body: "Prefers listening and talking. Remembers explanations, stories and discussions.",
    color: "var(--auditory)",
    icon: "ear",
  },
  reading: {
    title: "Reading & writing",
    body: "Prefers words on a page: lists, notes, definitions and textbooks.",
    color: "var(--reading)",
    icon: "book",
  },
  kinaesthetic: {
    title: "Kinaesthetic",
    body: "Prefers doing: building, moving, experimenting and handling real things.",
    color: "var(--kinaesthetic)",
    icon: "hand",
  },
  encode: {
    title: "Encode",
    body: "Step one of memory. Attention turns what you see or hear into a signal the brain can keep. No attention, no memory.",
    color: "var(--memory)",
    icon: "bolt",
  },
  store: {
    title: "Store",
    body: "Step two. The brain links the new idea to things you already know, which gives it a place to stay.",
    color: "var(--memory)",
    icon: "box",
  },
  retrieve: {
    title: "Retrieve",
    body: "Step three. Pulling a memory back out makes the path to it stronger, so it's easier next time.",
    color: "var(--memory)",
    icon: "bolt",
  },
  spacing: {
    title: "Spaced practice",
    body: "Studying a topic in short sessions spread over days. Forgetting a little between sessions is what makes it stick.",
    color: "var(--accent)",
    icon: "calendar",
  },
  testing: {
    title: "Retrieval practice",
    body: "Closing the book and trying to recall. It feels harder than re-reading, and that difficulty is exactly why it works.",
    color: "var(--accent)",
    icon: "check",
  },
  sleep: {
    title: "Sleep",
    body: "During sleep the brain replays and files the day's learning. Cutting sleep to study more usually loses more than it gains.",
    color: "var(--accent)",
    icon: "moon",
  },
};

const ICONS = {
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  ear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a2 2 0 0 0 2 2h2l5 4V4L7 8H5a2 2 0 0 0-2 2Z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6.5a8 8 0 0 1 0 11"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z"/><path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/></svg>',
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 11.5V4.5a1.5 1.5 0 0 1 3 0V12"/><path d="M14 11.5V6.5a1.5 1.5 0 0 1 3 0V13"/><path d="M17 12.5V9.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L3.3 14a1.6 1.6 0 0 1 2.6-1.8L8 14"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>',
};

/* ---------- Paragraph spotlight ---------- */
const spotlight = document.getElementById("spotlight");
const spotIcon = document.getElementById("spotlight-icon");
const spotTitle = document.getElementById("spotlight-title");
const spotBody = document.getElementById("spotlight-body");
const terms = document.querySelectorAll(".term");

terms.forEach((btn) => {
  const note = NOTES[btn.dataset.key];
  if (note) btn.style.setProperty("--term-color", note.color);
  btn.setAttribute("aria-pressed", "false");
  btn.addEventListener("click", () => showNote(btn));
});

function showNote(btn) {
  const note = NOTES[btn.dataset.key];
  if (!note) return;

  terms.forEach((t) => {
    t.classList.remove("is-active");
    t.setAttribute("aria-pressed", "false");
  });
  btn.classList.add("is-active");
  btn.setAttribute("aria-pressed", "true");

  spotlight.style.setProperty("--spot-color", note.color);
  spotIcon.innerHTML = ICONS[note.icon] || "";
  spotTitle.textContent = note.title;
  spotBody.textContent = note.body;

  spotlight.classList.remove("is-pop");
  void spotlight.offsetWidth; // restart the animation
  spotlight.classList.add("is-pop");
}

/* ---------- Reveal the memory steps on scroll ---------- */
const steps = document.querySelectorAll(".step");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  steps.forEach((s) => io.observe(s));
} else {
  steps.forEach((s) => s.classList.add("is-visible"));
}

/* ---------- Quiz ---------- */
const RESULTS = {
  visual: {
    name: "Visual",
    body: "You go for pictures first. Turning notes into diagrams, timelines or colour-coded pages will feel natural to you.",
    color: "var(--visual)",
  },
  auditory: {
    name: "Auditory",
    body: "You remember what you hear. Explaining a topic out loud to a friend, or to yourself, is a strong move for you.",
    color: "var(--auditory)",
  },
  reading: {
    name: "Reading & writing",
    body: "Words on a page work for you. Rewriting a lesson in your own words, as a list, is your best tool.",
    color: "var(--reading)",
  },
  kinaesthetic: {
    name: "Kinaesthetic",
    body: "You learn by doing. Build it, act it out, or make flashcards you can physically sort.",
    color: "var(--kinaesthetic)",
  },
};

const form = document.getElementById("quiz-form");
const resultBox = document.getElementById("quiz-result");
const resultStyle = document.getElementById("result-style");
const resultBody = document.getElementById("result-body");
const resetBtn = document.getElementById("quiz-reset");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const data = new FormData(form);
  const tally = { visual: 0, auditory: 0, reading: 0, kinaesthetic: 0 };
  for (const value of data.values()) if (value in tally) tally[value] += 1;

  const best = Math.max(...Object.values(tally));
  const winners = Object.keys(tally).filter((k) => tally[k] === best);

  if (winners.length === 1) {
    const r = RESULTS[winners[0]];
    resultStyle.textContent = r.name;
    resultBody.textContent = r.body;
    resultBox.style.setProperty("--r", r.color);
  } else {
    resultStyle.textContent = winners.map((k) => RESULTS[k].name).join(" + ");
    resultBody.textContent =
      "A mix. That's common, and it means you can switch methods depending on the subject.";
    resultBox.style.setProperty("--r", "var(--accent)");
  }

  resultBox.hidden = false;
  resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

resetBtn.addEventListener("click", () => {
  form.reset();
  resultBox.hidden = true;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
});
