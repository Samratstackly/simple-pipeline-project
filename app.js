const express = require('express');
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello from AWS Elastic Beanstalk!');
});

app.get('/health', (req, res) => {
    res.send('App is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
