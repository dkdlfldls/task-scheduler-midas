var Sequelize = require("sequelize");

var sequelize = new Sequelize(
    "midas",
    "root",
    "root",
    {
        dialect: 'mysql',
        pool : {
            "max": "1000",
            "min": "0",
            "idle": "10000"
        },
        define: {
            timestamps: false
        }
    }
);
exports.sequelize = sequelize;
