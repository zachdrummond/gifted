const express = require("express");
const db = require("../models");
const router = express.Router();

// VIEWS ROUTES
router.get("/things", (request, response) => {
    db.Sample.findAll().then((allThings) => {
        response.render("all-things", {allThings: allThings });
    });
});

router.get("/things/new", (request, response) => {
    response.render("new-thing");
});

router.get("/things/:id", (request, response) => {
    response.render("single-thing");
});

router.get("/things/:id/edit", (request, response) => {
    response.render("edit-thing");
});

// API ROUTES

router.post("/api/thing", (request, response) => {
    db.Sample.create(request.body).then((newTHing) =>{
        response.json({
            error: true,
            data: null,
            message: "Unable to create new thing."
        });
    });
});

module.exports = router;