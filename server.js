const express = require("express");
const expressPinoLogger = require("express-pino-logger");
const logger = require("./service");
const app = express();
// ...
const loggerMidleware = expressPinoLogger({
  logger: logger,
  autoLogging: true,
});
app.use(loggerMidleware);
// ...
app.use(express.json());


app.get("/foods", (request, response) => {
  logger.info("GET route is accessed");
  logger.debug("GET route is accessed");
  logger.warn("GET route is accessed");
  logger.fatal("GET route is accessed");
//   response.status(200).send("success")
});

app.get("/tester",(req,res)=>{
    logger.http("tester http");
    res.send("success")
})

app.get("/one",(req,res)=>{
    logger.debug("tester debug");
    res.send("debug")
})

app.get("/two",(req,res)=>{
    logger.warn("tester warn");
    res.send("warn")
})

app.listen(3000, () => {
  console.log("Server is running...");
});
