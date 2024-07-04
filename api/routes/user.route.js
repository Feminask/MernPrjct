
import express from 'express';
import { test } from '../controllers/User.controller.js';
// import { deleteUser, getUser, getUsers, signout, test, updateUser } from '../controllers/User.controller.js'; 
// import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test)
   



// router.get('/test', test);
// router.put('/update/:userId',verifyToken,updateUser)
// router.delete('/delete/:userId',verifyToken,deleteUser)
// router.post('/signout',signout)
// router.get('/getusers', verifyToken, getUsers);
// router.get('/:userId', getUser);

export default router;