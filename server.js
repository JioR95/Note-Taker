const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.static('public'));
app.use(express.urlencoded({ exended:true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Api server now on port ${PORT}!');
});