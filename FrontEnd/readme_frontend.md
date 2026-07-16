# Portfolio Sophie Bluel - Architecte d'intérieur - readme du projet front-end.
 

 
## Description
 
Développement du front-end dynamique du portfolio de Sophie Bluel, architecte d'intérieur. Ce projet permet à l'utilisateur de consulter les projets de l'architecte d"intérieur, et à l'administratrice (après authentification) de gérer son portfolio : ajouter, supprimer des projets et filtrer l'affichage.
 

 
## Objectifs du projet
 
- Développer une interface dynamique avec JavaScript vanilla
- Communiquer avec une API REST documentée sous Swagger
- Créer une interface d'administration avec fenêtres modales
- Gérer les interactions utilisateur (upload et suppression de projet) via l'API
 
## Technologies utilisées
 
- HTML5 : Structure sémantique
- CSS3 : Mise en page et styles
- JavaScript (Vanilla) : Logique applicative et manipulation du DOM
- Swagger : Documentation de l'API
 
## Fonctionnalités
 
### Partie publique
- Affichage dynamique des projets depuis l'API
- Filtrage des projets par catégorie
- Interface responsive et accessible
 
### Partie administrateur (après connexion)
- Authentification : Connexion sécurisée avec token JWT
- Ajout de projets : Upload d'images et informations via modale (avec prévisualisation de l'upload en cours)
- Suppression de projets : Gestion des projets existants via modale
- Filtres dynamiques : Tri des projets par catégorie
- Déconnexion : Gestion de session utilisateur
 
## API
 
L'application communique avec une API (présente dans le dossier ../Backend) documentée sous Swagger :
 
Authentification : Bearer Token (JWT)
 
## Installation et utilisation
 
### Prérequis
 
- Node.js (v14 ou supérieur)
- npm ou yarn
 
### Installation du backend
 
1. Cloner le repository :

git clone https://github.com/fx719/Portfolio-architecte-sophie-bluel.git


#### Dans un terminal :

cd Portfolio-architecte-sophie-bluel/Backend
npm start

Ensuite, il suffit d'ouvrir le fichier FrontEnd/index.html dans un navigateur web moderne, l'exécution par liveserver est déconseillée à cause du rafraichissement automatique de la page qu'elle entraîne. 