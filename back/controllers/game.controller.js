const db = require("../models");
const Game = db.games;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty."
        });
        return;
    }

    const game = {
        title: req.body.title,
        description: req.body.description,
        studio_name: req.body.studio_name,
        image: req.body.image,
        platforms: req.body.platforms,
        disk_space: req.body.disk_space,
        score: req.body.score,
        game_engine: req.body.game_engine,
        release_date: req.body.release_date,
        budget: req.body.budget,
        published: req.body.published ? req.body.published : false
    };

    Game.create(game).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "An error as occured while creating the game."
        });
    });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Game.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error as occured while retrieving the game."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Game.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `cannot find game with id = ${id}.`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving game with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Game.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Game was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Game with id=${id}. Mayber Game was not found or req.body is empty.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Game with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Game.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Game was deleted successfully."
            });
        } else {
            res.send({
                message: `Cannot delete Game with id=${id}. Maybe Game was not found.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Game with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Game.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({ message: `${nums} Games were deleted successfully.` });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error as occured while remobing all games."
        });
    });

};

exports.findAllPublished = (req, res) => {
    Game.findAll({where: { published: true } }).then(data => {
        res.send(data);
    }).catch(err => {
    res.status(500).send({
        message: err.message || "An error as occured while retrieving games."
    });
});
};