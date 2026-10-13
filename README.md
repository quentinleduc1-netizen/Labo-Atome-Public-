# Labo Atomes

Application d'entraînement pour le cours de sciences des matériaux : chapitre I (atomes et ions), chapitre II (liaisons interatomiques et classes de matériaux) et chapitre III (cristallographie). Chaque exercice est tiré au hasard et corrigé immédiatement, avec la méthode du cours.

## Exercices
Un sélecteur de chapitre, puis un onglet par partie du cours, chacun avec ses jeux.

Chapitre I :

1. **Structure de l'atome** : fiche de l'atome (notation ᴬ_Z X, isotopes), notation inverse, ions (degré d'oxydation, cation/anion), composés ioniques (nom, puis équation de dissociation à compléter : nombre d’ions et charges, Na₂SO₄ ⇒ 2 Na⁺ + SO₄²⁻). On y trouve aussi le tableau périodique et le bilan.
2. **Quantité de matière** : masse molaire, n = m / M, pesée des précurseurs pour une synthèse.
3. **Nombres quantiques** : couches et sous-couches (n, l, mₗ, 2n²), ordre de remplissage (n + l, Klechkowski), configuration électronique d'atomes et d'ions.
4. **Configuration électronique** : électrons de valence et célibataires, ion stable, formule d'un composé à partir des valences (Al + O ⇒ Al₂O₃), mécanique des liaisons (à partir des cases quantiques : covalente ou ionique, électrons mis en jeu, formule). Diapo animée « Comment les atomes se lient » (partage d'électrons ou transfert, avec les cases quantiques) et fiche « Schéma de Lewis » (doublets liants et non liants, liaisons simples, doubles et triples : H₂, Cl₂, O₂, N₂, HCl, H₂O, NH₃, CH₄, CO₂).

Chapitre II :
1. **Types de liaisons** : électronégativité et polarité (Δχ, covalente non polarisée / polarisée / ionique, atome δ−), reconnaître la liaison (covalente, ionique, métallique, hydrogène, Van der Waals ; forte ou faible).
2. **États et énergie** : états de la matière (gaz, liquide, solide amorphe / mono / polycristallin), lecture de courbes Ep(r), distance d'équilibre r₀ à partir de Ep(r) = −A/r + B/(n·rⁿ).
3. **Propriétés** : de la liaison aux propriétés (module d'Young, fusion, dilatation, conductivité, corrosion, ductilité), fragile ou ductile.
4. **Classes de matériaux** : classer un matériau (métal, céramique ou verre, polymère, composite, naturel), alliages (acier, fonte, laiton, bronze, dural), polymères (thermoplastiques, élastomères, thermodurcissables).

Fiches animées du chapitre II : familles de liaisons, électronégativité (tableau coloré, Δχ et nuage électronique), gaz d'électrons de la liaison métallique (avec ou sans tension), liaisons hydrogène (eau / méthane), dipôles de Van der Waals, états de la matière (particules animées, types de solides), courbe d'énergie Ep(r) interactive (attraction, répulsion, n), tableau liaison → propriétés avec animation fragile / ductile, classes de matériaux, métaux et alliages, verres et céramiques, polymères (polymérisation animée, arrangement des chaînes).

Chapitre III :
1. **Maille et motif** : vocabulaire du cristal, atomes par maille (règle de partage 1/8, 1/4, 1/2, 1 sur CS, CC, CFC, CsCl, NaCl, pérovskite, diamant), lecture d'une projection sur le plan (001) (structure, cotes 0;1 ½ ¼ ¾, atomes par maille), paramètre de maille et rayon (a = 2r, a√3 = 4r, a√2 = 4r).
2. **Compacité et masse volumique** : compacité d'un métal, masse volumique ρ = Z·M/(N_A·V) (métaux et composés ioniques).
3. **Systèmes cristallins** : système (7) et réseau de Bravais (P, I, F, C) à partir des paramètres et des nœuds.

Fiches du chapitre III : le cristal (mono/polycristal, grains), la maille (animation réseau + motif, paramètres a b c α β γ, exemple CsCl), mailles cubiques dessinées en 3D avec comptage animé des atomes, compacité et masse volumique pas à pas (fer α, fer γ, Cu, Al, W, Po, NaCl, SrTiO₃), les 7 systèmes et les 14 réseaux de Bravais dessinés, pourquoi quadratique C = quadratique P, et la projection sur le plan (001) (maille 3D et projection côte à côte, animation niveau par niveau, méthode pour la dessiner). Les fiches contiennent aussi des encadrés « Définition » ou « À retenir » avec la formulation attendue à l'examen (notation ᴬ_Z X, isotope, cation et anion, mole et N_A, électronégativité, cinq types de liaisons, formation de NaCl, maille, compacité et masse volumique).

Le tableau périodique (118 éléments, familles, masses molaires, charges usuelles des ions, nom et masse molaire dans chaque case, charge dans les groupements oxygénés CO₃ NO₃ PO₄ SO₄, configuration électronique et électronégativité au clic, recherche par nom, symbole ou Z, impression A4 paysage dans l’application) s'affiche dans chaque jeu. Les jeux « Ions » et « Composés ioniques » commencent par une diapo « Méthode » animée (perte/gain d'électrons, équilibre des charges) ; les jeux de « Nombres quantiques » par une diapo animée de la règle de Klechkowski, et se terminent par une vidéo YouTube sur les nombres quantiques (`VIDEO`). Le jeu « Configuration électronique » a aussi une diapo animée pour les cations des métaux de transition (le 4s part avant le 3d) ; une réponse où les électrons de l'ion ont été placés comme pour un atome neutre reçoit une correction dédiée, et le lien après une erreur ouvre la fiche utile (`slideAt`). Les sous-couches s, p, d, f ont chacune leur couleur. Le bouton « Revoir le cours » ouvre les fiches de cours liées au jeu (associées dans `SLIDES`, construites dans `CUSTOM`) ; après une erreur, un lien y mène directement. Ces fiches sont rédigées pour l'appli et interactives (atome, isotopes, ions, dissociation, mole, pesée, nombres quantiques, cases quantiques, blocs, valence, prévision de formule) : aucune diapo du cours d'origine n'est incluse. Le score et les records sont conservés entre deux lancements.

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
