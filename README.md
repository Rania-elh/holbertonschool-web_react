Cours sur le projet TypeScript - holbertonschool-web_react
Ce projet a pour objectif de te faire découvrir et maîtriser progressivement TypeScript à travers plusieurs exercices pratiques. Tu vas apprendre à utiliser les interfaces, classes, types avancés, namespaces, et la configuration d’un environnement TypeScript avec Webpack.

1. Introduction à TypeScript et configuration
TypeScript est un sur-ensemble typé de JavaScript. Il apporte le typage statique, la vérification à la compilation et facilite la maintenance de gros projets.

Pour commencer, chaque tâche du projet contient un fichier tsconfig.json qui configure le compilateur TypeScript, ainsi qu’un fichier webpack.config.js pour compiler et bundler le code en JavaScript exécutable.

2. Task 0 : Interfaces et manipulation DOM
Tu apprends à créer une interface Student décrivant un étudiant avec plusieurs propriétés (firstName, lastName, age, location).

Tu crées des objets étudiants conformes à cette interface.

Avec JavaScript classique (Vanilla JS), tu manipules le DOM pour générer un tableau HTML qui affiche le prénom et la localisation de chaque étudiant.

Ce premier exercice montre comment associer TypeScript à du code JS côté client.

3. Task 1 : Interfaces avancées et classes
Tu définis une interface Teacher avec des propriétés, dont certaines sont optionnelles, et tu ajoutes la possibilité d’avoir des propriétés additionnelles dynamiques via une index signature.

Tu étends cette interface avec Directors qui ajoute une propriété spécifique numberOfReports.

Tu écris une fonction printTeacher qui affiche le nom d’un enseignant sous un format particulier, et tu définis une interface pour cette fonction.

Tu crées une classe StudentClass avec un constructeur et des méthodes, le tout décrit par des interfaces pour les propriétés et la structure.

Cet exercice te fait entrer dans la programmation orientée objet avec TypeScript.

4. Task 2 : Classes, interfaces, type guards et types littéraux
Tu écris deux interfaces, DirectorInterface et TeacherInterface, avec des méthodes spécifiques.

Tu implémentes ces interfaces dans les classes Director et Teacher.

La fonction createEmployee renvoie une instance différente selon la valeur du salaire.

Tu écris une fonction isDirector qui sert de type guard pour déterminer si un objet est un directeur.

La fonction executeWork exécute une méthode différente selon le type d’employé.

Tu définis un type littéral Subjects qui ne peut valoir que Math ou History et écris une fonction qui réagit selon ce type.

Cet exercice te montre la puissance des types conditionnels, des classes et interfaces combinées.

5. Task 4 : Namespaces, déclaration fusionnée, héritage
Tu utilises un namespace Subjects pour regrouper les interfaces et classes liées.

Tu déclares une interface Teacher avec des propriétés de base et tu l’étends par déclaration fusionnée pour ajouter des propriétés optionnelles selon la matière enseignée (experienceTeachingC, experienceTeachingReact, experienceTeachingJava).

Tu écris une classe Subject qui a une propriété teacher et une méthode pour définir ce professeur.

Tu crées des classes filles Cpp, React, Java qui héritent de Subject et ont leurs propres méthodes pour afficher les exigences et le professeur disponible.

Ce travail montre comment organiser le code proprement en utilisant des namespaces et le polymorphisme via héritage.

6. Task 5 : Types brandés (Branded Types) et fonctions
Tu définis deux interfaces MajorCredits et MinorCredits, chacune avec un champ credits et une propriété unique brand qui permet de différencier ces types malgré qu’ils aient la même structure.

Tu écris des fonctions sumMajorCredits et sumMinorCredits qui prennent deux valeurs du même type et retournent la somme.

L’usage des branded types évite les confusions entre deux types structurés de la même façon mais conceptuellement différents.

Cet exercice illustre des techniques avancées de typage pour renforcer la sécurité et la clarté du code.

Conclusion
À travers ces exercices, tu apprendras à :

Créer des interfaces et des classes en TypeScript.

Utiliser les propriétés optionnelles et dynamiques.

Étendre les interfaces et utiliser les déclarations fusionnées.

Implémenter le polymorphisme et l’héritage.

Utiliser des types littéraux et des fonctions spécifiques.

Mettre en place une compilation sécurisée avec Webpack.

Manipuler le DOM avec TypeScript.

Ce projet est une excellente base pour développer des applications robustes, bien typées, et maintenables avec TypeScript.


