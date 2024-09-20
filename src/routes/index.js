const siteRouter = require('./site');
const loginRouter = require('./login');
const signupRouter = require('./signup');

function route(app){
    app.use('/login', loginRouter);
    app.use('/signup', signupRouter);
    app.use('/', siteRouter);
}

module.exports = route;
