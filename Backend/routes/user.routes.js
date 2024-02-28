const router=require('express').Router();
const authController=require('../controllers/auth.controller');
const userController=require('../controllers/user.controller');




// Routes pour l'authentification des utilisateurs
router.post('/add',authController.signUp);
router.post('/login',authController.signIn);
router.get('/logout',authController.logout);

//autres routes pour utilisateurs

router.get('/all',userController.getUsers);
router.get('/:id',userController.user);
router.delete('/delete/:id',userController.deleteUser);
router.put('/update/:id',userController.updateUser);
router.patch('/addFriend/:id',userController.addFriend);
router.patch('/delFriend/:id',userController.delFriend);
module.exports=router;