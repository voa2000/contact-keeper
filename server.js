const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper API......" })
);
//Define Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
