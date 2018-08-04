import path from 'path';
import express from 'express';
import AuthRoutes from './routes/auth-routes';

const app = express();

// set up engine
app
  .set('view engine', 'ejs')
  .set('views', path.join(`${__dirname}/views`))
  .use('/auth', AuthRoutes)
  .get('/', (req, res) => {
    res.render('home');
  })
  .listen(process.env.PORT || 8080);
// video: https://www.youtube.com/watch?v=kDhYUPcDS28&index=5&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x
