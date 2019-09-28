const mongojs = require("mongojs");
const db = mongojs("ng8-hyd-db", ["events"]);

class EventsDal {
    constructor() {

    }
    getAllEvents() {
        return new Promise((resolve, reject) => {
            db.events.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                resolve(docs);
            });
        });
    }
    getSingleEvent(id) {
        return new Promise((resolve, reject) => {
            db.events.findOne({ eventId: Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
    insertNewEvent(event) {
        let newEvent = {
            ...event,
            //By default you will get string from UI,hence converting to number;
            eventId: Number.parseInt(event.eventId),
            fees: Number.parseInt(event.fees),
            seatsFilled: Number.parseInt(event.seatsFilled),
        }
        return new Promise((resolve, reject) => {
            db.events.insert(newEvent, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
}

module.exports = new EventsDal();