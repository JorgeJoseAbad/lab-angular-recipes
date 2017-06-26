const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipe-app');
const Recipes = require('../models/dish.js');

const recipes = [{
    name: "Lasana",
    description: 'Try this Lasagna recipe, or contribute your own.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/kellys-lasagne.jpg'
  },
  {
    name: "Pizza",
    description: 'This Pizza dough comes from Americas Test Kitchen Pizza Margherita version... I opted to use their dough only and added my own toppings.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/pizza-3.jpg'
  },
  {
    name: "Lasana",
    description: 'Try this Lasagna recipe, or contribute your own.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/kellys-lasagne.jpg'
  },
  {
    name: "Pizza",
    description: 'This Pizza dough comes from Americas Test Kitchen Pizza Margherita version... I opted to use their dough only and added my own toppings.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/pizza-3.jpg'
  },
  {
    name: "Lasana",
    description: 'Try this Lasagna recipe, or contribute your own.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/kellys-lasagne.jpg'
  },
  {
    name: "Pizza",
    description: 'This Pizza dough comes from Americas Test Kitchen Pizza Margherita version... I opted to use their dough only and added my own toppings.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/pizza-3.jpg'
  },
  {
    name: "Lasana",
    description: 'Try this Lasagna recipe, or contribute your own.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/kellys-lasagne.jpg'
  },
  {
    name: "Pizza",
    description: 'This Pizza dough comes from Americas Test Kitchen Pizza Margherita version... I opted to use their dough only and added my own toppings.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/pizza-3.jpg'
  }
];

// bin/seeds.js
Recipes.create(recipes, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((recipes) => {
    console.log(recipes.name);
  });
  mongoose.connection.close();
});
