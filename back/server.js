const express = require("express");
const cors = require("cors");



const db = require("./models");
const Role = db.role;

db.sequelize.sync({ force: false })
// .then(() => {
//   console.log('Drop and Resync Db');
//   //initial();
// });


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//const userRoute = require("./routes/user");
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue chez GameSoft" });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/game.routes')(app);

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}

//userRoute(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});