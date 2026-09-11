// === TES REPAS PAR DÉFAUT (Menu principal) ===
const repasMenuPrincipal = {
  1: {
    matin: { nom: "Bouillie d'avoine, banane et lait", temps: "15 min", calories: "430 kcal", icone: "🥣" },
    midi: { nom: "Pilau kenyan au poulet", temps: "55 min", calories: "720 kcal", icone: "🍗" },
    soir: { nom: "Pommes de terre douces au lait", temps: "25 min", calories: "390 kcal", icone: "🍠" }
  },
  2: {
    matin: { nom: "Ugali et légumes", temps: "20 min", calories: "410 kcal", icone: "🍽️" },
    midi: { nom: "Riz, haricots et avocat", temps: "45 min", calories: "650 kcal", icone: "🥑" },
    soir: { nom: "Poisson frais et ugali", temps: "40 min", calories: "580 kcal", icone: "🐟" }
  }
  // Ajoute jours 3 à 30
};

// === REPAS SPÉCIFIQUES PAR RÉGIME ===
const repasParRegime = {
  diabete: {
    titre: "Adapté au diabète",
    description: "Faible en sucre, riche en fibres",
    repas: {
      1: {
        matin: { nom: "Porridge de maïs sans sucre, lait écrémé", temps: "15 min", calories: "350 kcal", icone: "🥣" },
        midi: { nom: "Ugali, légumes verts et poisson", temps: "40 min", calories: "520 kcal", icone: "🐟" },
        soir: { nom: "Légumes secs et légumes variés", temps: "35 min", calories: "410 kcal", icone: "🥗" }
      }
      // Ajoute jours 2 à 30 pour le régime diabète
    }
  },
  coeur: {
    titre: "Santé cardiaque",
    description: "Légers, légumes, peu d'huile",
    repas: {
      1: {
        matin: { nom: "Fruits frais et yaourt nature", temps: "10 min", calories: "320 kcal", icone: "🍎" },
        midi: { nom: "Riz complet, légumes et poulet bouilli", temps: "45 min", calories: "550 kcal", icone: "🍗" },
        soir: { nom: "Poisson vapeur et salade", temps: "30 min", calories: "380 kcal", icone: "🐟" }
      }
    }
  },
  poids: {
    titre: "Perte de poids",
    description: "Portions contrôlées, légumes",
    repas: {
      1: {
        matin: { nom: "Thé vert et fruits", temps: "10 min", calories: "250 kcal", icone: "🍵" },
        midi: { nom: "Légumes variés et poulet sans peau", temps: "40 min", calories: "420 kcal", icone: "🥗" },
        soir: { nom: "Soupe de légumes et fruit", temps: "25 min", calories: "280 kcal", icone: "🍲" }
      }
    }
  }
  // On ajoute les autres régimes ensemble
};

// === ÉTAT ===
let jourActuel = 1;
let favoris = JSON.parse(localStorage.getItem('nutriplanFavs') || '[]');
let regimeActuel = null;

// === AFFICHER LES REPAS ===
function afficherRepas(listeRepas, jour) {
  const data = listeRepas[jour] || listeRepas[1];
  const conteneur = document.getElementById('repas-contenu');
  if (!conteneur) return;
  conteneur.innerHTML = '';

  ['matin', 'midi', 'soir'].forEach(type => {
    const repas = data[type];
    const estFavori = favoris.some(f => f.jour == jour && f.type == type);
    const libelles = { matin: 'Petit-déjeuner', midi: 'Déjeuner', soir: 'Dîner' };

    conteneur.innerHTML += `
      <div class="carte-repas">
        <span class="icone">${repas.icone}</span>
        <div>
          <div class="type">${libelles[type]}</div>
          <div class="nom">${repas.nom}</div>
          <div class="infos">${repas.temps} • ${repas.calories}</div>
        </div>
        <button class="coeur ${estFavori ? 'plein' : ''}" data-jour="${jour}" data-type="${type}">❤️</button>
      </div>
    `;
  });
}

// === CLIC SUR UN RÉGIME ===
document.querySelectorAll('.carte-regime').forEach(carte => {
  carte.addEventListener('click', () => {
    const code = carte.dataset.regime;
    if (repasParRegime[code]) {
      regimeActuel = repasParRegime[code];
      jourActuel = 1;
      afficherRepas(regimeActuel.repas, jourActuel);
      // Afficher la vue détail
      document.getElementById('titre-regime').textContent = regimeActuel.titre;
      document.getElementById('description-regime').textContent = regimeActuel.description;
      document.getElementById('ecran-liste-regimes').classList.remove('actif');
      document.getElementById('ecran-detail-regime').classList.add('actif');
    }
  });
});

// === RETOUR À LA LISTE DES RÉGIMES ===
document.getElementById('bouton-retour-regimes')?.addEventListener('click', () => {
  document.getElementById('ecran-detail-regime').classList.remove('actif');
  document.getElementById('ecran-liste-regimes').classList.add('actif');
  regimeActuel = null;
});

// === NAVIGATION ENTRE ÉCRANS ===
document.querySelectorAll('.bouton-nav').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
    document.getElementById('ecran-' + btn.dataset.ecran).classList.add('actif');
    if (btn.dataset.ecran === 'menu') {
      afficherRepas(repasMenuPrincipal, jourActuel);
    }
  });
});

// === INITIALISATION ===
afficherRepas(repasMenuPrincipal, 1);
