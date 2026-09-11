// Attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {

  // Récupère toutes les cartes
  const cartes = document.querySelectorAll('.carte-regime');

  // Ajoute un clic sur chaque carte
  cartes.forEach(function(carte) {
    carte.addEventListener('click', function() {
      const nomDuPlan = this.getAttribute('data-plan');
      
      // Pour l'instant : affiche un message
      alert("Ouverture du plan : " + nomDuPlan);

      // ✅ Quand tes pages détail sont prêtes, SUPPRIME la ligne alert() ci-dessus
      // et décommente celle-ci :
      // window.location.href = "/regimes/" + nomDuPlan;
    });
  });

});
