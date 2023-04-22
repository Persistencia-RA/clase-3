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
    insertar("Carlos","Riquelme"),
  )
  .then((jane) => {
    console.log(jane.toJSON());
  })
  .then(() =>
    actualizar("Lady",3)
    .then(() => {
      console.log('Done');
    }),
  )
  .then(() =>
    actualizar("Diana",4)
    .then(() => {
      console.log('Done');
    }),
  )
  .then(() =>
    actualizar("Reina",8)
    .then(() => {
      console.log('Done');
    }),
  );



  
const insertar = (nombre, apellido) => Users.create({      firstName: nombre,      lastName: apellido,    })
const actualizar = (nombreACambiar, idACambiar) => Users.update(  { firstName: nombreACambiar },  {    where: {      id: idACambiar,    },  },)
