/**
 * TITLE: NGUNGU MUGUKU FOUNDATION APP
 * VERSION: v1_beta
 * AUTHOR: evansnyawira@gmail.com
 * COPYRIGHT: 
 * lICENCE: APACHE 2.0
 * 
 * DESCRIPTION: comming soon
 * 
 */

import express from 'express'
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import compression from 'compression';

// Routes
import indexRouter from './routes/index';
import userRouter from './routes/user';
import api from './api/api';

const app = express();
const port = process.env.PORT || 3000
app.set('view engine', 'pug');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(session({
    saveUninitialized: true,
    secret: 'hsfosfsbvb',
    resave: true
}))
app.use(express.static(path.resolve(__dirname, `public`)))

app.use('/', indexRouter);
app.use('/admin', userRouter);

app.listen(
    port,
    () => console.log(`running on port:${port}`)
)