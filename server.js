const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const hbs = handlebars.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const sesh = {
  secret: process.env.SESH_SECRET,
  cookie: {
    maxAge: 86400
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`))

app.use(require('./controllers/'));

(async () => {await sequelize.sync({ force: false })})()
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
