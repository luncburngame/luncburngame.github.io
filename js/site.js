const translations = {
  EN: {
    navGame: "Game",
    navLunki: "Lunki",
    navBurns: "Burns",
    navRoadmap: "Roadmap",
    navDownload: "Download",
    comingSoon: "Coming Soon",

    heroEyebrow: "A physics-driven adventure",
    heroText: "Explore the ruins of a broken world, master the physics, defeat the DUSTERS and rebuild what was lost.",
    heroCta: "EXPLORE THE GAME",

    missionEyebrow: "THE MISSION",
    missionTitle: "A game with a purpose.",
    missionText: "LUNC Burn Game combines fun, physics and progression with a transparent mission: eligible project revenue is used to support LUNC burns.",

    gameEyebrow: "THE GAME",
    gameTitle: "Simple to learn. Hard to master.",
    aimTitle: "AIM",
    aimText: "Choose your trajectory and prepare your shot.",
    impactTitle: "IMPACT",
    impactText: "Use physics, timing and the environment to create chain reactions.",
    rebuildTitle: "REBUILD",
    rebuildText: "Restore the world level by level and discover what comes next.",

    lunkiEyebrow: "MEET LUNKI",
    lunkiTitle: "The Explorer",
    lunkiText: "Curious, brave and determined. LUNKI explores the ruins and helps rebuild a new future.",

    dustersEyebrow: "THE DUSTERS",
    dustersTitle: "Not everything wants to be rebuilt.",

    burnsEyebrow: "BURN TRANSPARENCY",
    burnsTitle: "Every burn should be verifiable.",
    burned: "LUNC BURNED",
    tx: "VERIFIED TRANSACTIONS",
    reserve: "BURN RESERVE",
    dashboard: "PUBLIC BURN DASHBOARD",

    roadmapEyebrow: "ROADMAP",
    roadmapTitle: "From first shot to a rebuilt world.",
    phase1: "PHASE 1 — PROTOTYPE",
    phase1Text: "Core physics, first levels, LUNKI and DUSTERS.",
    phase2: "PHASE 2 — WORLD 1",
    phase2Text: "Terra Classic ruins, progression and first bosses.",
    phase3: "PHASE 3 — POLISH",
    phase3Text: "Sound, VFX, animations, UI and progression systems.",
    phase4: "PHASE 4 — LAUNCH",
    phase4Text: "Release, analytics, advertising and transparent burn reporting.",

    downloadEyebrow: "COMING SOON",
    downloadTitle: "Your move.",
    downloadText: "The game is being built step by step. Follow the project and be ready for launch.",
    downloadCta: "COMING SOON",

    footerMission: "A physics-driven adventure built around play, rebuilding and transparent LUNC burns."
  },

  FR: {
    navGame: "Jeu",
    navLunki: "Lunki",
    navBurns: "Burns",
    navRoadmap: "Roadmap",
    navDownload: "Télécharger",

    heroEyebrow: "Une aventure basée sur la physique",
    heroText: "Explore les ruines d'un monde brisé, maîtrise la physique, affronte les DUSTERS et reconstruis ce qui a été perdu.",
    heroCta: "DÉCOUVRIR LE JEU",

    missionEyebrow: "LA MISSION",
    missionTitle: "Un jeu avec une mission.",
    missionText: "LUNC Burn Game associe plaisir, physique et progression autour d'une mission transparente : les revenus éligibles du projet servent à soutenir les burns de LUNC.",

    gameEyebrow: "LE JEU",
    gameTitle: "Simple à apprendre. Difficile à maîtriser.",
    aimTitle: "VISER",
    aimText: "Choisis ta trajectoire et prépare ton tir.",
    impactTitle: "IMPACT",
    impactText: "Utilise la physique, le timing et l'environnement pour créer des réactions en chaîne.",
    rebuildTitle: "RECONSTRUIRE",
    rebuildText: "Restaure le monde niveau après niveau et découvre la suite.",

    lunkiEyebrow: "RENCONTRE LUNKI",
    lunkiTitle: "L'Explorateur",
    lunkiText: "Curieux, courageux et déterminé. LUNKI explore les ruines et participe à la reconstruction d'un nouvel avenir.",

    dustersEyebrow: "LES DUSTERS",
    dustersTitle: "Tout le monde ne veut pas être reconstruit.",

    burnsEyebrow: "TRANSPARENCE DES BURNS",
    burnsTitle: "Chaque burn doit pouvoir être vérifié.",
    burned: "LUNC BRÛLÉS",
    tx: "TRANSACTIONS VÉRIFIÉES",
    reserve: "RÉSERVE DE BURN",
    dashboard: "TABLEAU DE BORD PUBLIC",

    roadmapEyebrow: "ROADMAP",
    roadmapTitle: "Du premier tir à un monde reconstruit.",
    phase1: "PHASE 1 — PROTOTYPE",
    phase1Text: "Physique principale, premiers niveaux, LUNKI et DUSTERS.",
    phase2: "PHASE 2 — MONDE 1",
    phase2Text: "Ruines de Terra Classic, progression et premiers boss.",
    phase3: "PHASE 3 — POLISH",
    phase3Text: "Sons, effets, animations, interface et progression.",
    phase4: "PHASE 4 — LANCEMENT",
    phase4Text: "Sortie, statistiques, publicité et suivi transparent des burns.",

    downloadEyebrow: "BIENTÔT",
    downloadTitle: "À toi de jouer.",
    downloadText: "Le jeu se construit étape par étape. Suis le projet et sois prêt pour le lancement.",
    downloadCta: "BIENTÔT DISPONIBLE",

    footerMission: "Une aventure basée sur la physique autour du jeu, de la reconstruction et de burns LUNC transparents."
  }
};


function setLanguage(language) {

  if (!translations[language]) {
    language = "EN";
  }

  document.querySelectorAll("[data-i18n]").forEach(function(element) {

    const key = element.getAttribute("data-i18n");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }

  });

  document.querySelectorAll("[data-lang-select]").forEach(function(select) {
    select.value = language;
  });

  document.documentElement.lang = language.toLowerCase();

  localStorage.setItem("luncburngame-language", language);
}


document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll("[data-lang-select]").forEach(function(select) {

    select.addEventListener("change", function() {
      setLanguage(this.value);
    });

  });

  const savedLanguage = localStorage.getItem("luncburngame-language") || "EN";

  setLanguage(savedLanguage);

});
