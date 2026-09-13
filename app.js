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

  ,
  {
    id: "churchill-never-give-in",
    quote: "לעולם אל תיכנעו.",
    original: "Never give in.",
    person: "וינסטון צ'רצ'יל",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "1941",
    meaning: "קריאה להתמדה גם כאשר הנסיבות קשות.",
    story: "בנאום בבית הספר הארו צ'רצ'יל חזר על הקריאה לא להיכנע, למעט לשיקולים של כבוד ושכל ישר.",
    sourceLabel: "International Churchill Society — Harrow School speech",
    source: "https://winstonchurchill.org/resources/speeches/1941-1945-war-leader/never-give-in/"
  },
  {
    id: "jfk-country",
    quote: "אל תשאל מה ארצך יכולה לעשות למענך — שאל מה אתה יכול לעשות למען ארצך.",
    original: "Ask not what your country can do for you—ask what you can do for your country.",
    person: "ג'ון פ. קנדי",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "1961",
    meaning: "אזרחות אינה רק קבלת זכויות ושירותים, אלא גם אחריות ותרומה לחברה.",
    story: "נאמר בנאום ההשבעה של קנדי לנשיאות ארצות הברית.",
    sourceLabel: "John F. Kennedy Presidential Library — Inaugural Address",
    source: "https://www.jfklibrary.org/archives/other-resources/john-f-kennedy-speeches/inaugural-address-19610120"
  },
  {
    id: "lincoln-people",
    quote: "ממשלה של העם, בידי העם ולמען העם.",
    original: "Government of the people, by the people, for the people.",
    person: "אברהם לינקולן",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "1863",
    meaning: "הדמוקרטיה שואבת את סמכותה מן הציבור ונועדה לשרת אותו.",
    story: "המשפט חותם את נאום גטיסברג הקצר והמפורסם של לינקולן.",
    sourceLabel: "Library of Congress — Gettysburg Address",
    source: "https://www.loc.gov/resource/rbpe.24404500/"
  },
  {
    id: "truman-buck",
    quote: "האחריות נעצרת כאן.",
    original: "The Buck Stops Here.",
    person: "הארי ס. טרומן",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "שנות ה־40",
    meaning: "המנהיג אינו יכול להעביר לאחרים את האחריות להחלטותיו.",
    story: "שלט עם המשפט הוצב על שולחנו של הנשיא טרומן והפך מזוהה עמו.",
    sourceLabel: "Harry S. Truman Presidential Library — The Buck Stops Here",
    source: "https://www.trumanlibrary.gov/education/trivia/buck-stops-here-sign"
  },
  {
    id: "roosevelt-arena",
    quote: "הקרדיט שייך לאדם שנמצא באמת בזירה.",
    original: "The credit belongs to the man who is actually in the arena.",
    person: "תאודור רוזוולט",
    category: "אישים מפורסמים",
    status: "מאומת",
    statusClass: "verified",
    year: "1910",
    meaning: "יש ערך רב יותר למי שפועל, מסתכן ומנסה מאשר למי שרק מבקר מן הצד.",
    story: "המשפט הוא חלק מנאום Citizenship in a Republic שנשא רוזוולט בסורבון בפריז.",
    sourceLabel: "Theodore Roosevelt Center — Citizenship in a Republic",
    source: "https://www.theodorerooseveltcenter.org/Research/Digital-Library/Record?libID=o286294"
  },
  {
    id: "gandhi-quotes",
    quote: "חיי הם המסר שלי.",
    original: "My life is my message.",
    person: "מהטמה גנדי",
    category: "אישים מפורסמים",
    status: "מיוחס היטב",
    statusClass: "attributed",
    year: "המאה ה־20",
    meaning: "המעשים ואורח החיים של אדם יכולים לבטא את ערכיו יותר ממילים.",
    story: "האמרה מזוהה מאוד עם גנדי ומסכמת את הדגש שלו על התאמה בין אמונה להתנהגות.",
    sourceLabel: "Gandhi Heritage Portal",
    source: "https://www.gandhiheritageportal.org/"
  },
  {
    id: "socrates-life",
    quote: "חיים שאין בוחנים אותם אינם ראויים לחיותם.",
    original: "The unexamined life is not worth living.",
    person: "סוקרטס, כפי שתועד אצל אפלטון",
    category: "פילוסופיה ומדע",
    status: "מקור עתיק מאומת",
    statusClass: "verified",
    year: "399 לפנה״ס; תועד לאחר מכן",
    meaning: "חשיבה ביקורתית ובחינה עצמית הן חלק מרכזי מחיים אנושיים בעלי משמעות.",
    story: "האמרה מופיעה באפולוגיה של אפלטון, בתיאור משפטו של סוקרטס.",
    sourceLabel: "Perseus Digital Library — Plato, Apology 38a",
    source: "https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Apol.+38a"
  },
  {
    id: "newton-shoulders",
    quote: "אם הרחקתי לראות, הרי זה מפני שעמדתי על כתפי ענקים.",
    original: "If I have seen further it is by standing on the shoulders of Giants.",
    person: "אייזק ניוטון",
    category: "פילוסופיה ומדע",
    status: "מאומת במכתב",
    statusClass: "verified",
    year: "1675",
    meaning: "התקדמות מדעית נשענת על עבודתם והישגיהם של חוקרים קודמים.",
    story: "ניוטון כתב את המשפט במכתב לרוברט הוק. הרעיון עצמו קדום יותר מניוטון.",
    sourceLabel: "The Newton Project — Letter to Robert Hooke",
    source: "https://www.newtonproject.ox.ac.uk/"
  },
  {
    id: "archimedes-eureka",
    quote: "מצאתי!",
    original: "Eureka!",
    person: "ארכימדס",
    category: "פילוסופיה ומדע",
    status: "מסורת עתיקה",
    statusClass: "attributed",
    year: "המאה ה־3 לפנה״ס",
    meaning: "קריאת שמחה בעקבות גילוי או פתרון פתאומי.",
    story: "הסיפור המפורסם על ארכימדס באמבטיה מוכר ממסורת עתיקה מאוחרת יותר; לכן נכון לסמן אותו כמסורת ולא כתיעוד ישיר.",
    sourceLabel: "Encyclopaedia Britannica — Archimedes",
    source: "https://www.britannica.com/biography/Archimedes"
  },
  {
    id: "darwin-adapt",
    quote: "המין שמסוגל להסתגל בצורה הטובה ביותר לסביבה המשתנה הוא ששורד.",
    original: "Survival depends on adaptation to changing conditions.",
    person: "רעיון המזוהה עם תורת האבולוציה של צ'ארלס דרווין",
    category: "פילוסופיה ומדע",
    status: "פרפרזה — לא ציטוט ישיר",
    statusClass: "attributed",
    year: "המאה ה־19",
    meaning: "ברירה טבעית פועלת לפי התאמה לתנאים, לא לפי תפיסה פשוטה של 'החזק ביותר'.",
    story: "הנוסח הפופולרי על 'המין המסתגל ביותר' מיוחס לעיתים לדרווין, אך אינו ציטוט ישיר מכתביו. הוא מוצג כאן בכוונה כפרפרזה.",
    sourceLabel: "Darwin Correspondence Project — Six things Darwin never said",
    source: "https://www.darwinproject.ac.uk/people/about-darwin/six-things-darwin-never-said"
  },
  {
    id: "apollo-failure",
    quote: "יוסטון, הייתה לנו בעיה כאן.",
    original: "Houston, we've had a problem here.",
    person: "ג'ק סוויגרט, אפולו 13",
    category: "אמרות היסטוריות",
    status: "מאומת בהקלטת המשימה",
    statusClass: "verified",
    year: "1970",
    meaning: "דיווח רגוע על תקלה חמורה; המשפט הפך לסמל של התמודדות עם משבר.",
    story: "בניגוד לנוסח הקולנועי המוכר, סוויגרט אמר תחילה 'Okay, Houston, we've had a problem here', ולאחר מכן ג'ים לובל חזר על הדיווח.",
    sourceLabel: "NASA — Apollo 13 Flight Journal",
    source: "https://www.nasa.gov/history/afj/ap13fj/08day3-problem.html"
  },
  {
    id: "uk-motto",
    quote: "אלוהים וזכותי.",
    original: "Dieu et mon droit.",
    person: "המונרך הבריטי",
    category: "מוטואים של מדינות",
    status: "מוטו מלכותי רשמי",
    statusClass: "verified",
    year: "בשימוש מלכותי במשך מאות שנים",
    meaning: "ביטוי היסטורי לסמכותו ולזכותו של הריבון.",
    story: "המוטו הצרפתי מופיע בסמל המלכותי של הממלכה המאוחדת, למעט גרסאות מסוימות הנהוגות בסקוטלנד.",
    sourceLabel: "The Royal Family — Coats of Arms",
    source: "https://www.royal.uk/coats-arms"
  },
  {
    id: "canada-motto",
    quote: "מים עד ים.",
    original: "A Mari Usque Ad Mare.",
    person: "קנדה",
    category: "מוטואים של מדינות",
    status: "רשמי",
    statusClass: "verified",
    year: "1921",
    meaning: "המוטו מתאר את קנדה כמשתרעת מן האוקיינוס האטלנטי ועד האוקיינוס השקט.",
    story: "הביטוי הלטיני מבוסס על פסוק מספר תהילים ונכלל בסמל קנדה.",
    sourceLabel: "Governor General of Canada — Symbols of Canada",
    source: "https://www.gg.ca/en/heraldry/public-register/project/922"
  },
  {
    id: "australia-motto",
    quote: "קדימה אוסטרליה.",
    original: "Advance Australia.",
    person: "אוסטרליה — מוטו היסטורי",
    category: "מוטואים של מדינות",
    status: "היסטורי, לא מוטו לאומי רשמי כיום",
    statusClass: "attributed",
    year: "המאה ה־19 וה־20",
    meaning: "ביטוי של שאיפה להתקדמות לאומית.",
    story: "Advance Australia הופיע בסמלים היסטוריים של אוסטרליה ומוכר גם מן ההמנון, אך כיום אין לאוסטרליה מוטו לאומי רשמי.",
    sourceLabel: "Australian Government — Australian National Symbols",
    source: "https://www.pmc.gov.au/government/australian-national-symbols"
  },
  {
    id: "london-motto",
    quote: "אדוני, כוון אותנו.",
    original: "Domine dirige nos.",
    person: "הסיטי של לונדון",
    category: "מוטואים של ערים",
    status: "רשמי",
    statusClass: "verified",
    year: "מוטו היסטורי",
    meaning: "בקשה להכוונה אלוהית.",
    story: "זהו המוטו של City of London, הליבה ההיסטורית והמוניציפלית של לונדון.",
    sourceLabel: "City of London — Coat of Arms",
    source: "https://www.cityoflondon.gov.uk/about-us/about-the-city-of-london-corporation/coat-of-arms"
  },
  {
    id: "rome-spqr",
    quote: "הסנאט והעם הרומאי.",
    original: "Senatus Populusque Romanus (SPQR).",
    person: "רומא",
    category: "מוטואים של ערים",
    status: "סמל רשמי והיסטורי",
    statusClass: "verified",
    year: "רומא העתיקה; בשימוש גם כיום",
    meaning: "ביטוי המייצג את מוסדות המדינה והאזרחים הרומאים.",
    story: "ראשי התיבות SPQR הופיעו ברומא העתיקה ומשמשים גם בסמלה המודרני של עיריית רומא.",
    sourceLabel: "Roma Capitale",
    source: "https://www.comune.roma.it/"
  },
  {
    id: "veni-vidi",
    quote: "הגורל מסייע לנועזים.",
    original: "Fortune favors the bold.",
    person: "פתגם לטיני עתיק בנוסחים שונים",
    category: "ביטויים לטיניים",
    status: "פתגם עתיק; קיימים נוסחים שונים",
    statusClass: "attributed",
    year: "העת העתיקה",
    meaning: "יוזמה ואומץ עשויים להגדיל את הסיכוי להצלחה.",
    story: "הרעיון מופיע בכמה נוסחים לטיניים עתיקים ולכן לא נכון לייחס את הנוסח האנגלי המודרני לאדם יחיד.",
    sourceLabel: "Perseus Digital Library — Latin texts",
    source: "https://www.perseus.tufts.edu/"
  },
  {
    id: "tempus-fugit",
    quote: "הזמן בורח.",
    original: "Tempus fugit.",
    person: "ביטוי לטיני; מקורו בווירגיליוס",
    category: "ביטויים לטיניים",
    status: "מקור ספרותי עתיק",
    statusClass: "verified",
    year: "המאה ה־1 לפנה״ס",
    meaning: "הזמן חולף במהירות ולכן כדאי להיות מודעים לערכו.",
    story: "הביטוי המודרני הוא קיצור של רעיון המופיע בגאורגיקה של וירגיליוס.",
    sourceLabel: "Perseus Digital Library — Virgil, Georgics",
    source: "https://www.perseus.tufts.edu/hopper/text?doc=Verg.+G.+3"
  },
  {
    id: "errare-humanum",
    quote: "לטעות זה אנושי.",
    original: "Errare humanum est.",
    person: "פתגם לטיני",
    category: "ביטויים לטיניים",
    status: "פתגם מסורתי",
    statusClass: "verified",
    year: "שורשים בעת העתיקה",
    meaning: "טעויות הן חלק טבעי מן החוויה האנושית.",
    story: "הביטוי התגבש במסורת הלטינית מתוך רעיונות דומים אצל מחברים עתיקים; קיימות גרסאות מורחבות שונות.",
    sourceLabel: "Perseus Digital Library",
    source: "https://www.perseus.tufts.edu/"
  },
  {
    id: "aesop-slow",
    quote: "לאט ובהתמדה מנצחים במרוץ.",
    original: "Slow and steady wins the race.",
    person: "מוסר ההשכל המזוהה עם 'הצב והארנב'",
    category: "ספרות ותרבות",
    status: "נוסח מאוחר של מוסר השכל עתיק",
    statusClass: "attributed",
    year: "משל עתיק; הניסוח האנגלי מאוחר",
    meaning: "התמדה עקבית יכולה לגבור על כישרון שאינו מלווה במשמעת.",
    story: "המשפט מזוהה עם משל הצב והארנב המיוחס לאיזופוס, אך זהו ניסוח מאוחר של מוסר ההשכל ולא ציטוט מילולי מאיזופוס.",
    sourceLabel: "Library of Congress — Aesop's Fables",
    source: "https://www.loc.gov/item/11030025/"
  },
  {
    id: "shakespeare-world-stage",
    quote: "כל העולם במה.",
    original: "All the world's a stage.",
    person: "ויליאם שייקספיר",
    category: "ספרות ותרבות",
    status: "מאומת",
    statusClass: "verified",
    year: "סביבות 1599",
    meaning: "החיים מוצגים כמחזה שבו בני האדם ממלאים תפקידים משתנים לאורך חייהם.",
    story: "השורה נאמרת בידי ז'אק במחזה As You Like It.",
    sourceLabel: "Folger Shakespeare Library — As You Like It",
    source: "https://www.folger.edu/explore/shakespeares-works/as-you-like-it/read/"
  },
  {
    id: "shakespeare-be",
    quote: "להיות או לא להיות.",
    original: "To be, or not to be.",
    person: "ויליאם שייקספיר — המלט",
    category: "ספרות ותרבות",
    status: "מאומת",
    statusClass: "verified",
    year: "סביבות 1600",
    meaning: "פתיחת מונולוג שבו המלט מתמודד עם שאלות של קיום, סבל ומוות.",
    story: "אחת השורות המפורסמות ביותר בספרות האנגלית, מתוך המלט, מערכה שלישית.",
    sourceLabel: "Folger Shakespeare Library — Hamlet",
    source: "https://www.folger.edu/explore/shakespeares-works/hamlet/read/"
  },
  {
    id: "tolkien-wander",
    quote: "לא כל המשוטטים אבודים.",
    original: "Not all those who wander are lost.",
    person: "ג'. ר. ר. טולקין",
    category: "ספרות ותרבות",
    status: "מאומת",
    statusClass: "verified",
    year: "1954",
    meaning: "נדודים וחיפוש אינם בהכרח סימן לחוסר כיוון.",
    story: "השורה מופיעה בשיר על אראגורן ב'אחוות הטבעת'.",
    sourceLabel: "J.R.R. Tolkien — The Fellowship of the Ring",
    source: "https://www.tolkienestate.com/"
  },
  {
    id: "scout-do-good-turn",
    quote: "עשה מעשה טוב בכל יום.",
    original: "Do a Good Turn Daily.",
    person: "מסורת הצופים",
    category: "צופים ותנועות",
    status: "עיקרון צופי ותיק",
    statusClass: "verified",
    year: "ראשית המאה ה־20",
    meaning: "לעודד נתינה ועזרה לאחרים כחלק מחיי היום־יום.",
    story: "הרעיון של Good Turn הוא מסורת יסודית בצופיות ונועד להפוך שירות לאחרים להרגל.",
    sourceLabel: "Scouting America — Good Turn",
    source: "https://www.scouting.org/"
  },
  {
    id: "scout-duty",
    quote: "עשה כמיטב יכולתך.",
    original: "Do Your Best.",
    person: "הצופים הצעירים / Cub Scouts",
    category: "צופים ותנועות",
    status: "מוטו צופי ותיק",
    statusClass: "verified",
    year: "המאה ה־20",
    meaning: "הדגש הוא על מאמץ כן ומתמשך ולא על שלמות.",
    story: "Do Your Best מזוהה במיוחד עם מסורת ה־Cub Scouts ומשלים את Be Prepared של הצופים הבוגרים.",
    sourceLabel: "Scouting America — Cub Scouting",
    source: "https://www.scouting.org/programs/cub-scouts/"
  }

];

const categories = ["אישים מפורסמים", "מוטואים של מדינות", "מוטואים של ערים", "אמרות היסטוריות", "פילוסופיה ומדע", "ביטויים לטיניים", "ספרות ותרבות", "צופים ותנועות"];
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