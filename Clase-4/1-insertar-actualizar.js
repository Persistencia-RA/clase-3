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
    insertar("Clara","Flores"),)
  .then((jane) => {
    console.log(jane.toJSON());
  })
  .then(() =>
    actualizar("Pepita","Flores")  
    .then(() => {
      console.log('Done');
    }),
  );



const insertar = (nombre, apellido) => Users.create({      firstName: nombre,      lastName: apellido,    })
const actualizar = (nombreACambiar, apellido) => Users.update(  { firstName: nombreACambiar },  {    where: {      lastName: apellido,    },  },)