const sequelize = require('sequelize');
const database = require('../config/database');

const Product = database.define('Product', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: sequelize.FLOAT,
        allowNull: false
    },
}, {
    tableName: 'products',
    timestamps: false
});

module.exports = Product;