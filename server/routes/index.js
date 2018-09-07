let express = require('express');
let router = express.Router();

let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Controllers
const AuthenticationController = require('../controllers/AuthenticationController');

// Policies
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

router.post('/register', AuthenticationControllerPolicy.register ,AuthenticationController.register);

module.exports = router;
