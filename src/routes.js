const express = require('express');
const routes = express.Router() //Router é uma parte do express que vai criar caminhos
const ProfileController = require("./controllers/ProfileController")
const JobController = require("./controllers/JobController");
const DashboardController = require('./controllers/DashboardController');


// gerencia as rotas e envia dados para o html por meio do EJS
routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes;