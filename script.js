// ATTENDRE QUE LA PAGE SOIT CHARGÉE ENTIÈREMENT
document.addEventListener('DOMContentLoaded', function() {

    // === DONNÉES DES REPAS ===
    const repasMenu = {
        1: {
            matin: { nom: "Bouillie d'avoine, banane et lait", temps: "15 min", kcal: "430 kcal", icone: "🥣" },
            midi: { nom: "Pilau kenyan au poulet", temps: "55 min", kcal: "720 kcal", icone: "🍗" },
            soir: { nom: "Pommes de terre douces au lait", temps: "25 min", kcal: "390 kcal", icone: "🍠" }
        },
        2: {
            matin: { nom: "Ugali et légumes", temps: "20 min", kcal: "410 kcal", icone: "🍽️" },
            midi: { nom: "Riz, haricots et avocat", temps: "45 min", kcal: "650 kcal", icone: "🥑" },
            soir: { nom: "Poisson frais et ugali", temps: "40 min", kcal: "580 kcal", icone: "🐟" }
        }
    };

    // === REPAS PAR RÉGIME ===
    const repasRegimes = {
        diabete: {
            titre: "Adapté au diabète",
            repas: {
                1: {
                    matin: { nom: "Porridge de maïs sans sucre", temps: "15 min", kcal: "350 kcal", icone: "🥣" },
                    midi: { nom: "Ugali, légumes verts et poisson", temps: "40 min", kcal: "520 kcal", icone: "🐟" },
                    soir: { nom: "Légumes secs et salade", temps: "35 min", kcal: "410 kcal", icone: "🥗" }
                }
            }
        },
        coeur: {
            titre: "Santé cardiaque",
            repas: {
                1: {
                    matin: { nom: "Fruits frais et yaourt nature", temps: "10 min", kcal: "320 kcal", icone: "🍎" },
                    midi: { nom: "Riz complet et poulet bouilli", temps: "45 min", kcal: "550 kcal", icone: "🍗" },
                    soir: { nom: "Poisson vapeur et salade", temps: "30 min", kcal: "380 kcal", icone: "🐟" }
                }
            }
        },
        poids: {
            titre: "Perte de poids",
            repas: {
                1: {
                    matin: { nom: "Thé vert et fruits", temps: "10 min", kcal: "250 kcal", icone: "🍵" },
                    midi: { nom: "Légumes variés et poulet", temps: "40 min", kcal: "420 kcal", icone: "🥗" },
                    soir: { nom: "Soupe de légumes", temps: "25 min", kcal: "280 kcal", icone: "🍲" }
                }
            }
        },
        muscle: {
            titre: "Renforcement musculaire",
            repas: {
                1: {
                    matin: { nom: "Œufs complets et pain complet", temps: "15 min", kcal: "450 kcal", icone: "🍳" },
                    midi: { nom: "Riz et poulet en quantité", temps: "45 min", kcal: "750 kcal", icone: "🍗" },
                    soir: { nom: "Poisson et légumes", temps: "40 min", kcal: "520 kcal", icone: "🐟" }
                }
            }
        }
    };

    let jourActuel = 1;
    let favoris = [];
    let menuActif = repasMenu;

    // === AFFICHER LES REPAS ===
    function afficherRepas(listeRepas, jour) {
        const data = listeRepas[jour] || listeRepas[1];
        const conteneur = document.getElementById('conteneur-repas');
        conteneur.innerHTML = '';

        const types = { matin: 'Petit-déjeuner', midi: 'Déjeuner', soir: 'Dîner' };

        for (const t in types) {
            const repas = data[t];
            const estFav = favoris.some(f => f.jour == jour && f.type == t);
            conteneur.innerHTML += `
                <div class="carte-repas">
                    <span class="icone">${repas.icone}</span>
                    <div>
                        <div class="type">${types[t]}</div>
                        <div class="nom">${repas.nom}</div>
                        <div class="infos">${repas.temps} • ${repas.kcal}</div>
                    </div>
                    <button class="btn-coeur ${estFav ? 'actif' : ''}" data-jour="${jour}" data-type="${t}">❤️</button>
                </div>
            `;
        }

        // Ajouter les clics sur les cœurs
        document.querySelectorAll('.btn-coeur').forEach(btn => {
            btn.addEventListener('click', function() {
                const j = parseInt(this.dataset.jour);
                const ty = this.dataset.type;
                const idx = favoris.findIndex(f => f.jour == j && f.type == ty);
                if (idx > -1) {
                    favoris.splice(idx, 1);
                    this.classList.remove('actif');
                } else {
                    favoris.push({ jour: j, type: ty });
                    this.classList.add('actif');
                }
                afficherFavoris();
            });
        });
    }

    // === PROGRESSION ===
    function mettreAJourProgression(jour) {
        document.getElementById('affiche-jour').textContent = `Jour ${jour} sur 30`;
        document.getElementById('remplissage').style.width = `${(jour / 30) * 100}%`;
    }

    // === CHANGER DE JOUR ===
    document.querySelectorAll('.btn-jour').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.btn-jour').forEach(b => b.classList.remove('actif'));
            this.classList.add('actif');
            jourActuel = parseInt(this.dataset.jour);
            mettreAJourProgression(jourActuel);
            afficherRepas(menuActif, jourActuel);
        });
    });

    // === CLIQUER SUR UN RÉGIME ===
    document.querySelectorAll('.carte-regime').forEach(carte => {
        carte.addEventListener('click', function() {
            const code = this.dataset.regime;
            if (repasRegimes[code]) {
                menuActif = repasRegimes[code].repas;
                jourActuel = 1;
                // Revenir au jour 1 visuellement
                document.querySelectorAll('.btn-jour').forEach((b, i) => {
                    b.classList.toggle('actif', i === 0);
                });
                mettreAJourProgression(1);
                afficherRepas(menuActif, 1);
                // Aller à l'écran menu avec les repas du régime
                document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
                document.getElementById('ecran-menu').classList.add('actif');
                document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('actif'));
                document.querySelector('[data-ecran="menu"]').classList.add('actif');
            }
        });
    });

    // === AFFICHER FAVORIS ===
    function afficherFavoris() {
        const conteneur = document.getElementById('conteneur-favoris');
        if (favoris.length === 0) {
            conteneur.innerHTML = `
                <div class="etat-vide">
                    <span>❤️</span>
                    <h3>Aucune recette sauvegardée</h3>
                    <p>Clique sur le cœur d'un repas pour l'ajouter</p>
                </div>
            `;
            return;
        }
        conteneur.innerHTML = '';
        favoris.forEach(fav => {
            const data = repasMenu[fav.jour]?.[fav.type] || menuActif[fav.jour]?.[fav.type];
            if (!data) return;
            const types = { matin: 'Petit-déjeuner', midi: 'Déjeuner', soir: 'Dîner' };
            conteneur.innerHTML += `
                <div class="carte-repas">
                    <span class="icone">${data.icone}</span>
                    <div>
                        <div class="type">Jour ${fav.jour} — ${types[fav.type]}</div>
                        <div class="nom">${data.nom}</div>
                        <div class="infos">${data.temps} • ${data.kcal}</div>
                    </div>
                    <button class="btn-coeur actif">❤️</button>
                </div>
            `;
        });
    }

    // === NAVIGATION ENTRE ÉCRANS ===
    document.querySelectorAll('.btn-nav').forEach(btn => {
        btn.addEventListener('click', function() {
            const ecran = this.dataset.ecran;
            document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('actif'));
            this.classList.add('actif');
            document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
            document.getElementById('ecran-' + ecran).classList.add('actif');

            if (ecran === 'menu') {
                menuActif = repasMenu;
                afficherRepas(menuActif, jourActuel);
            }
            if (ecran === 'favoris') {
                afficherFavoris();
            }
        });
    });

    // === LANCER AU DÉMARRAGE ===
    mettreAJourProgression(1);
    afficherRepas(repasMenu, 1);

});
