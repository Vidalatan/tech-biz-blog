const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const handlebars = require('express-handlebars')
const hbs = handlebars.create({})
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`))

app.use(controllers);

(async () => {await sequelize.sync({ force: false })})()
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
