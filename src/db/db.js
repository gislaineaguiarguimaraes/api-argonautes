const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://gislaine:70227589@cluster0.jygmls9.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((er) => console.log(er + "Connexion à MongoDB échouée !"));

module.exports = mongoose;
