const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000;

// Set View Point EJS
app.set("view engine", ejs)

// Routes
app.get("/", (req, res) => {
    res.render("index");
})
// Create Server
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}` )
})