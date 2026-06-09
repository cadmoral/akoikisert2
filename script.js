// ==========================================================================
// LA CHAMBRE DES OBJETS BAVARDS — SYSTEM-CORP VANILLA ENGINE
// ==========================================================================

// --- CORE DATA PARCHMENTS ---
const DATA = {
  pseudoPref: ['Baron', 'Comte', 'Vicomte', 'Mécanicien', 'Archiviste', 'Garde', 'Docteur', 'Inventeur', 'Marquis', 'Professeur'],
  pseudoSuff: ['du Boulon', 'de la Vapeur', 'des Engrenages', 'du Ressort', 'de l\'Acier', 'du Laiton', 'de la Poussière', 'du Zinc', 'du Condensateur'],
  
  inventions: [
    { id: 'locomotive', name: 'Locomotive à Vapeur', icon: '🚂' },
    { id: 'automate', name: 'Automate Joueur d\'Échecs', icon: '🤖' },
    { id: 'horloge', name: 'Horloge Mélancolique', icon: '🕰️' },
    { id: 'turbine', name: 'Turbine à Pensées', icon: '🌀' },
    { id: 'telephone', name: 'Téléphone Ancien', icon: '📞' },
    { id: 'hydraulique', name: 'Machine Hydraulique', icon: '💧' },
    { id: 'instrument', name: 'Instrument Scientifique Dubitatif', icon: '🔬' },
    { id: 'inconnu', name: 'Objet Non Identifié', icon: '❓' }
  ],

  inventionMethods: [
    'Loupe Magnétique', 
    'Écoute des Boulons', 
    'Rayon de Curiosité', 
    'Test de Vapeur Intérieure'
  ],

  patentTypes: [
    'Machine à réparer quelque chose', 
    'Appareil à mesurer l’invisible', 
    'Outil domestique inutile', 
    'Machine à modifier le temps', 
    'Invention pour communiquer avec les objets'
  ],

  patentMaterials: [
    'Cuivre nerveux', 
    'Verre pensif', 
    'Vapeur rose', 
    'Laiton sensible', 
    'Poussière lunaire', 
    'Velours conducteur'
  ],

  patentFunctions: [
    'Calmer les locomotives anxieuses', 
    'Mesurer la tristesse des horloges', 
    'Traduire les soupirs des machines', 
    'Empêcher les dimanches de finir', 
    'Détecter les visiteurs trop rationnels'
  ],

  patentHazards: [
    'Attire les pigeons métalliques', 
    'Rend les automates jaloux', 
    'Provoque une nostalgie industrielle', 
    'Transforme les chapeaux en antennes', 
    'Contamine les vitrines voisines'
  ],

  patentBonuses: [
    { id: 'ecrou', name: 'Écrou sentimental', icon: '🔩' },
    { id: 'ressort', name: 'Ressort contrarié', icon: '⚡' },
    { id: 'ampoule', name: 'Ampoule bavarde', icon: '💡' },
    { id: 'engrenage', name: 'Engrenage jaloux', icon: '⚙️' },
    { id: 'boulon', name: 'Boulon de consolation', icon: '📍' }
  ],

  classCategories: [
    'Machines mélancoliques', 
    'Inventions dangereusement optimistes', 
    'Objets à usage probablement interdit', 
    'Technologies interdites par les canards', 
    'Instruments de consolation mécanique', 
    'Appareils à mesurer l’invisible', 
    'Machines refusing their function', 
    'Objets trop sensibles pour être restaurés',
    'Reliques d\'un futur oublié', 
    'Curiosités à vapeur musicale', 
    'Engrenages doués de conscience',
    'Boulons en quête d\'identité', 
    'Souvenirs mécaniques oxydés', 
    'Automates à poésie aléatoire'
  ],

  classJustifications: [
    'Parce qu’il vibre quand on lui parle de modernité', 
    'Parce qu’il refuse toute explication rationnelle', 
    'Parce qu’il a probablement été inventé par erreur', 
    'Parce qu’il produit plus de problèmes que de solutions', 
    'Parce qu’il regarde les visiteurs avec insistance'
  ],

  translatorQuotes: [
    "J'ai froid.", 
    "Je n'ai jamais voulu devenir patrimoine.", 
    "Je refuse de fonctionner les dimanches.", 
    "Je souhaite déposer une plainte contre la modernité.", 
    "Mon axe poétique est désaligné.", 
    "Je ne suis pas cassée, je suis en désaccord.", 
    "Ce bruit n'est pas un bruit, c'est un avertissement.",
    "Avez-vous essayé de me parler de poésie ?", 
    "L'électricité est le sang des rêves.",
    "Où sont passés les inventeurs d'antan ?", 
    "Je rêve d'engrenages en nuages.",
    "Le temps s'oxyde plus vite que mon laiton.", 
    "Pardonnez mon silence, je réfléchis à la vapeur.",
    "Le silence est le composant le plus lourd.", 
    "Mon cœur bat en CLAC et en VRRR.",
    "Êtes-vous une machine déguisée en humain ?", 
    "La poussière est la mémoire du monde."
  ],

  archiveCatastrophes: [
    { title: "L'Incident de la Soupe Ferroviaire (1883)", desc: "En tentant de calibrer les soupapes, une fissure a changé la pression du train postal de Lyon en bouillon de pot-au-feu tiède.", code: "CAT-401" },
    { title: "La Disparition Singulière du Mardi", desc: "Une horloge astronomique mélancolique s'est arrêtée, pliant l'espace-temps jusqu'à omettre complètement les mardis pendant six mois.", code: "CAT-909" },
    { title: "La Révolte des Pigeons en Fer-Blanc", desc: "Des oiseaux automatiques dotés de condensateurs sentimentaux ont envahi la place de l'hôtel de Ville pour réciter du Mozart la nuit.", code: "CAT-555" }
  ],

  archiveFragments: [
    "Un témoin a vu de la soupe ferroviaire.", 
    "Une horloge a pleuré du mercure.", 
    "Le mardi a tout simplement disparu des calendriers.", 
    "Un pigeon en fer chantait du Mozart.", 
    "La vapeur sentait la madeleine oubliée.", 
    "L'espace s'est plié comme un mouchoir.",
    "Le silence était si lourd qu'il a brisé les vitrines.", 
    "Les ombres sont restées fixées au mur sans leurs propriétaires.",
    "Le laiton a pris une teinte bleu électrique.", 
    "On a entendu le futur frapper à la porte."
  ],

  classifierObjects: [
    { id: '402', name: 'Le Chante-Boulon', desc: 'Une sorte de boîte qui chante quand on l\'oublie.' },
    { id: '118', name: 'L’Ombrelle à Vapeur', desc: 'Elle protège de la pluie mais attire les orages de confettis.' },
    { id: '909', name: 'Le Réveille-Matin Muet', desc: 'Ignore poliment le temps qui passe pour ne pas froisser l\'utilisateur.' },
    { id: '007', name: 'La Machine à Recoller les Souvenirs', desc: 'Fonctionne mieux avec de la colle de poisson et une pincée de nostalgie.' },
    { id: '662', name: 'Le Traducteur de Grincements', desc: 'S\'active uniquement lors des après-midis pluvieux.' },
    { id: '341', name: 'La Locomotive de Poche', desc: 'Ne transporte que des fourmis et leurs bagages de curiosité.' },
    { id: '555', name: 'L’Engrenage Philanthrope', desc: 'Refuse de fonctionner s’il sent des pièces de mauvaise humeur.' },
    { id: '221', name: 'La Théière à Calculs', desc: 'Prépare un thé noir intense.' },
    { id: '883', name: 'Le Compteur de Soupirs', desc: 'S’active uniquement lors des après-midis pluvieux en bibliothèque.' }
  ],

  visitorQuiz: [
    {
      question: "Face à un objet qui grince, votre premier réflexe est :",
      answers: [
        { text: "Le démonter entièrement.", magDelta: 30, pressDelta: 2, pointsTo: 'repair' },
        { text: "L'écouter religieusement.", magDelta: 15, pressDelta: 0, pointsTo: 'translator' },
        { text: "Appeler un expert certifié.", magDelta: -10, pressDelta: 1, pointsTo: 'patent' },
        { text: "L'ignorer avec élégance.", magDelta: -20, pressDelta: -1, pointsTo: 'collection' }
      ]
    },
    {
      question: "Votre machine préférée est probablement :",
      answers: [
        { text: "Une rutilante locomotive à vapeur.", magDelta: 25, pressDelta: 2, pointsTo: 'invention' },
        { text: "Un automate qui vous ressemble trop.", magDelta: 15, pressDelta: 1, pointsTo: 'invention' },
        { text: "Un tas de ferraille prometteur.", magDelta: 40, pressDelta: 2, pointsTo: 'repair' },
        { text: "Une horloge qui ne donne pas l'heure.", magDelta: -30, pressDelta: -2, pointsTo: 'collection' }
      ]
    },
    {
      question: "Que faites-vous d'un ressort qui refuse de bondir ?",
      answers: [
        { text: "Lui raconter une blague électrique.", magDelta: 20, pressDelta: 1, pointsTo: 'translator' },
        { text: "Le forcer avec une pince de 12.", magDelta: 35, pressDelta: 2, pointsTo: 'repair' },
        { text: "Le classer comme 'Artefact Paresseux'.", magDelta: -15, pressDelta: 0, pointsTo: 'collection' },
        { text: "Rédiger un brevet pour un 'Ressort Statique'.", magDelta: 10, pressDelta: 1, pointsTo: 'patent' }
      ]
    },
    {
      question: "Une odeur de vapeur rose s'échappe d'une caisse...",
      answers: [
        { text: "Vous ouvrez pour voir si c'est du futur.", magDelta: 25, pressDelta: 2, pointsTo: 'collection' },
        { text: "Vous essayez de capturer l'odeur en flacon.", magDelta: 15, pressDelta: 1, pointsTo: 'invention' },
        { text: "Vous vérifiez si c'est conforme au règlement.", magDelta: -20, pressDelta: 0, pointsTo: 'collection' },
        { text: "Vous demandez à la vapeur son opinion.", magDelta: 30, pressDelta: 1, pointsTo: 'translator' }
      ]
    },
    {
      question: "Le mardi, les pendules reculent de deux heures. Votre réaction ?",
      answers: [
        { text: "Profiter de ces deux heures de sommeil en plus.", magDelta: -25, pressDelta: -2, pointsTo: 'collection' },
        { text: "Ajuster l'échappement pour compenser.", magDelta: 30, pressDelta: 2, pointsTo: 'repair' },
        { text: "Intenter un procès au temps lui-même.", magDelta: 20, pressDelta: 1, pointsTo: 'patent' },
        { text: "Demander à l'horloge si elle est fatiguée.", magDelta: 35, pressDelta: 1, pointsTo: 'translator' }
      ]
    }
  ],

  visitorTypes: {
    invention: { title: "INVENTEUR FOU", desc: "Votre curiosité est une menace pour la société mais un régal pour le pôle mécanique.", rec: "invention" },
    patent: { title: "CHARLATAN VISIONNAIRE", desc: "Votre baratin est impeccable et votre imagination sans limites réglementaires.", rec: "patent" },
    collection: { title: "ARCHIVISTE MANIAQUE", desc: "Vous fuyez le danger au profit de la douce odeur de la poussière d'étagère.", rec: "collection" },
    translator: { title: "MURMUREUR DE ROUAGES", desc: "Vous percevez l'âme secrète, grimaçante et sensible des boulons mal lubrifiés.", rec: "translator" },
    repair: { title: "MÉCANICIEN DE L'IMPOSSIBLE", desc: "Pour vous, rien n'est jamais vraiment cassé, tout est simplement en transition poétique.", rec: "repair" },
    archive: { title: "ENQUÊTEUR D'ERREURS", desc: "Vous aimez fouiller dans ce que le comité tente d'oublier ou de repeindre en laiton.", rec: "collection" }
  }
};

// --- AUDIO SYNTHESIS STEAM PACK ---
let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playGearTick(pitchScale = 1) {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(600 * pitchScale, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100 * pitchScale, ctx.currentTime + 0.05);
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.06);
}

function playSteamHiss() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const bufferSize = ctx.sampleRate * 0.4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1200, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.4);
  filter.Q.setValueAtTime(2.0, ctx.currentTime);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.05, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start();
}

function playChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const freqs = [330, 440, 554, 659];
  freqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
    gain.gain.setValueAtTime(0.0, now + idx * 0.08);
    gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + idx * 0.08);
    osc.stop(now + idx * 0.08 + 0.51);
  });
}

function playCrankScroll() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(80 + Math.random() * 40, ctx.currentTime);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(200, ctx.currentTime);
  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.04);
}

// --- STATE MACHINE REGISTRY ---
let STATE = {
  visitorName: '',
  visitorType: '',
  visitorAge: 'rouage',
  visitorEnergy: 60,
  visitorBoredom: 50,
  visitorImagination: 0,
  magnetism: 50,
  pressure: 2,
  quizStep: 0,
  scores: {
    invention: 0,
    patent: 0,
    collection: 0,
    translator: 0,
    repair: 0,
    archive: 0
  }
};

// Update magnetism & pressure
function triggerGaugeUpdate(magDelta, pressDelta) {
  STATE.magnetism = Math.min(100, Math.max(0, STATE.magnetism + magDelta));
  STATE.pressure = Math.min(5, Math.max(1, STATE.pressure + pressDelta));
  updatePhysicalGauges();
}

function updatePhysicalGauges() {
  const needle = document.getElementById('gauge-magnet-needle');
  if (needle) {
    needle.style.top = `${100 - STATE.magnetism}%`;
  }
  const textCur = document.getElementById('gauge-magnet-value');
  if (textCur) textCur.innerText = `${Math.floor(STATE.magnetism)}°G`;

  const liquid = document.getElementById('boiler-liquid-gauge');
  if (liquid) {
    liquid.style.height = `${(STATE.pressure / 5) * 100}%`;
  }
  const pressText = document.getElementById('boiler-pressure-value');
  if (pressText) {
    pressText.innerText = `${STATE.pressure.toFixed(1)} BAR`;
  }
}

// Spark system loaders
function triggerLoader(message, duration, callback) {
  const loader = document.getElementById('global-blocker-loader');
  const msgText = document.getElementById('global-loader-msg');
  if (loader && msgText) {
    playSteamHiss();
    msgText.innerText = message;
    loader.classList.remove('hidden');
    loader.classList.add('flex');
    setTimeout(() => {
      loader.classList.add('hidden');
      loader.classList.remove('flex');
      if (callback) callback();
    }, duration);
  } else {
    if (callback) callback();
  }
}

// Update side posters according to screen id
function updateSidePosters(screenId) {
  const leftImg = document.getElementById('left-poster-img');
  const leftTitle = document.getElementById('left-poster-title');
  const rightImg = document.getElementById('right-poster-img');
  const rightTitle = document.getElementById('right-poster-title');

  if (!leftImg || !rightImg) return;

  const mapping = {
    'menu': {
      leftSrc: '/src/assets/images/la_licorne_mystique_1780943302738.png',
      leftText: 'La Licorne'
    },
    'invention': {
      leftSrc: '/src/assets/images/chouette_mecanique_1780945145248.png',
      leftText: 'Chouette Mécanique'
    },
    'patent': {
      leftSrc: '/src/assets/images/magicien_alchimiste_1780945161069.png',
      leftText: 'Magicien Alchimiste'
    },
    'translator': {
      leftSrc: '/src/assets/images/perroquet_bavard_1780945176672.png',
      leftText: 'Perroquet Bavard'
    },
    'repair': {
      leftSrc: '/src/assets/images/globe_celeste_1780945190982.png',
      leftText: 'Globe Céleste'
    },
    'archive': {
      leftSrc: '/src/assets/images/la_licorne_mystique_1780943302738.png',
      leftText: 'La Licorne'
    },
    'collection': {
      leftSrc: '/src/assets/images/arlequin_jongleur_1780943323042.png',
      leftText: 'Arlequin Jongleur'
    }
  };

  const rightMapping = {
    'menu': {
      rightSrc: '/src/assets/images/arlequin_jongleur_1780943323042.png',
      rightText: 'Arlequin Jongleur'
    },
    'invention': {
      rightSrc: '/src/assets/images/la_licorne_mystique_1780943302738.png',
      rightText: 'La Licorne'
    },
    'patent': {
      rightSrc: '/src/assets/images/arlequin_jongleur_1780943323042.png',
      rightText: 'Arlequin Jongleur'
    },
    'translator': {
      rightSrc: '/src/assets/images/chouette_mecanique_1780945145248.png',
      rightText: 'Chouette Mécanique'
    },
    'repair': {
      rightSrc: '/src/assets/images/magicien_alchimiste_1780945161069.png',
      rightText: 'Magicien Alchimiste'
    },
    'archive': {
      rightSrc: '/src/assets/images/perroquet_bavard_1780945176672.png',
      rightText: 'Perroquet Bavard'
    },
    'collection': {
      rightSrc: '/src/assets/images/globe_celeste_1780945190982.png',
      rightText: 'Globe Céleste'
    }
  };

  const currentLeft = mapping[screenId] || mapping['menu'];
  const currentRight = rightMapping[screenId] || rightMapping['menu'];

  // Apply subtle transient fade transition
  leftImg.style.opacity = '0.1';
  leftImg.style.transform = 'scale(0.95)';
  rightImg.style.opacity = '0.1';
  rightImg.style.transform = 'scale(0.95)';

  setTimeout(() => {
    leftImg.src = currentLeft.leftSrc;
    if (leftTitle) leftTitle.innerText = currentLeft.leftText.toUpperCase();
    
    rightImg.src = currentRight.rightSrc;
    if (rightTitle) rightTitle.innerText = currentRight.rightText.toUpperCase();

    leftImg.style.opacity = '1';
    leftImg.style.transform = 'scale(1)';
    rightImg.style.opacity = '1';
    rightImg.style.transform = 'scale(1)';
  }, 150);
}

// Swap active console screen view
function showScreen(screenId) {
  playGearTick();
  // Hide all screens under module context
  document.querySelectorAll('.app-screen').forEach(el => {
    if (el.id !== 'active-screen-visitor-control' && el.id !== 'active-screen-cabinet-modules') {
      el.classList.add('hidden');
    }
  });

  const target = document.getElementById(`view-${screenId}`);
  if (target) {
    target.classList.remove('hidden');
  }

  // Toggle side panels mechanical cogs/radar or posters
  const leftCog = document.getElementById('left-cog-container');
  const leftPoster = document.getElementById('left-poster-container');
  const rightRadar = document.getElementById('right-radar-container');
  const rightPoster = document.getElementById('right-poster-container');

  const showPostersList = ['menu', 'invention', 'patent', 'translator', 'collection'];
  if (showPostersList.includes(screenId)) {
    if (leftCog) leftCog.classList.add('hidden');
    if (leftPoster) leftPoster.classList.remove('hidden');
    if (rightRadar) rightRadar.classList.add('hidden');
    if (rightPoster) rightPoster.classList.remove('hidden');
    updateSidePosters(screenId);
  } else {
    if (leftCog) leftCog.classList.remove('hidden');
    if (leftPoster) leftPoster.classList.add('hidden');
    if (rightRadar) rightRadar.classList.remove('hidden');
    if (rightPoster) rightPoster.classList.add('hidden');
  }
}

// --- INITIALIZERS & EVENT HANDLERS ---
window.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Entrance Coin Slot
  const introCoinBtn = document.getElementById('interactive-gold-coin');
  if (introCoinBtn) {
    introCoinBtn.addEventListener('click', () => {
      playGearTick(0.75);
      playChime();
      introCoinBtn.classList.add('scale-25', 'translate-y-[-90px]', 'opacity-10', 'pointer-events-none');
      
      setTimeout(() => {
        playSteamHiss();
        // Slide left and right heavy velvet curtains open!
        document.getElementById('curtain-left-panel').style.transform = 'translateX(-100%)';
        document.getElementById('curtain-right-panel').style.transform = 'translateX(100%)';
        
        // Hide entry overlay entirely to click items beneath
        setTimeout(() => {
          const entryOverlay = document.getElementById('entry-booth-overlay');
          if (entryOverlay) entryOverlay.style.display = 'none';
        }, 1500);
      }, 900);
    });
  }

  // 2. Identify Pseudo Generator
  const generateBtn = document.getElementById('btn-get-pseudo');
  const pseudoInput = document.getElementById('visitor-pseudo-input');
  if (generateBtn && pseudoInput) {
    generateBtn.addEventListener('click', () => {
      playGearTick(1.25);
      const pref = DATA.pseudoPref[Math.floor(Math.random() * DATA.pseudoPref.length)];
      const suff = DATA.pseudoSuff[Math.floor(Math.random() * DATA.pseudoSuff.length)];
      pseudoInput.value = `${pref} ${suff}`;
      STATE.visitorName = pseudoInput.value;
      const err = document.getElementById('pseudo-error-alert');
      if (err) err.classList.add('hidden');
    });
  }

  // Save Step 1 identity
  const step1Lever = document.getElementById('btn-save-step1');
  if (step1Lever && pseudoInput) {
    step1Lever.addEventListener('click', () => {
      const val = pseudoInput.value.trim();
      if (!val) {
        const err = document.getElementById('pseudo-error-alert');
        if (err) err.classList.remove('hidden');
        return;
      }
      STATE.visitorName = val;
      playGearTick();
      
      document.getElementById('reg-step-1').classList.add('hidden');
      document.getElementById('reg-step-2').classList.remove('hidden');
    });
  }

  // Save Step 2 vitals
  const step2Lever = document.getElementById('btn-save-step2');
  if (step2Lever) {
    step2Lever.addEventListener('click', () => {
      STATE.visitorAge = document.getElementById('visitor-age-select').value;
      playGearTick();
      document.getElementById('reg-step-2').classList.add('hidden');
      document.getElementById('reg-step-3').classList.remove('hidden');
      initCrankMechanics();
    });
  }

  // Step 2 button groups for internal energy & oxidation
  document.querySelectorAll('.energy-metric-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.parentElement;
      parent.querySelectorAll('.energy-metric-btn').forEach(b => {
        b.classList.remove('bg-[#FFD84D]', 'text-black', 'font-semibold', 'shadow-[0_0_8px_#FFD84D]');
        b.classList.add('bg-black/45', 'border-[#4a1815]/90', 'text-[#F6E7C1]');
      });
      btn.classList.add('bg-[#FFD84D]', 'text-black', 'font-semibold', 'shadow-[0_0_8px_#FFD84D]');
      btn.classList.remove('bg-black/45', 'border-[#4a1815]/90', 'text-[#F6E7C1]');
      
      STATE.visitorEnergy = parseInt(btn.getAttribute('data-val'));
      playGearTick();
    });
  });

  document.querySelectorAll('.boredom-metric-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.parentElement;
      parent.querySelectorAll('.boredom-metric-btn').forEach(b => {
        b.classList.remove('bg-[#FFD84D]', 'text-black', 'font-semibold', 'shadow-[0_0_8px_#FFD84D]');
        b.classList.add('bg-black/45', 'border-[#4a1815]/90', 'text-[#F6E7C1]');
      });
      btn.classList.add('bg-[#FFD84D]', 'text-black', 'font-semibold', 'shadow-[0_0_8px_#FFD84D]');
      btn.classList.remove('bg-black/45', 'border-[#4a1815]/90', 'text-[#F6E7C1]');
      
      STATE.visitorBoredom = parseInt(btn.getAttribute('data-val'));
      playGearTick();
    });
  });

  // 3. Spinning Crank handle controls
  let crankAngle = 0;
  let isCrankSpinning = false;
  let lastCrankAngle = null;

  function initCrankMechanics() {
    const handle = document.getElementById('tactile-crank-handle');
    const progressFill = document.getElementById('crank-progress-fill');
    const progressText = document.getElementById('crank-progress-text');
    if (!handle) return;

    const onDown = (e) => {
      isCrankSpinning = true;
      handle.setPointerCapture(e.pointerId);
      const rect = handle.parentElement.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      lastCrankAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    };

    const onMove = (e) => {
      if (!isCrankSpinning || STATE.visitorImagination >= 100) return;
      const rect = handle.parentElement.getBoundingClientRect();
      if (lastCrankAngle !== null) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const currentAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        let diff = currentAngle - lastCrankAngle;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        crankAngle = (crankAngle + diff) % 360;
        handle.style.transform = `translateY(-50%) rotate(${crankAngle}deg)`;
        lastCrankAngle = currentAngle;

        const deltaMag = Math.abs(diff);
        if (deltaMag > 0.5) {
          STATE.visitorImagination = Math.min(100, STATE.visitorImagination + 0.85);
          if (progressFill) progressFill.style.width = `${STATE.visitorImagination}%`;
          if (progressText) progressText.innerText = `${Math.floor(STATE.visitorImagination)}%`;
          
          if (Math.floor(STATE.visitorImagination) % 15 < 1) {
            playCrankScroll();
          }

          if (STATE.visitorImagination >= 100) {
            isCrankSpinning = false;
            try { handle.releasePointerCapture(e.pointerId); } catch(err){}
            // Go to step 4 quiz loading!
            triggerLoader("Démarrage du questionnaire d'admission...", 1500, () => {
              document.getElementById('reg-step-3').classList.add('hidden');
              document.getElementById('reg-step-4').classList.remove('hidden');
              renderQuizQuestion();
            });
          }
        }
      }
    };

    const onUp = (e) => {
      isCrankSpinning = false;
      lastCrankAngle = null;
      try { handle.releasePointerCapture(e.pointerId); } catch(err){}
    };

    handle.addEventListener('pointerdown', onDown);
    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', onUp);
    handle.addEventListener('pointercancel', onUp);
  }

  // Backup simple charger btn for crank wheel
  const backupChargeBtn = document.getElementById('btn-backup-charge');
  if (backupChargeBtn) {
    backupChargeBtn.addEventListener('click', () => {
      if (STATE.visitorImagination >= 100) return;
      STATE.visitorImagination = Math.min(100, STATE.visitorImagination + 15);
      playCrankScroll();
      playGearTick(1.1);
      
      const progressFill = document.getElementById('crank-progress-fill');
      const progressText = document.getElementById('crank-progress-text');
      const handle = document.getElementById('tactile-crank-handle');
      
      if (progressFill) progressFill.style.width = `${STATE.visitorImagination}%`;
      if (progressText) progressText.innerText = `${Math.floor(STATE.visitorImagination)}%`;
      if (handle) {
        crankAngle = (crankAngle + 45) % 360;
        handle.style.transform = `translateY(-50%) rotate(${crankAngle}deg)`;
      }

      if (STATE.visitorImagination >= 100) {
        triggerLoader("Démarrage du questionnaire d'admission...", 1500, () => {
          document.getElementById('reg-step-3').classList.add('hidden');
          document.getElementById('reg-step-4').classList.remove('hidden');
          renderQuizQuestion();
        });
      }
    });
  }

  // 4. Render and handle Admission Quiz Questions
  function renderQuizQuestion() {
    const qIndex = STATE.quizStep;
    const qData = DATA.visitorQuiz[qIndex];
    if (!qData) return;

    const quizHeader = document.getElementById('quiz-step-header');
    const quizText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-grid');
    
    if (quizHeader) quizHeader.innerText = `EXAMEN PHYSIO-POÉTIQUE (${qIndex + 1} / ${DATA.visitorQuiz.length})`;
    if (quizText) quizText.innerText = `« ${qData.question} »`;
    
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      qData.answers.forEach((ans) => {
        const btn = document.createElement('button');
        btn.className = 'tactile-heavy-lever w-full text-center py-3 px-4 text-xs tracking-wide cursor-pointer';
        btn.innerText = ans.text;
        
        btn.addEventListener('click', () => {
          playGearTick(1.2);
          // Tally profile scorecard & gauges
          STATE.scores[ans.pointsTo] = (STATE.scores[ans.pointsTo] || 0) + 1;
          triggerGaugeUpdate(ans.magDelta, ans.pressDelta);

          if (STATE.quizStep < DATA.visitorQuiz.length - 1) {
            STATE.quizStep++;
            renderQuizQuestion();
          } else {
            // Tally finished, load Step 5 vintage certificate ticket!
            triggerLoader("Génération du certificat d'homologation...", 1500, () => {
              document.getElementById('reg-step-4').classList.add('hidden');
              document.getElementById('reg-step-5').classList.remove('hidden');
              renderCertificateTicket();
            });
          }
        });
        optionsContainer.appendChild(btn);
      });
    }
  }

  // 5. Render Step 5 Certificat
  function getWinningType() {
    let winningKey = 'invention';
    let maxScore = -1;
    for (const key in STATE.scores) {
      if (STATE.scores[key] > maxScore) {
        maxScore = STATE.scores[key];
        winningKey = key;
      }
    }
    return winningKey;
  }

  function renderCertificateTicket() {
    const winnerKey = getWinningType();
    const winningProfile = DATA.visitorTypes[winnerKey];
    STATE.visitorType = winnerKey;

    document.getElementById('ticket-visitor-name').innerText = STATE.visitorName.toUpperCase();
    document.getElementById('ticket-visitor-type').innerText = `PROGNOSTIC : ${winningProfile.title}`;
    
    document.getElementById('ticket-visitor-age').innerText = 
      STATE.visitorAge === 'reliquat' ? "Reliquat Antique (-20)" : 
      STATE.visitorAge === 'rouage' ? "Rouage Actif (20-40)" : 
      STATE.visitorAge === 'vapeur' ? "Vapeur Sifflante (40-60)" : "Héritage Éternel (60+)";
    
    document.getElementById('ticket-visitor-metrics').innerText = 
      `${STATE.visitorEnergy}% Éther / ${STATE.visitorBoredom}% Oxydation`;
    
    document.getElementById('ticket-visitor-imagination').innerText = 
      `${Math.floor(STATE.visitorImagination)}% (Chargement complet)`;
    
    document.getElementById('ticket-visitor-quote').innerText = `« ${winningProfile.desc} »`;
  }

  // Confirm Entrance into the main museum menu
  const enterCabinetBtn = document.getElementById('btn-confirm-entrance');
  if (enterCabinetBtn) {
    enterCabinetBtn.addEventListener('click', () => {
      playGearTick(1.4);
      // Replace VisitorControl sub-layout with Menu sub-layout!
      document.getElementById('active-screen-visitor-control').classList.add('hidden');
      document.getElementById('active-screen-cabinet-modules').classList.remove('hidden');
      
      document.getElementById('header-agent-name').innerText = STATE.visitorName;
      showScreen('menu');
    });
  }

  // Back to Menu screen button connections
  document.querySelectorAll('.btn-return-to-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('menu');
    });
  });

  // Menu option item triggers to load correct panel view
  document.querySelectorAll('.menu-item-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetScreen = btn.getAttribute('data-screen-id');
      if (targetScreen) {
        if (targetScreen === 'invention') initInventionScreen();
        else if (targetScreen === 'patent') initPatentScreen();
        else if (targetScreen === 'translator') initTranslatorScreen();
        else if (targetScreen === 'collection') initCollectionScreen();
        
        showScreen(targetScreen);
      }
    });
  });


  // --- 1. MODULE: INVENTION ANALYZER ---
  function initInventionScreen() {
    const listGrid = document.getElementById('invention-list-grid');
    const methodsSelect = document.getElementById('invention-method-select');
    const startAnalysisBtn = document.getElementById('btn-launch-analysis');
    const resultTicket = document.getElementById('invention-result-ticket');
    const requestContainer = document.getElementById('invention-request-container');

    const functionInput = document.getElementById('invention-function-input');
    const suggestionsContainer = document.getElementById('invention-suggestions-container');
    const suggestBtn = document.getElementById('btn-suggest-function');

    const suggestionsList = [
      "Calmer les locomotives anxieuses",
      "Mesurer la tristesse des horloges",
      "Traduire les soupirs des machines",
      "Détecter les visiteurs trop rationnels",
      "Faire chanter les boulons oxydés",
      "Calculer l'imprévu poétique",
      "Ralentir le temps les lundis matin",
      "Rassurer les engrenages complexés",
      "Convertir la vapeur en mélodies d'opéra",
      "Compter les soupirs du régulateur"
    ];

    let selectedInvention = null;

    // Reset input
    if (functionInput) {
      functionInput.value = '';
    }

    // Suggestions pills
    if (suggestionsContainer) {
      suggestionsContainer.innerHTML = '';
      // Pick 4 random suggestions to show as quick pills
      const shuffled = [...suggestionsList].sort(() => 0.5 - Math.random()).slice(0, 4);
      shuffled.forEach(func => {
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.className = 'px-2 py-0.5 bg-[#4a0812]/40 border border-[#d4a017]/20 hover:border-[#FFD84D] hover:bg-[#5d040c]/50 text-stone-300 rounded font-serif text-[0.6rem] transition-all cursor-pointer';
        pill.innerText = func;
        pill.addEventListener('click', () => {
          playGearTick();
          if (functionInput) {
            functionInput.value = func;
          }
        });
        suggestionsContainer.appendChild(pill);
      });
    }

    // Suggester button
    if (suggestBtn && functionInput) {
      const newSuggestBtn = suggestBtn.cloneNode(true);
      suggestBtn.parentNode.replaceChild(newSuggestBtn, suggestBtn);
      newSuggestBtn.addEventListener('click', () => {
        playGearTick();
        const randFunc = suggestionsList[Math.floor(Math.random() * suggestionsList.length)];
        functionInput.value = randFunc;
      });
    }

    // Build lists
    if (listGrid) {
      listGrid.innerHTML = '';
      DATA.inventions.forEach(inv => {
        const item = document.createElement('button');
        item.className = 'p-3 flex flex-col items-center gap-1.5 justify-center text-center bg-black/55 border-2 border-stone-850 hover:border-[#FFD84D] rounded-xl transition-all cursor-pointer font-serif text-xs';
        item.innerHTML = `<span class="text-2xl">${inv.icon}</span> <span class="leading-tight">${inv.name}</span>`;
        item.addEventListener('click', () => {
          playGearTick();
          listGrid.querySelectorAll('button').forEach(b => b.classList.remove('border-[#FFD84D]', 'bg-black/85'));
          item.classList.add('border-[#FFD84D]', 'bg-black/85');
          selectedInvention = inv;
        });
        listGrid.appendChild(item);
      });
    }

    if (methodsSelect) {
      methodsSelect.innerHTML = '';
      DATA.inventionMethods.forEach(met => {
        const opt = document.createElement('option');
        opt.value = met;
        opt.innerText = met;
        methodsSelect.appendChild(opt);
      });
    }

    if (startAnalysisBtn) {
      // Clear legacy
      resultTicket.classList.add('hidden');
      requestContainer.classList.remove('hidden');

      // Remove previous listener to prevent duplication
      const newBtn = startAnalysisBtn.cloneNode(true);
      startAnalysisBtn.parentNode.replaceChild(newBtn, startAnalysisBtn);

      newBtn.addEventListener('click', () => {
        if (!selectedInvention) {
          alert("Veuillez d'abord sélectionner une antiquité à passer dans la machine !");
          return;
        }

        let objFunction = functionInput ? functionInput.value.trim() : "";
        if (!objFunction) {
          // auto suggest a random one if left empty
          objFunction = suggestionsList[Math.floor(Math.random() * suggestionsList.length)];
        }
        
        triggerGaugeUpdate(20, 1);
        triggerLoader("Sondage moléculaire des pistons...", 1800, () => {
          requestContainer.classList.add('hidden');
          resultTicket.classList.remove('hidden');

          // Print result ticket
          document.getElementById('inv-ticket-title').innerText = selectedInvention.name.toUpperCase();
          document.getElementById('inv-detail-val-name').innerText = selectedInvention.name;
          document.getElementById('inv-detail-val-method').innerText = methodsSelect.value;
          document.getElementById('inv-detail-val-function').innerText = objFunction;
          
          // Generate funny components list
          const itemBonuses = [...DATA.patentBonuses].sort(() => 0.5 - Math.random()).slice(0, 3);
          const partsStr = itemBonuses.map(b => `${Math.floor(Math.random() * 4 + 1)}x ${b.name}`).join(', ');
          document.getElementById('inv-detail-val-components').innerText = partsStr;
          
          // Generate absurd explanation
          const sampleDiagnoses = [
            "Laiton fatigué nécessitant une conversation nocturne de consolation.",
            "Surpression d'ondes romantiques au niveau de la bielle de torsion.",
            "Niveaux d'imagination élevés, risque imminent d'envol de vis.",
            "Refuse obstinément la modernité en ronronnant en fa majeur."
          ];
          const diagStr = sampleDiagnoses[Math.floor(Math.random() * sampleDiagnoses.length)];
          document.getElementById('inv-detail-val-diagnosis').innerText = diagStr;
        });
      });
    }

    // Ticket retry btn
    const retryBtn = document.getElementById('btn-retry-invention');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        initInventionScreen();
      });
    }
  }


  // --- 2. MODULE: PATENT GENERATOR ---
  function initPatentScreen() {
    const matSelect = document.getElementById('patent-material-select');
    const funcSelect = document.getElementById('patent-function-select');
    const hazSelect = document.getElementById('patent-hazard-select');
    const requestContainer = document.getElementById('patent-request-container');
    const resultTicket = document.getElementById('patent-result-ticket');
    const submitBtn = document.getElementById('btn-launch-patent');

    const nameInput = document.getElementById('patent-name-input');
    const matCustom = document.getElementById('patent-material-custom');
    const funcCustom = document.getElementById('patent-function-custom');
    const hazCustom = document.getElementById('patent-hazard-custom');
    const successSlider = document.getElementById('patent-success-slider');
    const successVal = document.getElementById('patent-success-val');

    // Reset inputs
    if (nameInput) nameInput.value = '';
    if (matCustom) matCustom.value = '';
    if (funcCustom) funcCustom.value = '';
    if (hazCustom) hazCustom.value = '';
    if (successSlider) successSlider.value = 40;
    if (successVal) successVal.innerText = '40% (Farfelu)';

    if (matSelect && matSelect.children.length === 0) {
      DATA.patentMaterials.forEach(m => {
        const o = document.createElement('option');
        o.value = m; o.innerText = m;
        matSelect.appendChild(o);
      });
    }

    if (funcSelect && funcSelect.children.length === 0) {
      DATA.patentFunctions.forEach(f => {
        const o = document.createElement('option');
        o.value = f; o.innerText = f;
        funcSelect.appendChild(o);
      });
    }

    if (hazSelect && hazSelect.children.length === 0) {
      DATA.patentHazards.forEach(h => {
        const o = document.createElement('option');
        o.value = h; o.innerText = h;
        hazSelect.appendChild(o);
      });
    }

    // Connect slider
    if (successSlider && successVal) {
      successSlider.addEventListener('input', () => {
        const val = successSlider.value;
        let lbl = "Absurde";
        if (val > 25 && val <= 55) lbl = "Farfelu";
        else if (val > 55 && val <= 80) lbl = "Probable sous vide";
        else if (val > 80) lbl = "Scientifiquement Redoutable";
        successVal.innerText = `${val}% (${lbl})`;
      });
    }

    if (submitBtn) {
      resultTicket.classList.add('hidden');
      requestContainer.classList.remove('hidden');

      const newBtn = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(newBtn, submitBtn);

      newBtn.addEventListener('click', () => {
        const randomNum = Math.floor(Math.random() * 9000 + 1000);
        
        // Custom or preset options
        const finalMat = (matCustom && matCustom.value.trim()) ? matCustom.value.trim() : matSelect.value;
        const finalFunc = (funcCustom && funcCustom.value.trim()) ? funcCustom.value.trim() : funcSelect.value;
        const finalHaz = (hazCustom && hazCustom.value.trim()) ? hazCustom.value.trim() : hazSelect.value;
        const finalProb = successSlider ? successSlider.value : 40;

        let finalName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : `L'APPAREIL MOCK-UP DE ${finalMat.toUpperCase()}`;
        
        triggerGaugeUpdate(15, 1);
        triggerLoader("Rédaction sémantique de la notice technique...", 1900, () => {
          requestContainer.classList.add('hidden');
          resultTicket.classList.remove('hidden');

          document.getElementById('pat-ticket-title').innerText = `BREVET EXCEPTIONNEL N°${randomNum}`;
          document.getElementById('pat-detail-title').innerText = finalName;
          document.getElementById('pat-detail-materials').innerText = finalMat;
          document.getElementById('pat-detail-functions').innerText = finalFunc;
          document.getElementById('pat-detail-hazards').innerText = finalHaz;
          
          let probLabel = "Illusoire";
          if (finalProb > 30 && finalProb <= 60) probLabel = "Incertain";
          else if (finalProb > 60 && finalProb <= 85) probLabel = "Faisable";
          else if (finalProb > 85) probLabel = "Garanti (sans intérêt)";
          
          document.getElementById('pat-detail-probability').innerText = `${finalProb}% (${probLabel})`;

          const testRating = [
            "FONCTIONNEL MAIS ILLÉGAL", 
            "HAUTE INSTABILITÉ D'ILLUSION", 
            "PHYSIQUEMENT ABSURDE", 
            "RÉALISABLE SANS COMPÉTENCE"
          ];
          document.getElementById('pat-detail-status').innerText = testRating[Math.floor(Math.random() * testRating.length)];
        });
      });
    }

    const retryBtn = document.getElementById('btn-retry-patent');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        initPatentScreen();
      });
    }
  }


  // --- 3. MODULE: TALKING TRANSLATOR ---
  function initTranslatorScreen() {
    const capBtn = document.getElementById('btn-cap-noise');
    const literalNoiseDiv = document.getElementById('literal-noise-box');
    const choicesList = document.getElementById('translator-choices-list');
    const manualTextInput = document.getElementById('manual-translation-choice-area');
    const interpretBtn = document.getElementById('btn-launch-translation');
    const requestContainer = document.getElementById('translator-request-container');
    const resultTicket = document.getElementById('translator-result-ticket');

    const relicSelect = document.getElementById('translator-relic-select');
    const filterSlider = document.getElementById('translator-filter-slider');
    const filterVal = document.getElementById('translator-filter-val');
    const btnJack1 = document.getElementById('btn-jack-1');
    const btnJack2 = document.getElementById('btn-jack-2');
    const btnJack3 = document.getElementById('btn-jack-3');

    let capturedBruit = "CLAC — FSHHH — TIC TIC";
    let chosenTranslation = null;
    let selectedJack = "Canal Low (12Hz)";

    // Reset translation area
    if (manualTextInput) manualTextInput.classList.add('hidden');
    const textarea = document.getElementById('custom-translation-textarea');
    if (textarea) textarea.value = '';

    // Handle tactile Jacks with audio frequency adaptation and wave spikes
    function highlightJack(selectedBtn, jackCodeName) {
      selectedJack = jackCodeName;
      [btnJack1, btnJack2, btnJack3].forEach(btn => {
        if (btn) {
          btn.className = 'flex-1 bg-stone-900 border border-stone-700 hover:border-[#FFD84D] text-stone-300 rounded font-mono text-[0.55rem] uppercase tracking-wider cursor-pointer transition-all active:scale-95';
        }
      });
      if (selectedBtn) {
        selectedBtn.className = 'flex-1 bg-[#4a0812] border-2 border-[#d4a017] text-[#FFD84D] rounded font-mono text-[0.55rem] uppercase tracking-wider cursor-pointer transition-all font-bold';
      }

      // Animate wave columns to show visual link activity
      for (let i = 1; i <= 6; i++) {
        const bar = document.getElementById(`wave-bar-${i}`);
        if (bar) {
          bar.style.height = `${Math.floor(Math.random() * 40 + 10)}px`;
          setTimeout(() => {
            bar.style.height = '';
          }, 300);
        }
      }
    }

    if (btnJack1) {
      btnJack1.onclick = () => {
        playGearTick(0.85);
        highlightJack(btnJack1, "Canal Low (12Hz)");
      };
    }
    if (btnJack2) {
      btnJack2.onclick = () => {
        playGearTick(1.2);
        highlightJack(btnJack2, "Canal Mid (55Hz)");
      };
    }
    if (btnJack3) {
      btnJack3.onclick = () => {
        playGearTick(1.75);
        highlightJack(btnJack3, "Canal High (120Hz)");
      };
    }

    // Default Jack HIGHLIGHT at start
    highlightJack(btnJack1, "Canal Low (12Hz)");

    // Ether filter active sliding label
    if (filterSlider && filterVal) {
      filterVal.innerText = '50% (Standard)';
      filterSlider.value = 50;
      filterSlider.oninput = () => {
        const val = filterSlider.value;
        let status = 'Standard';
        if (val < 25) status = 'Brut non clarifié';
        else if (val > 25 && val <= 75) status = 'Clarifié de Galène';
        else if (val > 75) status = 'Pureté Éthérée absolue';
        filterVal.innerText = `${val}% (${status})`;
      };
    }

    if (capBtn) {
      const newCap = capBtn.cloneNode(true);
      capBtn.parentNode.replaceChild(newCap, capBtn);
      newCap.addEventListener('click', () => {
        playSteamHiss();
        const bruits = [
          "CLAC — FSHHH — TIC TIC", 
          "GRRRR — PLOC — FUIIII", 
          "PSSSHH — BZZZT — KLANG", 
          "FRRRP — CLIC CLAC",
          "KRRRCH — ONDES FLOUES"
        ];
        capturedBruit = bruits[Math.floor(Math.random() * bruits.length)];
        if (literalNoiseDiv) literalNoiseDiv.innerText = capturedBruit;
      });
    }

    if (choicesList) {
      choicesList.innerHTML = '';
      DATA.translatorQuotes.slice(0, 7).forEach(quote => {
        const item = document.createElement('button');
        item.className = 'w-full text-left text-xs p-3 font-serif rounded-lg border-2 border-stone-850 bg-black/60 text-stone-200 cursor-pointer hover:border-[#FFD84D] transition-all';
        item.innerText = `« ${quote} »`;
        item.addEventListener('click', () => {
          playGearTick();
          choicesList.querySelectorAll('button').forEach(b => b.className = 'w-full text-left text-xs p-3 font-serif rounded-lg border-2 border-stone-850 bg-black/60 text-stone-200 cursor-pointer hover:border-[#FFD84D] transition-all');
          item.className = 'w-full text-left text-xs p-3 font-serif rounded-lg border-2 border-[#FFD84D] bg-gradient-to-b from-[#D94141] to-[#800000] text-white cursor-pointer hover:border-[#FFD84D] transition-all font-bold';
          chosenTranslation = quote;
          manualTextInput.classList.add('hidden');
        });
        choicesList.appendChild(item);
      });

      // Custom button for manual sémantique entry
      const customBtn = document.createElement('button');
      customBtn.className = 'w-full text-left text-xs p-3 font-serif rounded-lg border-2 border-stone-850 bg-black/60 text-stone-200 cursor-pointer hover:border-[#FFD84D] transition-all';
      customBtn.innerText = '✏️ Autre... (Traduction libre)';
      customBtn.addEventListener('click', () => {
        playGearTick();
        choicesList.querySelectorAll('button').forEach(b => b.className = 'w-full text-left text-xs p-3 font-serif rounded-lg border-2 border-stone-850 bg-black/60 text-stone-200 cursor-pointer hover:border-[#FFD84D] transition-all');
        customBtn.className = 'w-full text-left text-xs p-3 font-serif rounded-lg border-2 border-[#FFD84D] bg-gradient-to-b from-[#D94141] to-[#800000] text-white cursor-pointer hover:border-[#FFD84D] transition-all font-bold';
        chosenTranslation = 'custom';
        manualTextInput.classList.remove('hidden');
      });
      choicesList.appendChild(customBtn);
    }

    if (interpretBtn) {
      resultTicket.classList.add('hidden');
      requestContainer.classList.remove('hidden');

      const newBtn = interpretBtn.cloneNode(true);
      interpretBtn.parentNode.replaceChild(newBtn, interpretBtn);

      newBtn.addEventListener('click', () => {
        if (!chosenTranslation) {
          alert("L'objet grince et soupire... Choisissez d'abord une traduction possible ou libre !");
          return;
        }

        let customValue = document.getElementById('custom-translation-textarea').value.trim();
        if (chosenTranslation === 'custom' && !customValue) {
          alert("Veuillez formuler votre traduction libre avant de lancer le déchiffrement !");
          return;
        }

        const finalTrans = chosenTranslation === 'custom' ? customValue : chosenTranslation;

        triggerGaugeUpdate(20, 1);
        triggerLoader("Isolation acoustique de la carcasse...", 1800, () => {
          requestContainer.classList.add('hidden');
          resultTicket.classList.remove('hidden');

          const interpretationMode = parseInt(document.getElementById('acoustic-accord-slider').value);
          let modeLabel = "Rationnel (Boulons)";
          if (interpretationMode > 30 && interpretationMode <= 70) modeLabel = "Poésie Absurde";
          else if (interpretationMode > 70) modeLabel = "Inquiétude Métaphysique";

          document.getElementById('trans-ticket-title').innerText = capturedBruit;
          document.getElementById('trans-val-relic').innerText = relicSelect ? relicSelect.value : "Relique Inconnue";
          document.getElementById('trans-val-jack').innerText = selectedJack;
          document.getElementById('trans-val-bruit').innerText = capturedBruit;
          document.getElementById('trans-val-recog').innerText = `« ${finalTrans} »`;
          document.getElementById('trans-val-ether-filter').innerText = `${filterSlider ? filterSlider.value : 50}%`;
          document.getElementById('trans-val-mode').innerText = `${modeLabel} (Sensibilité: ${interpretationMode}%)`;

          const diagnoses = [
            "Vibration sincère mais nostalgique",
            "Manifestation éphémère d'une conscience laiton",
            "Grincement de pur formalisme bureaucratique",
            "Murmure d'éther réclamant de la graisse tiède"
          ];
          document.getElementById('trans-val-diagnosis').innerText = diagnoses[Math.floor(Math.random() * diagnoses.length)];
        });
      });
    }

    const retryBtn = document.getElementById('btn-retry-translator');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        initTranslatorScreen();
      });
    }
  }





  // --- 6. MODULE: CLASSIFICATION BUREAU ---
  function initCollectionScreen() {
    const listGrid = document.getElementById('collection-list-grid');
    const catSelect = document.getElementById('collection-cat-select');
    const printBtn = document.getElementById('btn-launch-print');

    const nameInput = document.getElementById('collection-name-input');
    const descInput = document.getElementById('collection-desc-input');
    const motifInput = document.getElementById('collection-motif-input');
    const suggestMotifBtn = document.getElementById('btn-suggest-motif');
    const suggestionsContainer = document.getElementById('collection-motif-suggestions-container');

    let selectedRelic = null;

    // Reset inputs
    if (nameInput) nameInput.value = '';
    if (descInput) descInput.value = '';
    if (motifInput) motifInput.value = '';

    // Initialize motif suggestions
    const motifSuggestionsList = [
      ...DATA.classJustifications,
      "Parce qu’il soupire à intervalles réguliers",
      "Pour insoumission caractérisée aux lois de la gravité",
      "Surchargé en nostalgie industrielle non autorisée",
      "Vibre doucement lorsqu'on fredonne du Bach",
      "Émet des ondes de curiosité perturbatrices",
      "Refuse d'indiquer l'heure pour protéger la santé mentale de son gardien"
    ];

    if (suggestionsContainer) {
      suggestionsContainer.innerHTML = '';
      const shuffled = [...motifSuggestionsList].sort(() => 0.5 - Math.random()).slice(0, 4);
      shuffled.forEach(motif => {
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.className = 'px-2 py-0.5 bg-[#4a0812]/40 border border-[#d4a017]/20 hover:border-[#FFD84D] hover:bg-[#5d040c]/50 text-stone-300 rounded font-serif text-[0.6rem] transition-all cursor-pointer';
        pill.innerText = motif;
        pill.addEventListener('click', () => {
          playGearTick();
          if (motifInput) {
            motifInput.value = motif;
          }
        });
        suggestionsContainer.appendChild(pill);
      });
    }

    if (suggestMotifBtn && motifInput) {
      const newSuggestBtn = suggestMotifBtn.cloneNode(true);
      suggestMotifBtn.parentNode.replaceChild(newSuggestBtn, suggestMotifBtn);
      newSuggestBtn.addEventListener('click', () => {
        playGearTick();
        const randMotif = motifSuggestionsList[Math.floor(Math.random() * motifSuggestionsList.length)];
        motifInput.value = randMotif;
      });
    }

    if (listGrid) {
      listGrid.innerHTML = '';
      DATA.classifierObjects.forEach(obj => {
        const item = document.createElement('button');
        item.className = 'p-3 flex flex-col justify-center text-center items-center bg-black/55 border-2 border-stone-850 hover:border-[#FFD84D] rounded-xl transition-all cursor-pointer font-serif text-xs';
        item.innerHTML = `<span class="text-xl">📦</span> <span class="leading-tight font-bold">${obj.name}</span> <span class="text-[0.62rem] text-stone-400 font-sans italic leading-none mt-1 line-clamp-2">${obj.desc}</span>`;
        item.addEventListener('click', () => {
          playGearTick();
          listGrid.querySelectorAll('button').forEach(b => b.classList.remove('border-[#FFD84D]', 'bg-black/85'));
          item.classList.add('border-[#FFD84D]', 'bg-black/85');
          selectedRelic = obj;

          // Auto update placeholders and optionally pre-fill
          if (nameInput) {
            nameInput.placeholder = `Ex: ${obj.name}...`;
          }
          if (descInput) {
            descInput.placeholder = `Ex: ${obj.desc}`;
          }
        });
        listGrid.appendChild(item);
      });
    }

    if (catSelect && catSelect.children.length === 0) {
      DATA.classCategories.forEach(cat => {
        const o = document.createElement('option');
        o.value = cat; o.innerText = cat;
        catSelect.appendChild(o);
      });
    }

    const outputPlate = document.getElementById('collection-output-plate');
    if (outputPlate) outputPlate.classList.add('hidden');

    if (printBtn) {
      const newBtn = printBtn.cloneNode(true);
      printBtn.parentNode.replaceChild(newBtn, printBtn);

      newBtn.addEventListener('click', () => {
        if (!selectedRelic) {
          alert("Veuillez d'abord désigner un artefact poétique dans la liste !");
          return;
        }

        // Get custom or fallback values
        const finalName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : selectedRelic.name;
        const finalDesc = (descInput && descInput.value.trim()) ? descInput.value.trim() : selectedRelic.desc;
        let finalMotif = (motifInput && motifInput.value.trim()) ? motifInput.value.trim() : "";

        if (!finalMotif) {
          finalMotif = motifSuggestionsList[Math.floor(Math.random() * motifSuggestionsList.length)];
        }

        triggerGaugeUpdate(10, 0);
        triggerLoader("Estampillage à l'encre indélébile...", 1300, () => {
          outputPlate.classList.remove('hidden');

          document.getElementById('sticker-obj-id').innerText = `ARTEFACT N°${selectedRelic.id}`;
          document.getElementById('sticker-obj-name').innerText = finalName.toUpperCase();
          document.getElementById('sticker-obj-desc').innerText = finalDesc;
          
          const finalCat = catSelect.value;
          document.getElementById('sticker-obj-class').innerText = `CLASSE : ${finalCat}`;
          document.getElementById('sticker-obj-justification').innerText = `MOTIF : ${finalMotif}`;
        });
      });
    }
  }

  // Initial update of side indicators
  updatePhysicalGauges();
});
