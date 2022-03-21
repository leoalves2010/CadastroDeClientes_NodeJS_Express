import db from "../db";
import Sequelize from "sequelize";

export default db.define('client', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    }
});