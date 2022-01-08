const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drones = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
    .then(dbRes => {
      console.log(" Database response:", dbRes);
      res.render("drones/list.hbs", {
        drones: dbRes,
        css: ["drones", "style"],
      });
    })
    .catch(err => console.error(err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create(req.body)
    .then(newDrone => {
      console.log("New drone: ", newDrone);
      res.redirect("/drones");
    })
    .catch(err => console.error(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;

  Drones.findById(id)
    .then(foundDrone => {
      res.render("drones/update-form.hbs", {
        drone: foundDrone,
      });
    })
    .catch(err => console.error(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  Drones.findByIdAndUpdate(id, req.body, { new: true })
    .then(updateDrone => {
      console.log(updateDrone);
      res.redirect("/drones");
    })
    .catch(err => console.error(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
  Drones.findByIdAndRemove(id)
    .then(dbRes => {
      console.log("Drone destroyed!", dbRes);
      res.redirect('/drones');
    })
    .catch(err => console.error(err));
});

module.exports = router;
