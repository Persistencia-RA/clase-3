import Sequelize from 'sequelize';
import { actualizarNombrePorId, crearUsuario } from './funciones.js';

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
  .then(() => crearUsuario(Users, 'Dario', 'Lopez'))
  .then((usuario) => {
    console.log(usuario.toJSON());
  })
  .then(
    actualizarNombrePorId(Users, 'Florencia', 1).then(() => {
      console.log('Done');
    }),
  )
  .then(
    actualizarNombrePorId(Users, 'Gabriel', 4).then(() => {
      console.log('Done');
    }),
  )
  .then(
    actualizarNombrePorId(Users, 'Sofia', 3).then(() => {
      console.log('Done');
    }),
  );
