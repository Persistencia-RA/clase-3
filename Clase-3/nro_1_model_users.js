const Sequelize = require('sequelize');

const sequelize = new Sequelize('persistencia', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3310 /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

class User extends Sequelize.Model {}
User.init(
  {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
  },
  { sequelize, modelName: 'users' },
);

/* crea usuario */
sequelize
  .sync()
  .then(() =>
    User.create({
      firstName: 'Pedro',
      lastName: 'Rodriguez',
    }),
  )
  .then((jane) => {
    console.log(jane.toJSON());
  });
