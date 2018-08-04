import express from 'express';

const Router = express.Router();

// Auth login
Router
  .get('/login', (req, res) => {
    res.render('login');
  })
  .get('logout', (req, res) => {
    res.send('logout');
  })
  .get('/google', (req, res) => {
    res.send('login with google');
  });

export default Router;
