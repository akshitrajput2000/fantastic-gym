/* Routes */
const healthCheckRouter = require('../routes/healthCheck.routes');
const authRouter = require('../routes/auth.routes');
const userRouter = require('../routes/user.routes');
const cartRouter = require('../routes/cart.routes')

class RoutesLoader {
    static initRoutes(app, version) {
        app.use(`/api/${version}/health`, healthCheckRouter);
        app.use(`/api/${version}/auth`, authRouter);
        app.use(`/api/${version}/user`, userRouter);
        app.use(`/api/${version}/cart`, cartRouter);

    }
}

module.exports = { RoutesLoader };