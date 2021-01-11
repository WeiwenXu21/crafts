const express = require('express');
require('./services/passport'); 

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

// from package.json "scripts"
// "test": "echo \"Error: no test specified\" && exit 1",
// "dev": "nodemon server"