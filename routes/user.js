import express from 'express';

const userRouter = express.Router();
const title = 'NMF Admin'

userRouter.get('/', (req, res) => {
    res.render('admin', {title})
})



export default userRouter;