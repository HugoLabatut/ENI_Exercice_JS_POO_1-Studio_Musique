# Exercice POO JavaScript : Système de Gestion d'un Studio de Musique

## Objectif
Créer un système de gestion pour un studio de musique avec des relations bidirectionnelles entre les musiciens et les groupes, en utilisant l'héritage pour différents types d'artistes.

## Durée estimée
3-4 heures

## Contexte
Vous devez modéliser un studio de musique qui gère différents types d'artistes (solistes, DJ) et leurs groupes/formations, avec des relations bidirectionnelles.

---

## Partie 1 : Classes de base (45 min)

### 1.1 Classe `Artiste` (classe parente)
Créez une classe `Artiste` avec :
- **Attributs** : `nom`, `prenom`, `dateDebut`, `styleMusical`, `actif`
- **Méthodes** :
  - `commencerCarriere()` : marque l'artiste comme actif
  - `prendreRetraite()` : marque l'artiste comme inactif
  - `afficherInfo()` : affiche les informations de l'artiste

### 1.2 Classes enfants : `Musicien` et `DJ`
- **`Musicien`** hérite de `Artiste` et ajoute :
  - `instruments` (tableau)
  - `niveauExpertise` (débutant, intermédiaire, expert)
  - Redéfinit `afficherInfo()` pour inclure ces nouvelles propriétés
  
- **`DJ`** hérite de `Artiste` et ajoute :
  - `equipement` (tableau)
  - `specialite` (house, techno, hip-hop, etc.)
  - Redéfinit `afficherInfo()` pour inclure ces nouvelles propriétés

---

## Partie 2 : Association bidirectionnelle (1h30)

### 2.1 Classe `Groupe`
Créez une classe `Groupe` avec :
- **Attributs** : `nomGroupe`, `dateFormation`, `genre`, `membres` (tableau)
- **Méthodes** :
  - `ajouterMembre(artiste)` : ajoute un membre ET établit la relation inverse
  - `retirerMembre(artiste)` : retire un membre ET supprime la relation inverse
  - `listerMembres()` : affiche tous les membres du groupe
  - `estEnActivite()` : vérifie si au moins un membre est actif

### 2.2 Modifier les classes `Musicien` et `DJ`
Ajoutez :
- **Attribut** : `groupes` (tableau, car un artiste peut jouer dans plusieurs groupes)
- **Méthodes** :
  - `rejoindreGroupe(groupe)` : rejoint un groupe ET appelle `groupe.ajouterMembre(this)`
  - `quitterGroupe(groupe)` : quitte un groupe ET appelle `groupe.retirerMembre(this)`
  - `listerGroupes()` : affiche tous les groupes de l'artiste

⚠️ **Important** : Attention aux boucles infinies ! Quand vous ajoutez un membre à un groupe, cela doit ajouter le groupe à l'artiste, mais sans rappeler `ajouterMembre()`.

---

## Partie 3 : Classe de gestion (1h)

### 3.1 Classe `StudioMusique`
Créez une classe `StudioMusique` avec :
- **Attributs** : `nom`, `artistes` (tableau), `groupes` (tableau)
- **Méthodes** :
  - `signerArtiste(artiste)`
  - `creerGroupe(groupe)`
  - `rechercherArtiste(nom)`
  - `rechercherGroupe(nomGroupe)`
  - `listerArtistesActifs()`
  - `listerGroupesParGenre(genre)`
  - `afficherStatistiques()` : nombre d'artistes, musiciens, DJs, groupes

---

## Partie 4 : Tests et utilisation (45 min)

Créez un fichier de test qui :

1. Crée plusieurs musiciens et DJs (ex: guitariste rock, DJ techno, batteur jazz)
2. Crée plusieurs groupes de différents genres
3. Établit les relations bidirectionnelles entre artistes et groupes
4. Crée un studio et y enregistre tous les éléments
5. Teste toutes les fonctionnalités :
   - Ajouter/retirer des membres dans les groupes
   - Rechercher par nom d'artiste et de groupe
   - Lister les artistes actifs
   - Afficher les statistiques
   - Faire partir un musicien à la retraite et voir l'impact

---

## Bonus (optionnel)

Si vous terminez en avance :
- Ajoutez une classe `Album` avec une relation bidirectionnelle vers `Groupe`
- Ajoutez une classe `Concert` qui associe des groupes à des dates
- Créez une méthode pour trouver des collaborateurs potentiels (artistes qui partagent un style musical mais ne sont pas dans le même groupe)

---

## Critères de réussite

✅ L'héritage fonctionne correctement (Musicien et DJ héritent d'Artiste)  
✅ Les associations bidirectionnelles sont bien gérées (pas de désynchronisation)  
✅ Pas de boucles infinies lors de l'ajout d'associations  
✅ Toutes les méthodes fonctionnent comme attendu  
✅ Le code est propre et bien organisé

---

Bon courage ! 🎸🎧
