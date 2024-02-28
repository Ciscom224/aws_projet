# Rapport 1 BACKEND
`objectif de la semaine : Mise en place d'un systeme d'authentifiction et la creation d'un base de donnees avec MongoDB(NoSQl)`

## Bibliotheques installees
- bcrypt: pour crypter le mot de passe des users,
- body-parser: la recuperation et la destructuration du corps de la requete client,
- cookie-parser: la recuperation et la destructuration du cookie ,
- dotenv: rend le fichier .env lisible par le serveur,
- express: ,
- jsonwebtoken: authentification,
- mongoose: ,
- nodemon: server,
- validator: pour la validation des informations users(email,...)
## Routes
### Routes pour l'authentification des utilisateurs
- post('/add',authController.signUp) : creation de user
- post('/login',authController.signIn) : connextion
- get('/logout',authController.logout) : deconnexion

### Users managment routes
- get('/all',userController.getUsers): liste de users
- get('/:id',userController.user) : info d'un user
- delete('/delete/:id',userController.deleteUser) : suporession
- put('/update/:id',userController.updateUser) : modification
- patch('/addFriend/:id',userController.addFriend) : ajout d'amis
- patch('/delFriend/:id',userController.delFriend) : suppression d'amis
## Models
- User
- CategoriesQuiz(Questions,reponses)

## A venir
- Gestion des requests questions/reponses 
- Gestion de multi-joueurs
- Gestion des scores
- Imbrication des documents sur NoSql(MongoDB)
- ....  


