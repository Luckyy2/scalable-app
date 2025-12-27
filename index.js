const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Azure Scalable Web App</h1>
        <p>Status: Running</p>
        <p>Time: ${new Date()}</p>
        <p>Instance ID: ${process.env.WEBSITE_INSTANCE_ID}</p>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});