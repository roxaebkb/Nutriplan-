// ✅ Fonction à placer au-dessus de la liste des cartes
const ouvrirLePlanDetail = (nomDuPlan) => {
  window.location.href = `/regimes/${nomDuPlan}`;
};

{/* Liste des régimes — copie tout ce bloc */}
<div className="liste-regimes">

  {/* 🩸 Adapté au diabète */}
  <div className="carte-regime" onClick={() => ouvrirLePlanDetail("diabete")}>
    <span>🩸</span>
    <h3>Adapté au diabète</h3>
    <p>30 jours — faible en sucre, riche en fibres</p>
    <span className="fleche">›</span>
  </div>

  {/* ❤️ Santé cardiaque */}
  <div className="carte-regime" onClick={() => ouvrirLePlanDetail("sante-cardiaque")}>
    <span>❤️</span>
    <h3>Santé cardiaque</h3>
    <p>30 jours — légers, légumes, peu d'huile</p>
    <span className="fleche">›</span>
  </div>

  {/* ⚖️ Perte de poids */}
  <div className="carte-regime" onClick={() => ouvrirLePlanDetail("perte-de-poids")}>
    <span>⚖️</span>
    <h3>Perte de poids</h3>
    <p>30 jours — portions contrôlées</p>
    <span className="fleche">›</span>
  </div>

  {/* 📈 Prise de poids */}
  <div className="carte-regime" onClick={() => ouvrirLePlanDetail("prise-de-poids")}>
    <span>📈</span>
    <h3>Prise de poids</h3>
    <p>30 jours — repas énergétiques</p>
    <span className="fleche">›</span>
  </div>

  {/* 💪 Renforcement musculaire */}
  <div className="carte-regime" onClick={() => ouvrirLePlanDetail("musculation")}>
    <span>💪</span>
    <h3>Renforcement musculaire</h3>
    <p>30 jours — riche en protéines</p>
    <span className="fleche">›</span>
  </div>

</div>
