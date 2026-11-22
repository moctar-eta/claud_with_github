CLAUDE.md

Instructions pour Claude lorsqu'il travaille dans ce dépôt.

Projet

Dépôt d'entraînement à Java : petits programmes pour apprendre les bases (classes, constructeurs, méthodes, boucles, arguments de ligne de commande). Ce n'est pas un projet de production.

Structure
Code.java : programme Hello, World! qui affiche les arguments reçus.
Etudiant.java : classe Etudiant (nom, âge) avec afficherInfo().
Compiler et exécuter
bash
javac *.java
java Code arg1 arg2

Java 17 ou plus récent recommandé.

Conventions
Un fichier = une classe publique ; le nom du fichier doit être identique au nom de la classe.
Classes en PascalCase, méthodes et variables en camelCase.
Noms de classes, de méthodes et de variables en français ou en anglais, mais de façon cohérente dans tout le dépôt.
Fichiers encodés en UTF-8 (jamais en UTF-16).
Pas de fichiers .class ni de dossiers d'IDE dans Git.
Façon de travailler avec Claude
Expliquer brièvement chaque correction : le but est d'apprendre, pas seulement de corriger.
Modifier un petit nombre de fichiers à la fois et proposer un message de commit clair (ex. fix: corriger la signature de main).
Ne jamais committer de mots de passe, de clés ou de fichiers .env.
Vérifier que le code compile avant de dire qu'il est terminé.