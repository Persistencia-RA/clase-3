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

class Users extends Sequelize.Model {}
Users.init(
  {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
  },
  { sequelize, modelName: 'users' },
);

sequelize
  .sync()
  .then(() =>
    Users.create({
      firstName: 'Dario',
      lastName: 'Lopez',
    }),
  )
  .then((jane) => {
    console.log(jane.toJSON());
  })
  .then(() =>
    Users.update(
      { lastName: 'Flores' },
      {
        where: {
          id: 1,
        },
      },
    ).then(() => {
      console.log('Done');
    }),
  )
  .then(() =>
    Users.update(
      { lastName: 'Pereyra' },
      {
        where: {
          id: 4,
        },
      },
    ).then(() => {
      console.log('Done');
    }),
  )
  .then(() =>
    Users.update(
      { lastName: 'Gonsalez' },
      {
        where: {
          id: 3,
        },
      },
    ).then(() => {
      console.log('Done');
    }),
  );
