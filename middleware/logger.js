const fs = require('fs');

const logger = (req, res, next) => {
    const convertedDate = new Date().toLocaleString();
    const data = `API with endpoint: "${req.originalUrl}" and method: "${req.method}" was called at: ${convertedDate}\n`;

    console.log(data.trim());

    fs.appendFile('./logs.txt', data, (err) => {
        if (err) {
            console.log('Failed to save log:', err.message);
        }
    });

    next();
};

module.exports = logger;
