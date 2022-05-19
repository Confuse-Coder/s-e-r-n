const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('booking', 'root', null, {
  //null neu khong co password connect DB
  host: 'localhost',
  dialect: 'mysql',
  logging: false, //Xoa bo log mac dinh cua Sequelize
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDB;
