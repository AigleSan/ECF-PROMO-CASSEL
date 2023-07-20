module.exports = app => {
    
    const games = require("../controllers/game.controller.js");    


    var router = require("express").Router();

    router.post("/", games.create);

    router.get("/all", games.findAll);

    router.get("/:id", games.findOne);

    router.get("/published", games.findAllPublished);

    router.put("/:id", games.update);

    router.delete("/:id", games.delete);

    router.delete("/all", games.delete);

    app.use('/api/games', router);


};