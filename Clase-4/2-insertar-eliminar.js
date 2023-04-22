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
    insertar("Marcos","Estebanez"),
  )
  .then((jane) => {
    console.log(jane.toJSON());
  })
  .then(() =>
    eliminar(6)
    .then(() => {
      console.log('Elimine Registro');
    }),
  );



  const insertar = (nombre, apellido) => Users.create({      firstName: nombre,      lastName: apellido,    })
  const eliminar = (idAEliminar) => Users.destroy({    where: {      id: idAEliminar,    },  })