const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({bye: 'buddy'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

// from package.json "scripts"
// "test": "echo \"Error: no test specified\" && exit 1",
// "dev": "nodemon server"