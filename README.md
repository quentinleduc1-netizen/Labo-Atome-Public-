# Labo Atomes

Application d'entraînement pour le chapitre I du cours de sciences des matériaux (atomes et ions). Chaque exercice est tiré au hasard et corrigé immédiatement, avec la méthode du cours.

## Exercices
Un onglet par partie du cours, chacun avec ses jeux :

1. **Structure de l'atome** : fiche de l'atome (notation ᴬ_Z X, isotopes), notation inverse, ions (degré d'oxydation, cation/anion), composés ioniques (nom, puis équation de dissociation à compléter : nombre d’ions et charges, Na₂SO₄ ⇒ 2 Na⁺ + SO₄²⁻). On y trouve aussi le tableau périodique et le bilan.
2. **Quantité de matière** : masse molaire, n = m / M, pesée des précurseurs pour une synthèse.
3. **Nombres quantiques** : couches et sous-couches (n, l, mₗ, 2n²), ordre de remplissage (n + l, Klechkowski), configuration électronique d'atomes et d'ions.
4. **Configuration électronique** : électrons de valence et célibataires, ion stable, formule d'un composé à partir des valences (Al + O ⇒ Al₂O₃), mécanique des liaisons (à partir des cases quantiques : covalente ou ionique, électrons mis en jeu, formule). Diapo animée « Comment les atomes se lient » (partage d'électrons ou transfert, avec les cases quantiques).

Le tableau périodique (118 éléments, familles, masses molaires, charges usuelles des ions, nom et masse molaire dans chaque case, charge dans les groupements oxygénés CO₃ NO₃ PO₄ SO₄, configuration électronique au clic, recherche par nom, symbole ou Z, impression A4 paysage dans l’application) s'affiche dans chaque jeu. Les jeux « Ions » et « Composés ioniques » commencent par une diapo « Méthode » animée (perte/gain d'électrons, équilibre des charges) ; les jeux de « Nombres quantiques » par une diapo animée de la règle de Klechkowski, et se terminent par une vidéo YouTube sur les nombres quantiques (`VIDEO`). Le jeu « Configuration électronique » a aussi une diapo animée pour les cations des métaux de transition (le 4s part avant le 3d) ; une réponse où les électrons de l'ion ont été placés comme pour un atome neutre reçoit une correction dédiée, et le lien après une erreur ouvre la fiche utile (`slideAt`). Les sous-couches s, p, d, f ont chacune leur couleur. Le bouton « Revoir le cours » ouvre les fiches de cours liées au jeu (associées dans `SLIDES`, construites dans `CUSTOM`) ; après une erreur, un lien y mène directement. Ces fiches sont rédigées pour l'appli et interactives (atome, isotopes, ions, dissociation, mole, pesée, nombres quantiques, cases quantiques, blocs, valence, prévision de formule) : aucune diapo du cours d'origine n'est incluse. Le score et les records sont conservés entre deux lancements.

## Télécharger
Onglet **Releases** du dépôt :
- `LaboAtomes-Setup-x.y.z.exe` : installeur Windows
- `LaboAtomes-Portable-x.y.z.exe` : version Windows sans installation (double-clic)
- `LaboAtomes-x.y.z-mac.dmg` : macOS (version universelle, Mac Intel et Apple Silicon M1/M2/M3…). Le Mac n'est plus construit automatiquement (une minute Mac compte pour 10 dans le quota GitHub) : onglet **Actions → Construire et publier l'application → Run workflow**, cocher « Construire aussi la version Mac ».
- `.AppImage` pour Linux

Windows peut afficher « Windows a protégé votre ordinateur » car l'appli n'est pas signée : cliquer sur **Informations complémentaires** puis **Exécuter quand même**.

Sur Mac : ouvrir le `.dmg` et glisser **Labo Atomes** dans **Applications**. Au premier lancement, macOS bloque l'appli car elle ne vient pas d'un développeur identifié : ouvrir **Réglages Système → Confidentialité et sécurité**, puis **Ouvrir quand même** en bas de la page. Si macOS indique que l'appli « est endommagée », taper dans le Terminal : `xattr -cr "/Applications/Labo Atomes.app"` puis relancer.

## Développement
```bash
npm install
npm start        # lance l'appli
npm run dist     # construit l'exécutable dans dist/
```

Tout le contenu est dans `app/index.html`. Pour ajouter un jeu : une entrée dans `GAMES` avec sa `section` (un onglet de `SECTIONS`), et ses fonctions `gen` (tirage), `show` (affichage), `fields` (réponses attendues) et `explain` (correction). Il apparaît automatiquement comme sous-onglet.

Pour publier une nouvelle version : augmenter `version` dans `package.json` (ex. 1.3.0 → 1.4.0), mettre le même numéro dans `id="appVer"` de `app/index.html` (affiché dans l'en-tête), et envoyer sur `main`. GitHub construit l'appli et crée la release `vX.Y.Z` automatiquement.
