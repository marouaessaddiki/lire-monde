# 📚 LireMonde

LireMonde est une application web de gestion et de consultation de livres développée avec HTML, CSS et JavaScript.

## 🚀 Fonctionnalités

### Utilisateur
- Affichage dynamique des livres depuis une API REST simulée
- Recherche instantanée des livres
- Filtrage par genre
- Consultation des détails d’un livre dans une fenêtre modale
- Gestion d’une liste « À lire »

### Administrateur
- Affichage des livres dans un tableau
- Ajout de nouveaux livres
- Modification des informations d’un livre
- Suppression d’un livre
- Recherche rapide dans le catalogue

## 🛠 Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6)
- JSON Server

## 📂 Structure du projet

```
LireMonde/
│
├── index.html
├── admin.html
├── css/
│   ├── style.css
│   └── admin.css
│
├── js/
│   ├── accueil.js
│   └── admin.js
│
├── images/
│
└── db.json
```

## ⚙️ Installation

1. Cloner le projet :

```bash
git clone <repository-url>
```

2. Installer JSON Server :

```bash
npm install -g json-server
```

3. Lancer l'API :

```bash
json-server --watch db.json
```

4. Ouvrir le projet avec Live Server.

## 🎯 Objectif

Développer une application de gestion de livres moderne en manipulant le DOM, les API REST et les opérations CRUD avec JavaScript.

## 👨‍💻 Auteur

Projet réalisé dans le cadre d’un projet de développement web Front-End.