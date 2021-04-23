/*Posible seeding de ingredientes*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipe-app');
const Ingredients = require('../models/ingredient');


const ingredients = [{
    name: "Cheese",
    description: 'Try this Lasagna recipe, or contribute your own.',
    image: ''
  },
  {
    name: "Tomato",
    description: 'This Pizza dough comes from Americas Test Kitchen Pizza Margherita version... I opted to use their dough only and added my own toppings.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/pizza-3.jpg'
  },
  {
    name: "Bread",
    description: 'Try this Lasagna recipe, or contribute your own.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/kellys-lasagne.jpg'
  },
  {
    name: "Peperoni",
    description: 'This Pizza dough comes from Americas Test Kitchen Pizza Margherita version... I opted to use their dough only and added my own toppings.',
    image: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/pizza-3.jpg'
  }

];

// bin/seeds.js
Ingredients.create(ingredients, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((ingredients) => {
    console.log(ingredients.name);
  });
  mongoose.connection.close();
});
