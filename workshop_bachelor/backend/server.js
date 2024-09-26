const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const rolesRoutes = require("./routes/roles");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", rolesRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server en cours d'exécution sur le port ${PORT}`);
});
