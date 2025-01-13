const fs = require("fs");
const path = require("path");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db")

const properties = require("./routes/properties");
const users = require("./routes/users");
const messages = require("./routes/messages");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(ENV) {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  app.use(express.static(path.join(__dirname, 'public')));

  app.use("/api/users", users(db));
  app.use("/api/properties", properties(db));
  app.use("/api/messages", messages(db));
  


  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
