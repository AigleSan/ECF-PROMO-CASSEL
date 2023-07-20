const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.findAll = (req, res) => {
  const username = req.query.title;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  User.findAll({ where: condition }).then(data => { res.send(data); 
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "An error as occured while retrieving users."
    });
  });

};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id).then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with id=${id}.`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "An error as occured while retrieving user with id=" + id
    });
  });

};