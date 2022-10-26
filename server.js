const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors({origin: '*'}))
app.use(express.json());
app.use(require('./routes/Creatures'))
app.use(require('./routes/Music'))
app.use(require('./routes/Npc'))
app.use(require('./routes/Items'))
app.use(require('./routes/Artwork'))
//  app.use(require("./routes/record"))
app.use(require('./routes/Fosiles'))
app.use(require('./routes/Villagers'))

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});