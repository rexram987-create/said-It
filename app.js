const quotes = [
  {
    id: "caesar-veni",
    quote: "באתי, ראיתי, ניצחתי.",
    original: "Veni, vidi, vici.",
    person: "יוליוס קיסר",
    category: "אמרות היסטוריות",
    status: "מאומת במקורות עתיקים",
    statusClass: "verified",
    year: "47 לפנה״ס בקירוב",
    meaning: "ניסוח קצר שמבטא ניצחון מהיר ומכריע.",
    story: "האמרה מיוחסת לקיסר לאחר ניצחונו המהיר בקרב זלה באסיה הקטנה. מקורות רומיים עתיקים מתעדים את הביטוי.",
    sourceLabel: "Encyclopaedia Britannica — Julius Caesar",
    source: "https://www.britannica.com/biography/Julius-Caesar-Roman-ruler"
  },
  {
    id: "france-motto",
    quote: "חירות, שוויון, אחווה.",
    original: "Liberté, Égalité, Fraternité.",
    person: "הרפובליקה הצרפתית",
    category: "מוטואים של מדינות",
    status: "רשמי",
    statusClass: "verified",
    year: "המאה ה־19; שורשים במהפכה הצרפתית",
    meaning: "שלושה ערכים המזוהים עם האידיאל הרפובליקני הצרפתי.",
    story: "הביטוי התפתח בתקופת המהפכה הצרפתית והפך למוטו הרשמי של הרפובליקה הצרפתית.",
    sourceLabel: "Élysée — סמלי הרפובליקה הצרפתית",
    source: "https://www.elysee.fr/en/french-presidency/liberty-equality-fraternity"
  },
  {
    id: "usa-epluribus",
    quote: "מתוך רבים — אחד.",
    original: "E pluribus unum.",
    person: "ארצות הברית — המוטו המסורתי שעל החותם הגדול",
    category: "מוטואים של מדינות",
    status: "מאומת",
    statusClass: "verified",
    year: "1782",
    meaning: "איחוד של מדינות ואנשים רבים לישות מדינית אחת.",
    story: "הביטוי מופיע על החותם הגדול של ארצות הברית. חשוב להבדיל: המוטו הלאומי הרשמי בחוק הוא “In God We Trust”.",
    sourceLabel: "U.S. Department of State — Great Seal",
    source: "https://diplomacy.state.gov/the-great-seal/"
  },
  {
    id: "mlk-dream",
    quote: "יש לי חלום.",
    original: "I have a dream.",
    person: "מרטין לותר קינג הבן",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "1963",
    meaning: "קריאה לחברה שבה בני אדם נשפטים כשווים ולא לפי צבע עורם.",
    story: "המשפט מזוהה עם נאומו של קינג במצעד לוושינגטון ב־28 באוגוסט 1963.",
    sourceLabel: "U.S. National Archives — March on Washington",
    source: "https://www.archives.gov/files/press/exhibits/dream-speech.pdf"
  },
  {
    id: "fdr-fear",
    quote: "הדבר היחיד שעלינו לפחד ממנו הוא הפחד עצמו.",
    original: "The only thing we have to fear is fear itself.",
    person: "פרנקלין ד' רוזוולט",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "1933",
    meaning: "פחד משתק עלול להחריף משבר; יש להתמודד איתו באומץ ובפעולה.",
    story: "נאמר בנאום ההשבעה הראשון של רוזוולט בעיצומו של השפל הגדול.",
    sourceLabel: "Franklin D. Roosevelt Presidential Library",
    source: "https://www.fdrlibrary.org/first-inaugural-curriculum-hub"
  },
  {
    id: "armstrong-step",
    quote: "זהו צעד קטן לאדם, זינוק ענק לאנושות.",
    original: "That's one small step for [a] man, one giant leap for mankind.",
    person: "ניל ארמסטרונג",
    category: "אישים מפורסמים",
    status: "מאומת; מילה אחת בהקלטה שנויה במחלוקת",
    statusClass: "attributed",
    year: "1969",
    meaning: "פעולה קטנה של אדם יחיד יכולה לסמל הישג עצום עבור האנושות.",
    story: "ארמסטרונג אמר את המשפט בירידה אל פני הירח במשימת אפולו 11. הוא טען שהתכוון לומר “a man”, אף שה־a אינה נשמעת בבירור בהקלטה.",
    sourceLabel: "NASA — Apollo 11 Lunar Surface Journal",
    source: "https://www.nasa.gov/history/alsj/a11/a11.step.html"
  },
  {
    id: "horace-carpe",
    quote: "נצל את היום.",
    original: "Carpe diem.",
    person: "הורטיוס",
    category: "ביטויים לטיניים",
    status: "מאומת",
    statusClass: "verified",
    year: "23 לפנה״ס בקירוב",
    meaning: "אל תסמוך יותר מדי על המחר; נצל בחוכמה את ההווה.",
    story: "הביטוי מופיע באודה 1.11 של המשורר הרומי הורטיוס. התרגום המילולי קרוב יותר ל“קטוף את היום”.",
    sourceLabel: "Perseus Digital Library — Horace, Odes 1.11",
    source: "https://www.perseus.tufts.edu/hopper/text?doc=Hor.+Od.+1.11"
  },
  {
    id: "descartes-cogito",
    quote: "אני חושב, משמע אני קיים.",
    original: "Cogito, ergo sum.",
    person: "רנה דקארט",
    category: "ביטויים לטיניים",
    status: "מאומת",
    statusClass: "verified",
    year: "1637–1644",
    meaning: "עצם פעולת החשיבה מספקת לאדם ודאות בסיסית בקיומו שלו.",
    story: "ב־1637 דקארט ניסח בצרפתית “Je pense, donc je suis”; הנוסח הלטיני המפורסם הופיע בהמשך בכתביו.",
    sourceLabel: "Stanford Encyclopedia of Philosophy — Descartes",
    source: "https://plato.stanford.edu/entries/descartes/"
  },
  {
    id: "bacon-knowledge",
    quote: "הידע עצמו הוא כוח.",
    original: "Ipsa scientia potestas est.",
    person: "פרנסיס בייקון",
    category: "אמרות היסטוריות",
    status: "מאומת בנוסח הלטיני",
    statusClass: "verified",
    year: "1597",
    meaning: "לידע יש יכולת להעניק לאדם השפעה ויכולת פעולה.",
    story: "הנוסח הלטיני מופיע ב־Meditationes Sacrae של בייקון. באנגלית הוא מוכר בדרך כלל כ־“Knowledge is power”.",
    sourceLabel: "Wikisource — Meditationes Sacrae",
    source: "https://en.wikisource.org/wiki/Meditationes_Sacrae"
  },
  {
    id: "paris-motto",
    quote: "מיטלטלת בגלים אך אינה שוקעת.",
    original: "Fluctuat nec mergitur.",
    person: "פריז",
    category: "מוטואים של ערים",
    status: "רשמי",
    statusClass: "verified",
    year: "מזוהה עם פריז במשך מאות שנים",
    meaning: "העיר עוברת סערות ומשברים, אך נשארת איתנה.",
    story: "זהו המוטו הלטיני של פריז, והוא קשור לסמל הספינה של העיר.",
    sourceLabel: "Ville de Paris — סמלי פריז",
    source: "https://www.paris.fr/pages/les-symboles-de-paris-2366"
  }
  ,
  {
    id: "seuss-read-learn",
    quote: "ככל שתקרא יותר, כך תדע יותר דברים; ככל שתלמד יותר, כך תגיע ליותר מקומות.",
    original: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
    person: "ד״ר סוס",
    category: "ספרות ותרבות",
    status: "מאומת",
    statusClass: "verified",
    year: "1978",
    meaning: "קריאה ולמידה פותחות לאדם אפשרויות חדשות ומרחיבות את עולמו.",
    story: "האמרה מופיעה בספר I Can Read with My Eyes Shut! של ד״ר סוס.",
    sourceLabel: "Dr. Seuss — I Can Read with My Eyes Shut!",
    source: "https://www.seussville.com/"
  },
  {
    id: "seuss-mountains",
    quote: "ילד, אתה עוד תזיז הרים!",
    original: "Kid, you’ll move mountains!",
    person: "ד״ר סוס",
    category: "ספרות ותרבות",
    status: "מאומת",
    statusClass: "verified",
    year: "1990",
    meaning: "עידוד להאמין ביכולת להתמודד עם אתגרים גדולים ולהגיע רחוק.",
    story: "המשפט מופיע בספר Oh, the Places You’ll Go!, אחד מספריו האחרונים והמוכרים של ד״ר סוס.",
    sourceLabel: "Dr. Seuss — Oh, the Places You’ll Go!",
    source: "https://www.seussville.com/"
  },
  {
    id: "scout-be-prepared",
    quote: "היה נכון.",
    original: "Be Prepared.",
    person: "תנועת הצופים — רוברט באדן־פאוול",
    category: "צופים ותנועות",
    status: "מוטו רשמי ומאומת",
    statusClass: "verified",
    year: "1908",
    meaning: "להיות מוכן בגוף ובמחשבה למלא את חובתך ולהתמודד עם מצבים בלתי צפויים.",
    story: "באדן־פאוול הציג את Be Prepared כמוטו של הצופים ב־Scouting for Boys. המוטו נשאר מזוהה עם תנועת הצופים ברחבי העולם.",
    sourceLabel: "World Scouting / Scouting for Boys",
    source: "https://www.scout.org/"
  },
  {
    id: "scout-leave-better",
    quote: "נסה להשאיר את העולם קצת טוב יותר מכפי שמצאת אותו.",
    original: "Try and leave this world a little better than you found it.",
    person: "רוברט באדן־פאוול",
    category: "צופים ותנועות",
    status: "מאומת",
    statusClass: "verified",
    year: "פורסם לאחר מותו ב־1941",
    meaning: "שאיפה שכל אדם יתרום בחייו משהו חיובי לעולם ולחברה.",
    story: "המשפט נכלל במסר הפרידה שבאדן־פאוול הכין לצופים ושפורסם לאחר מותו.",
    sourceLabel: "World Organization of the Scout Movement — Scouting’s History",
    source: "https://www.scout.org/who-we-are/scout-movement/scoutings-history"
  }

];

const categories = ["אישים מפורסמים", "מוטואים של מדינות", "מוטואים של ערים", "אמרות היסטוריות", "ביטויים לטיניים", "ספרות ותרבות", "צופים ותנועות"];
const state = {
  category: null,
  favoritesOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("saidItFavorites") || "[]"))
};

const el = id => document.getElementById(id);
const quoteGrid = el("quoteGrid");
const searchInput = el("searchInput");
const resultCount = el("resultCount");
const emptyState = el("emptyState");
const quoteDialog = el("quoteDialog");
const quizDialog = el("quizDialog");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function saveFavorites() {
  localStorage.setItem("saidItFavorites", JSON.stringify([...state.favorites]));
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("הדפדפן הזה אינו תומך כרגע בהקראה קולית.");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "he-IL";
  speechSynthesis.speak(utterance);
}

function filteredQuotes() {
  const term = searchInput.value.trim().toLowerCase();
  return quotes.filter(item => {
    const matchesCategory = !state.category || item.category === state.category;
    const matchesFavorite = !state.favoritesOnly || state.favorites.has(item.id);
    const haystack = [item.quote, item.original, item.person, item.category, item.meaning, item.story].join(" ").toLowerCase();
    return matchesCategory && matchesFavorite && (!term || haystack.includes(term));
  });
}

function renderCategories() {
  el("categoryList").innerHTML = categories.map(category =>
    `<button class="category-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${state.category === category}">${escapeHtml(category)}</button>`
  ).join("");
}

function renderQuotes() {
  const items = filteredQuotes();
  resultCount.textContent = `${items.length} תוצאות`;
  emptyState.hidden = items.length > 0;

  quoteGrid.innerHTML = items.map(item => {
    const favorite = state.favorites.has(item.id);
    return `
      <article class="quote-card" tabindex="0" data-open="${item.id}" aria-label="פתיחת פרטים על: ${escapeHtml(item.quote)}">
        <div>
          <span class="badge ${item.statusClass}">${escapeHtml(item.status)}</span>
          <p class="quote-text">“${escapeHtml(item.quote)}”</p>
          <p class="quote-original">${escapeHtml(item.original)}</p>
          <p><strong>${escapeHtml(item.person)}</strong></p>
        </div>
        <div>
          <div class="card-meta">
            <span class="badge">${escapeHtml(item.category)}</span>
            <span class="muted">${escapeHtml(item.year)}</span>
          </div>
          <div class="card-actions">
            <button type="button" data-speak="${item.id}" aria-label="הקראת האמרה">🔊 הקראה</button>
            <button type="button" class="favorite ${favorite ? "active" : ""}" data-favorite="${item.id}" aria-pressed="${favorite}">❤ ${favorite ? "נשמר" : "שמור"}</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function openQuote(id) {
  const item = quotes.find(q => q.id === id);
  if (!item) return;
  el("dialogContent").innerHTML = `
    <span class="badge ${item.statusClass}">${escapeHtml(item.status)}</span>
    <h2>“${escapeHtml(item.quote)}”</h2>
    <p class="quote-original">${escapeHtml(item.original)}</p>
    <div class="detail-row"><strong>מי אמר / משתמש</strong>${escapeHtml(item.person)}</div>
    <div class="detail-row"><strong>תקופה</strong>${escapeHtml(item.year)}</div>
    <div class="detail-row"><strong>המשמעות</strong>${escapeHtml(item.meaning)}</div>
    <div class="detail-row"><strong>הסיפור מאחורי האמרה</strong>${escapeHtml(item.story)}</div>
    <div class="detail-row"><strong>מקור</strong><a href="${escapeHtml(item.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.sourceLabel)}</a></div>
    <button class="primary full" type="button" id="dialogSpeak">🔊 הקראת האמרה וההסבר</button>
  `;
  el("dialogSpeak").addEventListener("click", () => speak(`${item.quote}. ${item.meaning}`));
  quoteDialog.showModal();
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
  renderQuotes();
}

function randomQuote() {
  const pool = filteredQuotes().length ? filteredQuotes() : quotes;
  openQuote(pool[Math.floor(Math.random() * pool.length)].id);
}

function startQuiz() {
  const answer = quotes[Math.floor(Math.random() * quotes.length)];
  const others = quotes.filter(q => q.id !== answer.id).sort(() => Math.random() - .5).slice(0, 3);
  const options = [...others, answer].sort(() => Math.random() - .5);

  el("quizContent").innerHTML = `
    <p class="eyebrow">מי אמר את זה?</p>
    <h2>“${escapeHtml(answer.quote)}”</h2>
    <div class="quiz-options">
      ${options.map(option => `<button type="button" data-quiz-answer="${option.id}">${escapeHtml(option.person)}</button>`).join("")}
    </div>
    <p id="quizFeedback" class="quiz-feedback" aria-live="polite"></p>
    <button id="nextQuiz" class="primary full" type="button">שאלה חדשה</button>
  `;

  el("quizContent").querySelectorAll("[data-quiz-answer]").forEach(button => {
    button.addEventListener("click", () => {
      const correct = button.dataset.quizAnswer === answer.id;
      el("quizFeedback").textContent = correct ? "✓ נכון!" : `לא הפעם. התשובה היא: ${answer.person}`;
    });
  });
  el("nextQuiz").addEventListener("click", startQuiz);
  if (!quizDialog.open) quizDialog.showModal();
}

document.addEventListener("click", event => {
  const category = event.target.closest("[data-category]");
  if (category) {
    state.category = state.category === category.dataset.category ? null : category.dataset.category;
    renderCategories();
    renderQuotes();
    return;
  }

  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favorite);
    return;
  }

  const speaker = event.target.closest("[data-speak]");
  if (speaker) {
    event.stopPropagation();
    const item = quotes.find(q => q.id === speaker.dataset.speak);
    if (item) speak(item.quote);
    return;
  }

  const card = event.target.closest("[data-open]");
  if (card && !event.target.closest("button")) openQuote(card.dataset.open);
});

quoteGrid.addEventListener("keydown", event => {
  const card = event.target.closest("[data-open]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openQuote(card.dataset.open);
  }
});

searchInput.addEventListener("input", renderQuotes);
el("clearFilter").addEventListener("click", () => {
  state.category = null;
  state.favoritesOnly = false;
  searchInput.value = "";
  el("favoritesToggle").setAttribute("aria-pressed", "false");
  renderCategories();
  renderQuotes();
});
el("favoritesToggle").addEventListener("click", event => {
  state.favoritesOnly = !state.favoritesOnly;
  event.currentTarget.setAttribute("aria-pressed", String(state.favoritesOnly));
  renderQuotes();
});
el("contrastToggle").addEventListener("click", event => {
  document.body.classList.toggle("high-contrast");
  event.currentTarget.setAttribute("aria-pressed", String(document.body.classList.contains("high-contrast")));
});
el("randomBtn").addEventListener("click", randomQuote);
el("quizBtn").addEventListener("click", startQuiz);

renderCategories();
renderQuotes();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(console.error));
}