const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');
const { requireUser } = require('./utils');

postsRouter.post('/', requireUser, async (req, res, next) => {
  res.send({ message: 'under construction' });
});


postsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");
  
    next(); // THIS IS DIFFERENT
  });
  
  
  postsRouter.get('/', async (req, res) => {
    const posts = await getAllPosts();
    console.log (posts)
    res.send({
      posts
    });
  });
  
  module.exports = postsRouter;