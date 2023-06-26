const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((er) => console.log(er + "Connexion à MongoDB échouée !"));

module.exports = mongoose;
