const ContactosController = require("../controllers/ContactosController");
const contactosController = new ContactosController();
const fetch = require("node-fetch")

const indexController = require("../controllers/indexController")

var express = require("express");
var router = express.Router();

router.get("/", indexController)

router.post("/form-contacto", contactosController.add);




module.exports = router;