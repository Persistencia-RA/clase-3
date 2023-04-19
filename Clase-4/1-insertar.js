const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3310 /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/* crea usuario*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Juan',
    lastName: 'Rodriguez'
  }))
  .then(() => Cars.update({
    firstName : `Carlos`},{
    where: {
      lastName: 'Rodriguez'
    }
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  
  
  