const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneModel = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const DroneModel = mongoose.model("drones", droneModel);

module.exports = DroneModel;