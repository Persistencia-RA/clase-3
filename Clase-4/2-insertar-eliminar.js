import Sequelize from 'sequelize';
import { crearUsuario, eliminarPorId } from './funciones.js';

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
  .then(() => crearUsuario(Users, 'Pedro', 'Rodriguez'))
  .then((usuario) => console.log(usuario.toJSON()))
  .then(eliminarPorId(Users, 3))
  .then(console.log('Elimine Registro'));
