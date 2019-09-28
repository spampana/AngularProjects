const express = require("express");
const eventRoutes = express.Router();

const eventsDal = require("./dal/events-dal");

eventRoutes.get("/", (request, response) => {
    let events = eventsDal.getAllEvents();
    events.then(
        data => response.json(data),
        reason => response.json(reason)
    );
});
eventRoutes.get("/:id", (request, response) => {
    let id = request.params.id;
    let events = eventsDal.getSingleEvent(id);
    events.then(
        data => response.json(data),
        reason => response.json(reason)
    );
});
eventRoutes.post("/", (request, response) => {
    let event = request.body;
    let eventPromise=eventsDal.insertNewEvent(event);
    eventPromise.then(
        data => response.json(data),
        reason => response.json(reason)
    );
});
module.exports = eventRoutes;