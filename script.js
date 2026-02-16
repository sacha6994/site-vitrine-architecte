// Sélection des éléments utiles au menu mobile
const menuToggleButton = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNav");

// Sécurité : on vérifie que les éléments existent avant d'ajouter les événements
if (menuToggleButton && mainNavigation) {
  // Ouvre/ferme le menu au clic sur le bouton burger
  menuToggleButton.addEventListener("click", () => {
    const isExpanded = menuToggleButton.getAttribute("aria-expanded") === "true";

    // Mise à jour de l'état ARIA pour l'accessibilité
    menuToggleButton.setAttribute("aria-expanded", String(!isExpanded));

    // Toggle de la classe CSS qui affiche/masque le menu
    mainNavigation.classList.toggle("open");
  });

  // Ferme automatiquement le menu quand un lien est cliqué (meilleure UX mobile)
  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggleButton.setAttribute("aria-expanded", "false");
      mainNavigation.classList.remove("open");
    });
  });
}
