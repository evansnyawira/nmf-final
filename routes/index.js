import express from 'express';

const indexRouter = express.Router();
let title = 'Ngungu Muguku Foundation'

// let directors = {
//     1:{
//         name: 'enos muguku',
//         image: 'img',
//         title: 'chairman',
//         description: '',
//         email: 'enosmuguku@ngungumugukufoundation.org'

//     },
//     2:{
//         name: 'dishon muguku',
//         image: 'img',
//         title: 'director',
//         description: 'd',
//         email: 'dishon@ngungumugukufoundation.org'

//     },
//     3:{
//         name: 'grace wangui',
//         image: 'img',
//         title: 'director',
//         description: 'd',
//         email: 'grace@ngungumugukufoundation.org'

//     }, 
//     4: {
//         name: 'ezeckiel ndungu',
//         image: 'img',
//         title: 'director',
//         description: 'd',
//         email: 'ezeckiel@ngungumugukufoundation.org'

//     }
// }

indexRouter.get('/', function (req, res) {
    res.render('index', { title, })
  })

indexRouter.get('/ourstory', (req, res) => {
    res.render('ourstory', { title })
})
indexRouter.get('/about', (req, res) => {
    res.render('about', { title })
})
indexRouter.get('/gallery', (req, res) => {
    res.render('gallery', { title })
})
indexRouter.get('/profile', (req, res) => {
    res.render('profile', { title } )
})

export default indexRouter;