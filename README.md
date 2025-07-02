# Projet VoteAppIonic
## Réalisé par Mme KADRI Naima  
### Encadré par Mr DESCHAMPS Marc

---

## Description

Ce projet est un projet **ECF** (Épreuve Commune de Formation), qui fait partie de ma formation

Ce projet est une application web qui permet de gérer des scrutins.  
On peut voir la liste des scrutins, accéder aux membres de chaque scrutin, voter pour chaque membre et consulter des statistiques sur les votes

---

## Ce que j’ai fait

- j'ai créé des pages d’accueil, de vote et de statistiques avec une navigation simple
- j'ai ajouter des routes pour chaque page
- j'ai affichée sur la page d’accueil  tous les scrutins disponibles
- afficher  la liste des membres par scrutin dans la page de vote
- Redirection vers la page de vote depuis la page d’accueil on cliquant sur le button VOIR MEMBRES
- Ajout d’un style CSS très simple pour les tableaux
- j'ai supprimé une condition qui empêchait le vote si la date actuelle était avant la date de début du scrutin(proposer par le formateur)
- j'ai ajouter un bouton « Voter » à côté de chaque membre qui n'a pas vote( ? has-voted)
- Le bouton disparaît et est remplacé par un label « A voté » une fois que le vote est effectué comme demander 
- j'ai créé ’une page pour voir les statistiques d’un scrutin on cliquant sur le button a cote de chaque scruntin dans la page d’accueil 
- afficher les statistiques sous forme d'un cadre
- j'ai ajouter une classe CSS pour styliser les tableaux des scrutins, membres et statistiques
- Ajout d’un bouton pour revenir à la page d’accueil depuis les pages de vote et de statistiques

---

## Comment ce site marche

1. Sur la page d’accueil, tu vois la liste de tous les scrutins disponibles, une fois rentrer dans le site car j'ai défini la route racine "/" pour les scrutins
2. Pour chaque scrutin, tu as un bouton **VOIR MEMBRES** qui te redirige vers une autre page pour voir les membres sur ce scrutin
3. Sur la page des membres, tu peux voir le prénom, nom, date de naissance et l’état du vote de chaque membre
4. Si un membre n’a pas encore voté, un bouton **Voter** est affiché à côté de son nom
5. Quand tu cliques sur **Voter**, le bouton disparaît et est remplacé par un label **A voté** Cette action est irréversible comme demander
6. Depuis la page d’accueil, tu peux aussi cliquer sur **Voir stats** pour voir les statistiques de participation du scrutin
7. Dans les pages de vote et statistiques, un bouton te permet de revenir facilement à la page d’accueil

---

## Technologies utilisées

- React avec Ionic pour l’interface utilisateur
- Node.js et Express pour l’API backend
- SQLite pour la base de données
- Recharts pour les graphiques de statistiques
- CSS simple pour le style des tableaux

---

## Installation et lancement

1. Cloner le projet  
2. Installer les dépendances avec `npm install`  
3. Lancer le serveur backend avec `npm start`  
4. Lancer l’application frontend (Ionic) avec `ionic serve`  
5. Accéder à l’application via le navigateur à l’adresse affichée

---

Merci d’avoir consulté ce projet ! 
## KADRI Naima
