// NPM Linking
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// File Linking
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'app/public')));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})