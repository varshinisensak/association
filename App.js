
const db = require("./models");
const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening at: http://localhost:${PORT}');
    });
});
