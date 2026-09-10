// Données des repas
const mealsData = {
  1: {
    breakfast: { name: "Bouillie d'avoine, banane et lait", time: "15 min", kcal: "430 kcal", icon: "🥣" },
    lunch: { name: "Pilau kenyan au poulet", time: "55 min", kcal: "720 kcal", icon: "🍗" },
    dinner: { name: "Pommes de terre douces au lait", time: "25 min", kcal: "390 kcal", icon: "🍠" }
  },
  2: {
    breakfast: { name: "Ugali et légumes", time: "20 min", kcal: "410 kcal", icon: "🍽️" },
    lunch: { name: "Riz, haricots et avocat", time: "45 min", kcal: "650 kcal", icon: "🥑" },
    dinner: { name: "Poisson frais et ugali", time: "40 min", kcal: "580 kcal", icon: "🐟" }
  }
  // Tu peux ajouter les jours 3 à 30 de la même façon
};

// État global
let currentDay = 1;
let favorites = JSON.parse(localStorage.getItem('nutriplanFavs') || '[]');

// Éléments
const dayButtons = document.querySelectorAll('.day-btn');
const dayDisplay = document.getElementById('day-display');
const progressFill = document.getElementById('progress-fill');
const mealsContainer = document.getElementById('meals-container');
const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');
const favoritesContent = document.getElementById('favorites-content');

// Afficher les repas du jour
function renderMeals(day) {
  const data = mealsData[day] || mealsData[1];
  mealsContainer.innerHTML = '';

  ['breakfast', 'lunch', 'dinner'].forEach(type => {
    const meal = data[type];
    const isFav = favorites.some(f => f.day == day && f.type == type);
    const labels = { breakfast: 'Petit-déjeuner', lunch: 'Déjeuner', dinner: 'Dîner' };

    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
      <div class="meal-icon">${meal.icon}</div>
      <div class="meal-info">
        <div class="meal-type">${labels[type]}</div>
        <div class="meal-name">${meal.name}</div>
        <div class="meal-meta">${meal.time} • ${meal.kcal}</div>
      </div>
      <button class="fav-btn ${isFav ? 'saved' : ''}" data-day="${day}" data-type="${type}">❤️</button>
    `;
    mealsContainer.appendChild(card);
  });

  // Écouter les boutons cœur
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', toggleFavorite);
  });
}

// Mettre à jour la progression
function updateProgress(day) {
  dayDisplay.textContent = `Jour ${day} sur 30`;
  progressFill.style.width = `${(day / 30) * 100}%`;
}

// Changer de jour
dayButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDay = parseInt(btn.dataset.day);
    updateProgress(currentDay);
    renderMeals(currentDay);
  });
});

// Gérer les favoris
function toggleFavorite(e) {
  const day = parseInt(e.target.dataset.day);
  const type = e.target.dataset.type;
  const idx = favorites.findIndex(f => f.day == day && f.type == type);

  if (idx > -1) {
    favorites.splice(idx, 1);
    e.target.classList.remove('saved');
  } else {
    favorites.push({ day, type });
    e.target.classList.add('saved');
  }

  localStorage.setItem('nutriplanFavs', JSON.stringify(favorites));
  renderFavorites();
}

// Afficher les favoris
function renderFavorites() {
  if (favorites.length === 0) {
    favoritesContent.innerHTML = `
      <div class="empty-state">
        <span class="heart-icon">❤️</span>
        <h3>Aucune recette sauvegardée</h3>
        <p>Clique sur le cœur d'un repas pour l'ajouter ici</p>
      </div>
    `;
    return;
  }

  favoritesContent.innerHTML = '';
  favorites.forEach(fav => {
    const data = mealsData[fav.day]?.[fav.type];
    if (!data) return;
    const labels = { breakfast: 'Petit-déjeuner', lunch: 'Déjeuner', dinner: 'Dîner' };
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
      <div class="meal-icon">${data.icon}</div>
      <div class="meal-info">
        <div class="meal-type">Jour ${fav.day} — ${labels[fav.type]}</div>
        <div class="meal-name">${data.name}</div>
        <div class="meal-meta">${data.time} • ${data.kcal}</div>
      </div>
      <button class="fav-btn saved" data-day="${fav.day}" data-type="${fav.type}">❤️</button>
    `;
    favoritesContent.appendChild(card);
  });

  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', toggleFavorite);
  });
}

// Navigation entre écrans
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.screen;
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${target}`).classList.add('active');

    if (target === 'saved') renderFavorites();
  });
});

// Initialisation
updateProgress(1);
renderMeals(1);
