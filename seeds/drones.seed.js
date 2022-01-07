// Iteration #1
const Mongoose = require('mongoose');
require('../db/index');

const Drone = require('../models/Drone.model');

const drones = [
    {
        name: 'Maverick-MVK-998',
        propellers: 4,
        maxSpeed: 50
    },
    {
        name: 'Triglider-TGK-765',
        propellers: 3,
        maxSpeed: 35
    },
    {
        name: 'Dynaglide-DGK-547',
        propellers: 2,
        maxSpeed: 25
    }
];

(async function() {
    try {
        await Drone.deleteMany();
        const createdDrones = await Drone.create(drones);
        console.log(`Spawned ${createdDrones.length} drones from the Fabricator!`);
        Mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
})();