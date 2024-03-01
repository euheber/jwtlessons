require('dotenv').config();
require('express-async-errors');
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const express = require('express');

const routes = require("./routes/route")
const app = express();


// middleware

app.use(express.json());
app.use("/api/v1", routes)

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();