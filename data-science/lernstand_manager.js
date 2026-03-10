(function () {
  "use strict";

  var STORAGE_KEY = "asdm-ds-learning-state-v1";
  var PANEL_ID = "ds-learning-panel";
  var TOGGLE_ID = "ds-learning-toggle";
  var FILE_INPUT_ID = "ds-learning-import";
  var CELEBRATION_STYLE_ID = "ds-celebration-style";
  var CELEBRATION_LAYER_ID = "ds-confetti-layer";
  var GLOSSARY_STYLE_ID = "ds-glossary-style";
  var GLOSSARY_TOOLTIP_ID = "ds-glossary-tooltip";
  var EXERCISE_STYLE_ID = "ds-exercise-style";
  var LANG_STORAGE_KEY = "asdm-ds-language";
  var LANG_SWITCHER_ID = "ds-language-switcher";
  var LANG_STYLE_ID = "ds-language-style";
  var HEADER_BACK_LINK_ID = "ds-header-back-link";
  var HEADER_RANK_ID = "ds-header-rank";
  var ACTIVE_LANG = "de";
  var TEXT_NODE_ORIGINALS = new WeakMap();
  var IS_APPLYING_LANGUAGE = false;
  var KNOWN_PATTERNS = [
    /^asdm-/i,
    /^ds-/i,
    /featureengineering/i,
    /feature_engineering/i,
    /gradient/i,
    /bias/i,
    /variance/i,
    /varianz/i,
    /linear/i,
    /regression/i,
    /regularization/i,
    /matrix/i,
    /matmul/i,
    /knn/i,
    /klassifikation/i,
    /distanz/i,
    /predictive/i,
    /lernkompass/i
  ];

  function storageAvailable() {
    try {
      var probe = "__ds_learning_probe__";
      window.localStorage.setItem(probe, "1");
      window.localStorage.removeItem(probe);
      return true;
    } catch (error) {
      return false;
    }
  }

  var HAS_STORAGE = storageAvailable();

  function ensureCelebrationStyles() {
    if (document.getElementById(CELEBRATION_STYLE_ID)) {
      return;
    }
    var style = document.createElement("style");
    style.id = CELEBRATION_STYLE_ID;
    style.textContent = ""
      + "#" + CELEBRATION_LAYER_ID + "{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:140}"
      + ".ds-confetti-piece{position:absolute;top:-20px;width:10px;height:14px;border-radius:3px;opacity:.9;animation:ds-confetti-fall var(--ds-confetti-duration,1920ms) linear forwards}"
      + "@keyframes ds-confetti-fall{0%{transform:translateY(-20px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translateY(100vh) rotate(480deg);opacity:0}}";
    document.head.appendChild(style);
  }

  function ensureCelebrationLayer() {
    ensureCelebrationStyles();
    var layer = document.getElementById(CELEBRATION_LAYER_ID);
    if (layer) {
      return layer;
    }
    layer = document.createElement("div");
    layer.id = CELEBRATION_LAYER_ID;
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
    return layer;
  }

  function launchCelebration(options) {
    var settings = options || {};
    var layer = ensureCelebrationLayer();
    var colors = Array.isArray(settings.colors) && settings.colors.length
      ? settings.colors
      : ["#631832", "#173262", "#4F7A6A", "#9A6B4A"];
    var pieceCount = Number(settings.pieceCount) || 20;
    var duration = Math.max(600, Number(settings.duration) || 1920);

    for (var index = 0; index < pieceCount; index += 1) {
      var piece = document.createElement("span");
      piece.className = "ds-confetti-piece";
      piece.style.left = (Math.random() * 100) + "%";
      piece.style.background = colors[index % colors.length];
      piece.style.animationDelay = (Math.random() * 0.42) + "s";
      piece.style.setProperty("--ds-confetti-duration", duration + "ms");
      layer.appendChild(piece);
      window.setTimeout((function (node) {
        return function () {
          node.remove();
        };
      })(piece), duration + 500);
    }
  }

  window.DataScienceCelebration = window.DataScienceCelebration || {};
  window.DataScienceCelebration.launch = launchCelebration;

  function ensureGlossaryStyles() {
    if (document.getElementById(GLOSSARY_STYLE_ID)) {
      return;
    }
    var style = document.createElement("style");
    style.id = GLOSSARY_STYLE_ID;
    style.textContent = ""
      + ".glossary-term{display:inline-flex;align-items:center;gap:4px;padding:0 2px;border:0;background:none;color:#173262;font:inherit;font-weight:700;line-height:inherit;cursor:help;text-decoration:underline dotted rgba(23,50,98,.5);text-underline-offset:3px}"
      + ".glossary-term::after{content:\"?\";display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:999px;background:rgba(23,50,98,.1);color:#631832;font-size:11px;font-weight:800;flex:0 0 16px}"
      + ".glossary-term.is-open{color:#631832}"
      + "#" + GLOSSARY_TOOLTIP_ID + "{position:fixed;z-index:141;max-width:min(320px,calc(100vw - 24px));padding:12px 14px;border-radius:14px;border:1px solid rgba(99,24,50,.18);background:rgba(255,255,255,.98);color:#231A24;box-shadow:0 18px 36px rgba(35,26,36,.16);font:500 14px/1.45 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif}"
      + "#" + GLOSSARY_TOOLTIP_ID + "[hidden]{display:none}"
      + "#" + GLOSSARY_TOOLTIP_ID + " strong{display:block;margin-bottom:4px;color:#631832}";
    document.head.appendChild(style);
  }

  function ensureExerciseStyles() {
    if (document.getElementById(EXERCISE_STYLE_ID)) {
      return;
    }
    var style = document.createElement("style");
    style.id = EXERCISE_STYLE_ID;
    style.textContent = ""
      + ".exercise-provenance{display:inline-flex;align-items:center;gap:6px;margin:0 0 8px;padding:6px 10px;border-radius:999px;background:rgba(23,50,98,.08);color:#173262;font:800 12px/1.2 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif;letter-spacing:.01em}"
      + ".exercise-definition{margin:8px 0 0;color:#5f5560;font:600 14px/1.5 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif}"
      + ".interpret-questions{margin-top:10px;padding:12px 14px;border:1px solid rgba(99,24,50,.12);border-radius:14px;background:rgba(248,250,252,.92)}"
      + ".interpret-questions p{margin:6px 0;color:#231A24}"
      + ".interpret-questions strong{color:#631832}";
    document.head.appendChild(style);
  }

  function exerciseText(card, name, fallbackDe, fallbackEn) {
    var de = card.getAttribute("data-" + name + "-de");
    var en = card.getAttribute("data-" + name + "-en");
    if (ACTIVE_LANG === "en") {
      return en || de || fallbackEn || fallbackDe || "";
    }
    return de || en || fallbackDe || fallbackEn || "";
  }

  function ensureExerciseProvenance(card) {
    var instruction = card.querySelector(".exercise-instruction");
    if (!instruction) {
      return;
    }
    var tag = card.querySelector(".exercise-provenance");
    if (!tag) {
      tag = document.createElement("div");
      tag.className = "exercise-provenance";
      instruction.parentNode.insertBefore(tag, instruction);
    }
    tag.textContent = ACTIVE_LANG === "en" ? "Simplified from the notebook." : "Aus dem Notebook vereinfacht.";
  }

  function ensureExerciseDefinition(card) {
    var positiveDe = card.getAttribute("data-positive-de");
    var positiveEn = card.getAttribute("data-positive-en");
    var negativeDe = card.getAttribute("data-negative-de");
    var negativeEn = card.getAttribute("data-negative-en");
    if (!positiveDe && !positiveEn && !negativeDe && !negativeEn) {
      return;
    }

    var context = card.querySelector(".exercise-context");
    if (!context) {
      return;
    }
    var note = card.querySelector(".exercise-definition");
    if (!note) {
      note = document.createElement("p");
      note.className = "exercise-definition";
      context.insertAdjacentElement("afterend", note);
    }
    var positive = ACTIVE_LANG === "en" ? (positiveEn || positiveDe || "class 1") : (positiveDe || positiveEn || "Klasse 1");
    var negative = ACTIVE_LANG === "en" ? (negativeEn || negativeDe || "class 0") : (negativeDe || negativeEn || "Klasse 0");
    note.textContent = ACTIVE_LANG === "en"
      ? "In this exercise, class 1 means: " + positive + ". Class 0 means: " + negative + "."
      : "In diesem Übungsblock bedeutet Klasse 1: " + positive + ". Klasse 0 bedeutet: " + negative + ".";
  }

  function buildInterpretationQuestions(card) {
    var type = card.getAttribute("data-interpret-type") || "generic";
    var q1 = exerciseText(
      card,
      "interpret-q1",
      "Was heißt dieses Ergebnis in unserem Beispiel als ganzer Satz?",
      "What does this result mean in our example as a full sentence?"
    );
    var q2;

    if (card.hasAttribute("data-interpret-q2-de") || card.hasAttribute("data-interpret-q2-en")) {
      q2 = exerciseText(card, "interpret-q2", "", "");
    } else if (type === "classification") {
      var fp = ACTIVE_LANG === "en"
        ? (card.getAttribute("data-fp-en") || card.getAttribute("data-fp-de") || "a false positive")
        : (card.getAttribute("data-fp-de") || card.getAttribute("data-fp-en") || "ein False Positive");
      var fn = ACTIVE_LANG === "en"
        ? (card.getAttribute("data-fn-en") || card.getAttribute("data-fn-de") || "a false negative")
        : (card.getAttribute("data-fn-de") || card.getAttribute("data-fn-en") || "ein False Negative");
      q2 = ACTIVE_LANG === "en"
        ? "What would be worse here: " + fp + " or " + fn + " - and why?"
        : "Was wäre hier schlimmer: " + fp + " oder " + fn + " - und warum?";
    } else if (type === "multiclass") {
      q2 = ACTIVE_LANG === "en"
        ? "Which class would probably come second here, and what would that say about the certainty of the decision?"
        : "Welche Klasse läge hier vermutlich auf Platz zwei, und was sagt das über die Sicherheit der Entscheidung?";
    } else {
      q2 = ACTIVE_LANG === "en"
        ? "Which setting, threshold or next check would you try next if this result was not good enough yet?"
        : "Welche Stellschraube, welcher Threshold oder welcher nächste Prüfschritt wäre naheliegend, wenn das Ergebnis noch nicht gut genug ist?";
    }

    return { q1: q1, q2: q2 };
  }

  function ensureExerciseInterpretation(card) {
    var solution = card.querySelector(".solution");
    if (!solution) {
      return;
    }
    var questions = buildInterpretationQuestions(card);
    var block = solution.querySelector(".interpret-questions");
    if (!block) {
      block = document.createElement("div");
      block.className = "interpret-questions";
      solution.appendChild(block);
    }
    block.innerHTML = ""
      + "<p><strong>" + (ACTIVE_LANG === "en" ? "Interpretation 1:" : "Deutung 1:") + "</strong> " + questions.q1 + "</p>"
      + "<p><strong>" + (ACTIVE_LANG === "en" ? "Interpretation 2:" : "Deutung 2:") + "</strong> " + questions.q2 + "</p>";
  }

  function enhanceExerciseCards() {
    ensureExerciseStyles();
    document.querySelectorAll(".exercise-card").forEach(function (card) {
      ensureExerciseProvenance(card);
      ensureExerciseDefinition(card);
      ensureExerciseInterpretation(card);
    });
  }

  function getStoredLanguage() {
    if (!HAS_STORAGE) {
      return "de";
    }
    var stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "en" ? "en" : "de";
  }

  function setStoredLanguage(lang) {
    ACTIVE_LANG = lang === "en" ? "en" : "de";
    if (HAS_STORAGE) {
      window.localStorage.setItem(LANG_STORAGE_KEY, ACTIVE_LANG);
    }
    document.documentElement.lang = ACTIVE_LANG;
  }

  function pageI18nConfig() {
    return window.DataSciencePageI18n || {};
  }

  function exactTranslations(lang) {
    var pageExact = pageI18nConfig().exact || {};
    var base = {
      "Startseite": "Home",
      "Schritte": "Steps",
      "Fortschritt": "Progress",
      "Badges": "Badges",
      "Kontext": "Context",
      "Navigation im Pfad": "Path navigation",
      "Gesamtfortschritt": "Overall progress",
      "Kapitelnavigation": "Chapter navigation",
      "Breadcrumb": "Breadcrumb",
      "Fortschritt zurücksetzen": "Reset progress",
      "Zum nächsten offenen Schritt": "Go to the next open step",
      "Lernstand": "Learning progress",
      "Lernstand sichern": "Save learning progress",
      "Backup exportieren": "Export backup",
      "Backup importieren": "Import backup",
      "Zur letzten Stelle": "Go to last position",
      "Noch offen.": "Still open.",
      "Erledigt": "Done",
      "Offen": "Open",
      "bereit": "ready",
      "Weiter": "Continue",
      "Zurück": "Back",
      "Vertiefung": "Deep dive",
      "Modulnavigation": "Module navigation",
      "Data Science Lernpfad": "Data Science learning path",
      "Kapitelansicht": "Chapter view",
      "Aktiver Abschnitt": "Active section",
      "Aktives Modul": "Active module",
      "Leitbild": "Guiding idea",
      "Leitmetapher": "Guiding metaphor",
      "Alltagsgeschichte": "Everyday story",
      "Alltagsszene": "Everyday scene",
      "Alltagsanalogie": "Everyday analogy",
      "Theorie-Karte": "Theory card",
      "ML-Sprache": "ML language",
      "Interaktive Demo": "Interactive demo",
      "Interaktion": "Interaction",
      "Quiz": "Quiz",
      "Übung": "Exercise",
      "Lernziele": "Learning goals",
      "Code-Beispiel": "Code example",
      "Badge-Vergabe": "Badge reward",
      "Lernpfad danach": "Next in the learning path",
      "Nächster Schritt": "Next step",
      "Zurück zur Übersicht": "Back to overview",
      "Gesamtfortschritt im Kapitel": "Overall chapter progress",
      "Gesamtfortschritt": "Overall progress",
      "Was lernst du in diesem Kapitel?": "What will you learn in this chapter?",
      "Worum geht es in diesem Kapitel?": "What is this chapter about?",
      "Was lernst du in 10 Minuten pro Abschnitt?": "What will you learn in 10 minutes per section?",
      "Zum nächsten offenen Schritt": "Go to the next open step",
      "Zum nächsten offenen Modul": "Go to the next open module",
      "Zum aktuellen Modul": "Go to the current module",
      "Punkte gesammelt": "points earned",
      "Noch nicht abgeschlossen": "Not completed yet",
      "ca. 15 Min.": "about 15 min",
      "ca. 20 Min.": "about 20 min",
      "ca. 30 Min.": "about 30 min"
    };
    if (lang !== "en") {
      return pageExact;
    }
    return Object.assign({}, base, pageExact);
  }

  function patternTranslations() {
    var pagePatterns = pageI18nConfig().patterns || [];
    return [
      {
        pattern: /^(\d+)\s+von\s+(\d+)\s+Schritten erledigt$/,
        replace: function (_, current, total) { return current + " of " + total + " steps completed"; }
      },
      {
        pattern: /^(\d+)\s+Punkte$/,
        replace: function (_, points) { return points + " points"; }
      },
      {
        pattern: /^(\d+)\s+Prozent abgeschlossen$/,
        replace: function (_, percent) { return percent + " percent completed"; }
      },
      {
        pattern: /^Rang:\s+(.+)$/,
        replace: function (_, label) { return "Rank: " + label; }
      },
      {
        pattern: /^Schritt\s+(\d+)\s*:\s*(.+)$/,
        replace: function (_, step, label) { return "Step " + step + ": " + label; }
      },
      {
        pattern: /^Schritt\s+(\d+)\s*·\s*(.+)$/,
        replace: function (_, step, label) { return "Step " + step + " · " + label; }
      },
      {
        pattern: /^Modul\s+(\d+)\s+von\s+(\d+)$/,
        replace: function (_, current, total) { return "Module " + current + " of " + total; }
      }
    ].concat(pagePatterns);
  }

  function translateString(text, lang) {
    var normalized = String(text || "");
    if (lang !== "en") {
      return normalized;
    }

    var exact = exactTranslations(lang);
    if (Object.prototype.hasOwnProperty.call(exact, normalized.trim())) {
      return normalized.replace(normalized.trim(), exact[normalized.trim()]);
    }

    var translated = normalized;
    patternTranslations().some(function (entry) {
      if (!entry.pattern.test(normalized.trim())) {
        return false;
      }
      translated = normalized.replace(entry.pattern, entry.replace);
      return true;
    });
    return translated;
  }

  function translateTrimmed(text, lang) {
    var original = String(text || "");
    var trimmed = original.trim();
    if (!trimmed) {
      return original;
    }
    var translated = lang === "de" ? trimmed : translateString(trimmed, "en");
    if (translated === trimmed) {
      return original;
    }
    var leadingMatch = original.match(/^\s*/);
    var trailingMatch = original.match(/\s*$/);
    var leading = leadingMatch ? leadingMatch[0] : "";
    var trailing = trailingMatch ? trailingMatch[0] : "";
    return leading + translated + trailing;
  }

  function shouldSkipTranslation(element) {
    return !element
      || element.closest("code, pre, script, style, textarea, svg, math, .katex, .glossary-term")
      || element.isContentEditable;
  }

  function containsInlineMarkup(value) {
    return /<\/?[a-z][\w:-]*(\s[^>]*)?>/i.test(String(value || ""));
  }

  function applyExplicitTranslation(element, lang) {
    var htmlKey = lang === "en" ? "i18nHtmlEn" : "i18nHtmlDe";
    var textKey = lang === "en" ? "i18nEn" : "i18nDe";
    var ariaKey = lang === "en" ? "i18nAriaLabelEn" : "i18nAriaLabelDe";
    var titleKey = lang === "en" ? "i18nTitleEn" : "i18nTitleDe";
    var placeholderKey = lang === "en" ? "i18nPlaceholderEn" : "i18nPlaceholderDe";
    var valueKey = lang === "en" ? "i18nValueEn" : "i18nValueDe";

    if (element.dataset[htmlKey]) {
      element.innerHTML = element.dataset[htmlKey];
      return true;
    }
    if (element.dataset[textKey]) {
      if (containsInlineMarkup(element.dataset[textKey])) {
        element.innerHTML = element.dataset[textKey];
      } else {
        element.textContent = element.dataset[textKey];
      }
      return true;
    }
    if (element.dataset[ariaKey]) {
      element.setAttribute("aria-label", element.dataset[ariaKey]);
    }
    if (element.dataset[titleKey]) {
      element.setAttribute("title", element.dataset[titleKey]);
    }
    if (element.dataset[placeholderKey]) {
      element.setAttribute("placeholder", element.dataset[placeholderKey]);
    }
    if (element.dataset[valueKey] && "value" in element) {
      element.value = element.dataset[valueKey];
    }
    return false;
  }

  function applyGenericTranslation(element, lang) {
    if (shouldSkipTranslation(element) || element.children.length > 0) {
      return;
    }
    var original = element.getAttribute("data-ds-original-text");
    if (!original) {
      original = element.textContent;
      element.setAttribute("data-ds-original-text", original);
    }
    element.textContent = lang === "de" ? original : translateString(original, "en");
  }

  function applyTextNodeTranslations(lang) {
    if (!document.body || !document.createTreeWalker) {
      return;
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node || !node.parentElement) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!String(node.nodeValue || "").trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        if (shouldSkipTranslation(node.parentElement)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.parentElement.closest("[data-i18n-de], [data-i18n-en], [data-i18n-html-de], [data-i18n-html-en]")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var textNode = walker.nextNode();
    while (textNode) {
      var original = TEXT_NODE_ORIGINALS.get(textNode);
      if (!original) {
        original = textNode.nodeValue;
        TEXT_NODE_ORIGINALS.set(textNode, original);
      }
      textNode.nodeValue = lang === "de" ? original : translateTrimmed(original, "en");
      textNode = walker.nextNode();
    }
  }

  function applyMetaTranslations(lang) {
    var config = pageI18nConfig();
    if (config.title && config.title[lang]) {
      document.title = config.title[lang];
    }
    var description = document.querySelector('meta[name="description"]');
    if (description && config.description && config.description[lang]) {
      description.setAttribute("content", config.description[lang]);
    }
  }

  function applyLanguage(lang) {
    if (IS_APPLYING_LANGUAGE) {
      return;
    }
    IS_APPLYING_LANGUAGE = true;
    try {
      setStoredLanguage(lang);
      applyMetaTranslations(ACTIVE_LANG);
      document.querySelectorAll("[data-i18n-de], [data-i18n-en], [data-i18n-html-de], [data-i18n-html-en], [data-i18n-aria-label-de], [data-i18n-aria-label-en], [data-i18n-title-de], [data-i18n-title-en], [data-i18n-placeholder-de], [data-i18n-placeholder-en], [data-i18n-value-de], [data-i18n-value-en]")
        .forEach(function (element) {
          applyExplicitTranslation(element, ACTIVE_LANG);
        });

      document.querySelectorAll("body *").forEach(function (element) {
        if (element.matches("[data-i18n-de], [data-i18n-en], [data-i18n-html-de], [data-i18n-html-en]")) {
          return;
        }
        applyGenericTranslation(element, ACTIVE_LANG);
      });
      applyTextNodeTranslations(ACTIVE_LANG);
      enhanceExerciseCards();

      var switcher = document.getElementById(LANG_SWITCHER_ID);
      if (switcher) {
        switcher.querySelectorAll("button[data-lang]").forEach(function (button) {
          button.classList.toggle("is-active", button.getAttribute("data-lang") === ACTIVE_LANG);
          button.setAttribute("aria-pressed", button.getAttribute("data-lang") === ACTIVE_LANG ? "true" : "false");
        });
      }

      syncHeaderUtilities();
      window.dispatchEvent(new CustomEvent("ds-language-change", { detail: { lang: ACTIVE_LANG } }));
    } finally {
      IS_APPLYING_LANGUAGE = false;
    }
  }

  function ensureLanguageStyles() {
    if (document.getElementById(LANG_STYLE_ID)) {
      return;
    }
    var style = document.createElement("style");
    style.id = LANG_STYLE_ID;
    style.textContent = ""
      + "#" + LANG_SWITCHER_ID + "{display:inline-flex;align-items:center;gap:8px;padding:6px 8px;border:1px solid rgba(99,24,50,.14);border-radius:999px;background:rgba(255,255,255,.92);box-shadow:0 10px 24px rgba(35,26,36,.08)}"
      + "#" + LANG_SWITCHER_ID + " button{display:inline-flex;align-items:center;justify-content:center;width:40px;height:34px;border:0;border-radius:999px;background:transparent;color:#231A24;font:700 18px/1 inherit;cursor:pointer}"
      + "#" + LANG_SWITCHER_ID + " button.is-active{background:linear-gradient(135deg,#631832,#173262);color:#fff}"
      + "#" + LANG_SWITCHER_ID + " .ds-lang-label{font:700 12px/1.2 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif;color:#5f5560;padding-right:2px}"
      + "#ds-header-utility-row{display:flex;justify-content:flex-end;align-items:center;gap:12px;flex-wrap:wrap}"
      + "#ds-header-tools{display:flex;align-items:center;justify-content:flex-end;gap:10px;flex-wrap:wrap;width:100%}"
      + ".header-shell #" + LANG_SWITCHER_ID + ", .sticky-shell #" + LANG_SWITCHER_ID + "{align-self:flex-start}"
      + "#" + HEADER_BACK_LINK_ID + ",#" + HEADER_RANK_ID + "{display:inline-flex;align-items:center;gap:8px;min-height:46px;padding:9px 14px;border-radius:999px;border:1px solid rgba(99,24,50,.14);background:rgba(255,255,255,.92);box-shadow:0 10px 24px rgba(35,26,36,.08);color:#231A24;text-decoration:none}"
      + "#" + HEADER_BACK_LINK_ID + "{font:700 14px/1.2 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif}"
      + "#" + HEADER_RANK_ID + "{font:700 14px/1.2 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif}"
      + "#" + HEADER_RANK_ID + " strong{color:#631832;font:800 12px/1.1 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif;text-transform:uppercase;letter-spacing:.04em}"
      + "#" + HEADER_RANK_ID + " span{white-space:nowrap}"
      + "@media (max-width:720px){#" + LANG_SWITCHER_ID + "{padding:5px 6px}#" + LANG_SWITCHER_ID + " button{width:36px;height:32px}#ds-header-tools{justify-content:flex-start}#" + HEADER_BACK_LINK_ID + ",#" + HEADER_RANK_ID + "{min-height:42px;padding:8px 12px}}";
    document.head.appendChild(style);
  }

  function headerUtilityHost() {
    return document.querySelector(".sticky-top .button-row")
      || document.querySelector(".header-shell .button-row")
      || document.querySelector(".sticky-top")
      || document.querySelector(".header-shell")
      || document.querySelector("header")
      || document.body;
  }

  function ensureHeaderTools() {
    var header = headerShell();
    var tools = document.getElementById("ds-header-tools");
    if (tools) {
      return tools;
    }
    if (header) {
      var utilityRow = document.getElementById("ds-header-utility-row");
      if (!utilityRow) {
        utilityRow = document.createElement("div");
        utilityRow.id = "ds-header-utility-row";
        var progressLabel = header.querySelector(".progress-label");
        var progressTrack = header.querySelector(".progress-track");
        if (progressLabel) {
          header.insertBefore(utilityRow, progressLabel);
        } else if (progressTrack) {
          header.insertBefore(utilityRow, progressTrack);
        } else {
          header.appendChild(utilityRow);
        }
      }
      tools = document.createElement("div");
      tools.id = "ds-header-tools";
      utilityRow.appendChild(tools);
      return tools;
    }
    var host = headerUtilityHost();
    if (!host || host === document.body) {
      return null;
    }
    tools = document.createElement("div");
    tools.id = "ds-header-tools";
    host.appendChild(tools);
    return tools;
  }

  function headerShell() {
    return document.querySelector(".sticky-shell")
      || document.querySelector(".header-shell")
      || document.querySelector("header");
  }

  function createLanguageSwitcher() {
    if (document.getElementById(LANG_SWITCHER_ID)) {
      return;
    }
    ensureLanguageStyles();
    var host = ensureHeaderTools() || headerUtilityHost();
    if (!host) {
      return;
    }
    var switcher = document.createElement("div");
    switcher.id = LANG_SWITCHER_ID;
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Sprache wechseln");
    switcher.innerHTML = ""
      + "<span class=\"ds-lang-label\">Lang</span>"
      + "<button type=\"button\" data-lang=\"de\" aria-label=\"Auf Deutsch anzeigen\" title=\"Deutsch\">🇩🇪</button>"
      + "<button type=\"button\" data-lang=\"en\" aria-label=\"Show in English\" title=\"English\">🇬🇧</button>";
    switcher.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-lang]");
      if (!button) {
        return;
      }
      applyLanguage(button.getAttribute("data-lang"));
    });
    host.appendChild(switcher);
  }

  function orderHeaderTools() {
    var tools = document.getElementById("ds-header-tools");
    if (!tools) {
      return;
    }

    [
      document.getElementById(HEADER_BACK_LINK_ID),
      document.getElementById(HEADER_RANK_ID),
      document.getElementById(TOGGLE_ID),
      document.getElementById(LANG_SWITCHER_ID)
    ].forEach(function (node) {
      if (node) {
        tools.appendChild(node);
      }
    });
  }

  function findBackLinkSource() {
    var selectors = [
      ".sticky-shell a[href]",
      ".header-shell a[href]",
      "header a[href]",
      "main a[href]",
      "#sidebar a[href]",
      "a[href]"
    ];
    var links = [];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (link) {
        if (links.indexOf(link) === -1) {
          links.push(link);
        }
      });
    });

    return links.find(function (link) {
      var text = String(link.textContent || "").trim();
      var href = link.getAttribute("href") || "";
      if (!href || href.charAt(0) === "#" || /mailto:|tel:|javascript:/i.test(href)) {
        return false;
      }
      return /^(←\s*)?(Zurück|Zurueck|Back)\b/i.test(text);
    }) || null;
  }

  function findRankSource() {
    var selectors = [
      "#rank-label",
      "#stage-rank-label",
      "#game-rank",
      "#sidebar-rank",
      "#hero-rank"
    ];
    var source = null;

    selectors.some(function (selector) {
      source = document.querySelector(selector);
      return Boolean(source);
    });
    if (source) {
      return source;
    }

    return Array.prototype.find.call(document.querySelectorAll("strong,span,p,div"), function (node) {
      var text = String(node.textContent || "").trim();
      return /^Rang:\s+/i.test(text) || /^Rank:\s+/i.test(text);
    }) || null;
  }

  function normalizedRankText(text) {
    var value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value) {
      return ACTIVE_LANG === "en" ? "Rank: Beginner" : "Rang: Anfänger";
    }
    if (/^(Rang|Rank):/i.test(value)) {
      return value;
    }
    return ACTIVE_LANG === "en" ? "Rank: " + value : "Rang: " + value;
  }

  function isHeaderSource(node) {
    if (!node || !node.closest) {
      return false;
    }
    return Boolean(node.closest(".sticky-shell, .header-shell, header"));
  }

  function hideOriginalHeaderSource(node) {
    if (!node || !isHeaderSource(node)) {
      return;
    }
    node.hidden = true;
    node.setAttribute("aria-hidden", "true");
    if (node.matches("a,button")) {
      node.setAttribute("tabindex", "-1");
    }
  }

  function ensureHeaderBackLink() {
    var host = ensureHeaderTools() || headerUtilityHost();
    if (!host || host === document.body) {
      return;
    }

    var source = findBackLinkSource();
    if (!source) {
      return;
    }

    var backLink = document.getElementById(HEADER_BACK_LINK_ID);
    if (!backLink) {
      backLink = source.cloneNode(true);
      backLink.id = HEADER_BACK_LINK_ID;
      backLink.className = "";
      host.appendChild(backLink);
    }

    backLink.setAttribute("href", source.getAttribute("href"));
    backLink.textContent = String(source.textContent || "").replace(/\s+/g, " ").trim();
    if (source.hasAttribute("data-i18n-de")) {
      backLink.setAttribute("data-i18n-de", source.getAttribute("data-i18n-de"));
    }
    if (source.hasAttribute("data-i18n-en")) {
      backLink.setAttribute("data-i18n-en", source.getAttribute("data-i18n-en"));
    }
    hideOriginalHeaderSource(source);
  }

  function ensureHeaderRank() {
    var host = ensureHeaderTools() || headerUtilityHost();
    if (!host || host === document.body) {
      return;
    }

    var source = findRankSource();
    if (!source) {
      return;
    }

    var rankChip = document.getElementById(HEADER_RANK_ID);
    if (!rankChip) {
      rankChip = document.createElement("div");
      rankChip.id = HEADER_RANK_ID;
      rankChip.setAttribute("role", "status");
      rankChip.setAttribute("aria-live", "polite");
      rankChip.innerHTML = "<strong data-i18n-de=\"Rang\" data-i18n-en=\"Rank\">Rang</strong><span></span>";
      host.appendChild(rankChip);
    }

    function updateRank() {
      rankChip.querySelector("span").textContent = normalizedRankText(source.textContent);
    }

    updateRank();
    hideOriginalHeaderSource(source);
    if (source.dataset.dsHeaderRankObserved === "true") {
      return;
    }
    source.dataset.dsHeaderRankObserved = "true";
    if (window.MutationObserver) {
      var observer = new MutationObserver(updateRank);
      observer.observe(source, { childList: true, characterData: true, subtree: true });
    }
  }

  function syncHeaderUtilities() {
    ensureHeaderBackLink();
    ensureHeaderRank();
    orderHeaderTools();
  }

  window.DataScienceI18n = window.DataScienceI18n || {};
  window.DataScienceI18n.apply = applyLanguage;
  window.DataScienceI18n.refresh = function () {
    applyLanguage(ACTIVE_LANG);
  };

  function ensureGlossaryTooltip() {
    ensureGlossaryStyles();
    var tooltip = document.getElementById(GLOSSARY_TOOLTIP_ID);
    if (tooltip) {
      return tooltip;
    }
    tooltip = document.createElement("div");
    tooltip.id = GLOSSARY_TOOLTIP_ID;
    tooltip.hidden = true;
    tooltip.setAttribute("role", "tooltip");
    document.body.appendChild(tooltip);
    return tooltip;
  }

  function closeGlossaryTooltip() {
    var tooltip = document.getElementById(GLOSSARY_TOOLTIP_ID);
    if (tooltip) {
      tooltip.hidden = true;
    }
    document.querySelectorAll(".glossary-term.is-open").forEach(function (element) {
      element.classList.remove("is-open");
      element.setAttribute("aria-expanded", "false");
    });
  }

  function openGlossaryTooltip(trigger) {
    if (!trigger) {
      return;
    }
    var tooltip = ensureGlossaryTooltip();
    var rawTerm = trigger.getAttribute(ACTIVE_LANG === "en" ? "data-term-en" : "data-term")
      || trigger.getAttribute("data-term")
      || trigger.textContent
      || "Begriff";
    var rawDefinition = trigger.getAttribute(ACTIVE_LANG === "en" ? "data-definition-en" : "data-definition")
      || trigger.getAttribute("data-definition")
      || "";
    var term = ACTIVE_LANG === "en" ? translateString(rawTerm, "en") : rawTerm;
    var definition = ACTIVE_LANG === "en" ? translateString(rawDefinition, "en") : rawDefinition;

    document.querySelectorAll(".glossary-term.is-open").forEach(function (element) {
      if (element !== trigger) {
        element.classList.remove("is-open");
        element.setAttribute("aria-expanded", "false");
      }
    });

    tooltip.innerHTML = "<strong>" + term + "</strong>" + definition;
    tooltip.hidden = false;
    trigger.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");

    var rect = trigger.getBoundingClientRect();
    var top = rect.bottom + 10;
    var left = rect.left;
    tooltip.style.top = "0px";
    tooltip.style.left = "0px";

    var tooltipRect = tooltip.getBoundingClientRect();
    if (left + tooltipRect.width > window.innerWidth - 12) {
      left = Math.max(12, window.innerWidth - tooltipRect.width - 12);
    }
    if (top + tooltipRect.height > window.innerHeight - 12) {
      top = Math.max(12, rect.top - tooltipRect.height - 10);
    }

    tooltip.style.top = top + "px";
    tooltip.style.left = left + "px";
  }

  function setupGlossaryTooltips() {
    if (!document.querySelector(".glossary-term")) {
      return;
    }

    ensureGlossaryTooltip();

    document.querySelectorAll(".glossary-term").forEach(function (trigger) {
      if (trigger.dataset.dsGlossaryReady === "true") {
        return;
      }
      trigger.dataset.dsGlossaryReady = "true";
      trigger.type = trigger.tagName === "BUTTON" ? "button" : trigger.type;
      trigger.setAttribute("aria-haspopup", "dialog");
      trigger.setAttribute("aria-expanded", "false");
      if (!trigger.getAttribute("aria-label")) {
        trigger.setAttribute("aria-label", (trigger.getAttribute("data-term") || trigger.textContent || "Begriff") + " erklären");
      }
      if (!trigger.getAttribute("title") && trigger.getAttribute("data-definition")) {
        trigger.setAttribute("title", trigger.getAttribute("data-definition"));
      }

      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        if (trigger.classList.contains("is-open")) {
          closeGlossaryTooltip();
          return;
        }
        openGlossaryTooltip(trigger);
      });

      trigger.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeGlossaryTooltip();
          trigger.blur();
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (event.target && event.target.closest(".glossary-term")) {
        return;
      }
      var tooltip = document.getElementById(GLOSSARY_TOOLTIP_ID);
      if (tooltip && tooltip.contains(event.target)) {
        return;
      }
      closeGlossaryTooltip();
    });

    window.addEventListener("scroll", closeGlossaryTooltip, { passive: true });
    window.addEventListener("resize", closeGlossaryTooltip);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeGlossaryTooltip();
      }
    });
  }

  function isPerfectQuizFeedback(text) {
    if (!text) {
      return false;
    }
    var normalized = String(text).replace(/\s+/g, " ").trim();
    if (!normalized) {
      return false;
    }

    var directMatch = normalized.match(/(\d+)\s+von\s+(\d+)/i);
    if (directMatch && directMatch[1] === directMatch[2]) {
      return /(richtig|korrekt|gelöst|eingeordnet|verstanden|bestanden)/i.test(normalized);
    }

    if (/100\s*%/i.test(normalized) && /(quiz|antwort|frage|richtig|gelöst)/i.test(normalized)) {
      return true;
    }

    return false;
  }

  function setupPerfectQuizObserver(pageId) {
    if (!window.MutationObserver || !document.body) {
      return;
    }

    var selector = "#quiz-feedback, [id*=\"quiz-feedback\"], .quiz-feedback, .feedback";
    var knownTexts = new WeakMap();
    var firedEvents = new Set();

    function getEventId(element, text) {
      var elementId = element.id || element.getAttribute("data-quiz-id") || element.className || "quiz-feedback";
      return pageId + "::" + elementId + "::" + text;
    }

    function inspectElement(element, triggerCelebration) {
      if (!element || !element.matches || !element.matches(selector)) {
        return;
      }

      var text = String(element.textContent || "").replace(/\s+/g, " ").trim();
      var previousText = knownTexts.get(element);
      knownTexts.set(element, text);

      if (!triggerCelebration || !text || text === previousText || !isPerfectQuizFeedback(text)) {
        return;
      }

      var eventId = getEventId(element, text);
      if (firedEvents.has(eventId)) {
        return;
      }
      firedEvents.add(eventId);
      launchCelebration({ duration: 1920, pieceCount: 20 });
    }

    document.querySelectorAll(selector).forEach(function (element) {
      inspectElement(element, false);
    });

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "characterData" && mutation.target && mutation.target.parentElement) {
          inspectElement(mutation.target.parentElement, true);
          return;
        }

        if (mutation.target && mutation.target.nodeType === 1) {
          inspectElement(mutation.target, true);
          if (mutation.target.querySelectorAll) {
            mutation.target.querySelectorAll(selector).forEach(function (element) {
              inspectElement(element, true);
            });
          }
        }

        mutation.addedNodes.forEach(function (node) {
          if (!node || node.nodeType !== 1) {
            return;
          }
          inspectElement(node, true);
          if (node.querySelectorAll) {
            node.querySelectorAll(selector).forEach(function (element) {
              inspectElement(element, true);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }

  function getPageId() {
    var path = window.location.pathname || "";
    var filename = path.split("/").pop() || "index.html";
    return filename;
  }

  function loadRootState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return { pages: {}, updatedAt: null };
      }
      var parsed = JSON.parse(raw);
      return {
        pages: parsed.pages || {},
        updatedAt: parsed.updatedAt || null
      };
    } catch (error) {
      return { pages: {}, updatedAt: null };
    }
  }

  function saveRootState(state) {
    state.updatedAt = new Date().toISOString();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getFieldKey(element) {
    if (element.id) {
      return "id:" + element.id;
    }
    if (element.type === "radio" && element.name) {
      return "radio:" + element.name;
    }
    if (element.type === "checkbox" && element.name) {
      var sameNameBoxes = document.querySelectorAll('input[type="checkbox"][name="' + cssEscape(element.name) + '"]');
      if (sameNameBoxes.length > 1) {
        return "checkbox:" + element.name + ":" + element.value;
      }
    }
    if (element.name) {
      return "name:" + element.name;
    }
    return null;
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") {
      return window.CSS.escape(value);
    }
    return String(value).replace(/["\\]/g, "\\$&");
  }

  function collectFormState() {
    var controls = document.querySelectorAll("input, select, textarea, details");
    var values = {};

    controls.forEach(function (element) {
      if (element.tagName === "DETAILS") {
        var detailsKey = element.id ? "details:" + element.id : null;
        if (!detailsKey) {
          return;
        }
        values[detailsKey] = { type: "details", open: element.open };
        return;
      }

      var key = getFieldKey(element);
      if (!key) {
        return;
      }

      if (element.type === "radio") {
        if (element.checked) {
          values[key] = { type: "radio", value: element.value };
        }
        return;
      }

      if (element.type === "checkbox") {
        values[key] = { type: "checkbox", checked: element.checked };
        return;
      }

      values[key] = {
        type: element.tagName.toLowerCase(),
        value: element.value
      };
    });

    return values;
  }

  function collectActiveControls() {
    return Array.from(document.querySelectorAll('button[id].is-active, button[id].active, button[id][aria-pressed="true"], a[id].is-active, a[id].active'))
      .map(function (element) {
        return element.id;
      });
  }

  function dispatchRestoreEvents(element) {
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function restoreFormState(pageState) {
    if (!pageState || !pageState.values) {
      return;
    }

    Object.keys(pageState.values).forEach(function (key) {
      var entry = pageState.values[key];
      var target = null;

      if (key.indexOf("id:") === 0) {
        target = document.getElementById(key.slice(3));
      } else if (key.indexOf("name:") === 0) {
        target = document.querySelector('[name="' + cssEscape(key.slice(5)) + '"]');
      } else if (key.indexOf("radio:") === 0) {
        target = document.querySelector('input[type="radio"][name="' + cssEscape(key.slice(6)) + '"][value="' + cssEscape(entry.value) + '"]');
      } else if (key.indexOf("checkbox:") === 0) {
        var parts = key.split(":");
        target = document.querySelector('input[type="checkbox"][name="' + cssEscape(parts[1]) + '"][value="' + cssEscape(parts.slice(2).join(":")) + '"]');
      } else if (key.indexOf("details:") === 0) {
        target = document.getElementById(key.slice(8));
      }

      if (!target) {
        return;
      }

      if (entry.type === "details") {
        target.open = Boolean(entry.open);
        return;
      }

      if (entry.type === "radio") {
        target.checked = true;
        dispatchRestoreEvents(target);
        return;
      }

      if (entry.type === "checkbox") {
        target.checked = Boolean(entry.checked);
        dispatchRestoreEvents(target);
        return;
      }

      target.value = entry.value;
      dispatchRestoreEvents(target);
    });
  }

  function restoreActiveControls(pageState) {
    if (!pageState || !Array.isArray(pageState.activeControls)) {
      return;
    }

    pageState.activeControls.forEach(function (id) {
      var element = document.getElementById(id);
      if (!element) {
        return;
      }
      var alreadyActive = element.classList.contains("is-active")
        || element.classList.contains("active")
        || element.getAttribute("aria-pressed") === "true";
      if (!alreadyActive && typeof element.click === "function") {
        element.click();
      }
    });
  }

  function isRelevantKey(key) {
    if (!key) {
      return false;
    }
    if (key === STORAGE_KEY) {
      return true;
    }
    return KNOWN_PATTERNS.some(function (pattern) {
      return pattern.test(key);
    });
  }

  function collectBackup() {
    var keys = {};
    for (var index = 0; index < window.localStorage.length; index += 1) {
      var key = window.localStorage.key(index);
      if (isRelevantKey(key)) {
        keys[key] = window.localStorage.getItem(key);
      }
    }
    return {
      version: 1,
      exportedAt: new Date().toISOString(),
      origin: window.location.origin || "file",
      path: window.location.pathname,
      keys: keys
    };
  }

  function downloadBackup() {
    var backup = collectBackup();
    var blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data-science-lernstand-backup.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(link.href);
    }, 1000);
    updatePanelStatus("Backup heruntergeladen.");
  }

  function importBackup(file) {
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(String(reader.result || "{}"));
        if (!parsed.keys || typeof parsed.keys !== "object") {
          throw new Error("Ungültiges Backup");
        }
        Object.keys(parsed.keys).forEach(function (key) {
          window.localStorage.setItem(key, parsed.keys[key]);
        });
        updatePanelStatus("Backup importiert. Die Seite wird neu geladen.");
        window.setTimeout(function () {
          window.location.reload();
        }, 600);
      } catch (error) {
        updatePanelStatus("Backup konnte nicht gelesen werden.");
      }
    };
    reader.readAsText(file);
  }

  function updatePanelStatus(message) {
    var status = document.querySelector("#" + PANEL_ID + " .ds-learning-status");
    if (status) {
      status.textContent = message;
    }
  }

  function ensureStyles() {
    if (document.getElementById("ds-learning-style")) {
      return;
    }
    var style = document.createElement("style");
    style.id = "ds-learning-style";
    style.textContent = ""
      + "#" + TOGGLE_ID + "{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(99,24,50,.18);background:rgba(255,255,255,.96);color:#631832;font:700 14px/1.2 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif;box-shadow:0 12px 24px rgba(35,26,36,.12);cursor:pointer}"
      + "#" + TOGGLE_ID + ".is-floating{position:fixed;right:16px;top:16px;z-index:120}"
      + "#" + PANEL_ID + "{position:fixed;right:16px;top:64px;z-index:121;width:min(360px,calc(100vw - 32px));padding:14px;border:1px solid rgba(99,24,50,.16);border-radius:18px;background:rgba(255,255,255,.98);color:#231A24;box-shadow:0 18px 36px rgba(35,26,36,.16);font:500 14px/1.5 \"Avenir Next\",\"Segoe UI\",Arial,sans-serif}"
      + "#" + PANEL_ID + "[hidden]{display:none}"
      + "." + "ds-learning-title{font-weight:800;color:#631832;margin:0 0 6px}"
      + "." + "ds-learning-copy{margin:0;color:#5f5560}"
      + "." + "ds-learning-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}"
      + "." + "ds-learning-actions button{border-radius:999px;border:1px solid #d5c7cf;background:#fff;color:#231A24;padding:9px 12px;font:700 13px/1.2 inherit;cursor:pointer}"
      + "." + "ds-learning-actions button.primary{background:linear-gradient(135deg,#631832,#173262);color:#fff;border:0}"
      + "." + "ds-learning-status{margin-top:10px;font-size:12px;color:#6a5f69}"
      + ".sticky-top #" + TOGGLE_ID + ", .header-shell #" + TOGGLE_ID + "{position:static;box-shadow:none}"
      + "@media (max-width:720px){#" + TOGGLE_ID + ".is-floating{top:auto;bottom:16px;right:12px}#" + PANEL_ID + "{top:auto;bottom:68px;right:12px}}";
    document.head.appendChild(style);
  }

  function createPanel(pageId, pageState) {
    ensureStyles();

    if (document.getElementById(TOGGLE_ID)) {
      return;
    }

    var toggle = document.createElement("button");
    toggle.id = TOGGLE_ID;
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Lernstand-Menü öffnen");
    toggle.setAttribute("data-i18n-de", "Lernstand");
    toggle.setAttribute("data-i18n-en", "Learning progress");
    toggle.setAttribute("data-i18n-aria-label-de", "Lernstand-Menü öffnen");
    toggle.setAttribute("data-i18n-aria-label-en", "Open learning progress menu");
    toggle.textContent = "Lernstand";

    var panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.hidden = true;
    panel.innerHTML = ""
      + "<div class=\"ds-learning-title\" data-i18n-de=\"Lernstand sichern\" data-i18n-en=\"Save learning progress\">Lernstand sichern</div>"
      + "<p class=\"ds-learning-copy\" data-i18n-de=\"Dein Stand wird auf diesem Gerät automatisch gespeichert und nach Browser- oder Rechner-Neustart wiederhergestellt.\" data-i18n-en=\"Your progress is saved automatically on this device and restored after restarting the browser or computer.\">Dein Stand wird auf diesem Gerät automatisch gespeichert und nach Browser- oder Rechner-Neustart wiederhergestellt.</p>"
      + "<div class=\"ds-learning-actions\">"
      + "<button type=\"button\" class=\"primary\" data-ds-action=\"export\" data-i18n-de=\"Backup exportieren\" data-i18n-en=\"Export backup\">Backup exportieren</button>"
      + "<button type=\"button\" data-ds-action=\"import\" data-i18n-de=\"Backup importieren\" data-i18n-en=\"Import backup\">Backup importieren</button>"
      + "<button type=\"button\" data-ds-action=\"scroll\" data-i18n-de=\"Zur letzten Stelle\" data-i18n-en=\"Go to last position\">Zur letzten Stelle</button>"
      + "</div>"
      + "<div class=\"ds-learning-status\">"
      + (pageState && pageState.updatedAt
        ? "Zuletzt gespeichert: " + new Date(pageState.updatedAt).toLocaleString("de-DE")
        : "Noch kein gespeicherter Stand für diese Seite.")
      + "</div>";

    var fileInput = document.createElement("input");
    fileInput.id = FILE_INPUT_ID;
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.hidden = true;

    toggle.addEventListener("click", function () {
      panel.hidden = !panel.hidden;
    });

    panel.addEventListener("click", function (event) {
      var action = event.target && event.target.getAttribute("data-ds-action");
      if (!action) {
        return;
      }
      if (action === "export") {
        downloadBackup();
      } else if (action === "import") {
        fileInput.click();
      } else if (action === "scroll") {
        if (pageState && typeof pageState.scrollY === "number") {
          window.scrollTo({ top: pageState.scrollY, behavior: "smooth" });
          updatePanelStatus("Zur letzten gespeicherten Stelle gesprungen.");
        } else {
          updatePanelStatus("Für diese Seite gibt es noch keine gespeicherte Scroll-Position.");
        }
      }
    });

    fileInput.addEventListener("change", function () {
      importBackup(fileInput.files && fileInput.files[0]);
      fileInput.value = "";
    });

    var host = ensureHeaderTools() || headerUtilityHost();
    if (host && host !== document.body) {
      if (host.firstChild) {
        host.insertBefore(toggle, host.firstChild);
      } else {
        host.appendChild(toggle);
      }
    } else {
      toggle.classList.add("is-floating");
      document.body.appendChild(toggle);
    }
    document.body.appendChild(panel);
    document.body.appendChild(fileInput);
    applyLanguage(ACTIVE_LANG);
    syncHeaderUtilities();

    document.addEventListener("click", function (event) {
      var clickedInside = panel.contains(event.target) || toggle.contains(event.target);
      if (!clickedInside) {
        panel.hidden = true;
      }
    });
  }

  function savePageState(pageId) {
    var rootState = loadRootState();
    var nextPageState = rootState.pages[pageId] || {};
    nextPageState.scrollY = Math.round(window.scrollY || window.pageYOffset || 0);
    nextPageState.values = collectFormState();
    nextPageState.activeControls = collectActiveControls();
    nextPageState.updatedAt = new Date().toISOString();
    rootState.pages[pageId] = nextPageState;
    saveRootState(rootState);
    updatePanelStatus("Automatisch gespeichert.");
  }

  function restorePageState(pageId) {
    var rootState = loadRootState();
    var pageState = rootState.pages[pageId];
    if (!pageState) {
      return null;
    }

    restoreFormState(pageState);
    restoreActiveControls(pageState);
    if (!window.location.hash && typeof pageState.scrollY === "number" && pageState.scrollY > 0) {
      window.setTimeout(function () {
        window.scrollTo({ top: pageState.scrollY, behavior: "auto" });
      }, 120);
    }
    return pageState;
  }

  function setupAutoSave(pageId) {
    var saveQueued = false;

    function queueSave() {
      if (saveQueued) {
        return;
      }
      saveQueued = true;
      window.requestAnimationFrame(function () {
        savePageState(pageId);
        saveQueued = false;
      });
    }

    document.addEventListener("input", queueSave, true);
    document.addEventListener("change", queueSave, true);
    document.addEventListener("toggle", queueSave, true);
    window.addEventListener("scroll", queueSave, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        savePageState(pageId);
      }
    });
    window.addEventListener("beforeunload", function () {
      savePageState(pageId);
    });
  }

  window.addEventListener("load", function () {
    createLanguageSwitcher();
    applyLanguage(getStoredLanguage());
    setupGlossaryTooltips();
    setupPerfectQuizObserver(getPageId());
    syncHeaderUtilities();
    enhanceExerciseCards();

    if (!HAS_STORAGE) {
      return;
    }
    var pageId = getPageId();
    var restoredState = restorePageState(pageId);
    createPanel(pageId, restoredState);
    syncHeaderUtilities();
    setupAutoSave(pageId);
    savePageState(pageId);
  });
})();
