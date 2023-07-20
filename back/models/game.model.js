const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
       title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        studio_name: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB("long")
        },
        platforms: {
            type: Sequelize.STRING
        },
        disk_space: {
            type: Sequelize.FLOAT
        },
        score: {
            type: Sequelize.FLOAT
        },
        game_engine: {
            type: Sequelize.STRING
        },
        release_date: {
            type: Sequelize.DATEONLY
        },
        budget: {
            type: Sequelize.FLOAT
        },
        published: {
            type: Sequelize.BOOLEAN
        }

    });

    return Game;
};