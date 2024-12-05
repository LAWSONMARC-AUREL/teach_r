
# Gestion de Produits et Catégories - Application Fullstack


Ce projet est une application fullstack qui permet de gérer des produits et leurs catégories.
Elle comprend une API backend développée avec Symfony et API Platform et un frontend développé avec React.js, utilisant Tailwind CSS et DaisyUI pour le design.



## Auteur

- Marc-Aurel Lawson


## Badges

[![Symfony Version](https://img.shields.io/badge/Symfony-7.1-brightgreen)](https://symfony.com/)

[![PHP Version](https://img.shields.io/badge/PHP-8.2%2B-blue)](https://www.php.net/)

[![Doctrine Version](https://img.shields.io/badge/Doctrine-2.16-blue)](https://www.doctrine-project.org/)

[![Codeception](https://img.shields.io/badge/Codeception-^5.0-orange)](https://codeception.com/)

[![API Platform](https://img.shields.io/badge/APIplateform-3.2-purple)](https://api-platform.com/)

## Structure du projet
- /api : Contient le backend (API Symfony).  
- /frontend : Contient le frontend (React.js).

## 🚀 Installation et exécution  
Prérequis  
- Node.js (>= 16.x recommandé)
- Composer (pour Symfony)
- Docker (pour la base de données)
## Deployment

### 1. 🛠️ API Backend (Symfony)   
Pour lancer l'installation du projet après clonage du dépot.
```bash
    composer install
```
Pour créer la bd   
```bash
    composer docker 
```
Pour remplir la bd  
```bash
    composer db 
```
Pour lancer le serveur web
```bash
    composer start 
```  

### 2. 🌐 Frontend (React.js)
Installez les dépendances :
```bash
    npm install 
```  
Lancez le serveur local   
```bash
npm run dev
```  


## 📏 Style de codage  
Le code suit la recommandation [Symfony](https://symfony.com/doc/current/contributing/code/standards.html) pour l'api et eslint prettier pour le front:

- il peut être contrôlé avec le script

```bash
composer test:cs
```

- il peut être reformaté automatiquement avec le script

```bash
composer fix:cs
```
## 🛠️ Fonctionnalités  
- Gestion des produits :
    - Ajouter, modifier, supprimer des produits.
    - Afficher la liste des produits.
-Gestion des catégories :
    - Ajouter, modifier, supprimer des catégories.
    - Afficher les catégories associées aux produits.
- Interface utilisateur moderne grâce à Tailwind CSS et DaisyUI.
- Backend robuste et structuré avec Symfony et API Platform.
- Utilisation d’une base de données conteneurisée via Docker.
