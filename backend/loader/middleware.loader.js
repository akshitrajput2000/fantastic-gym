const { structureResponse } = require("../libs/common.libs");
require('dotenv').config();

// Custom middleware for handling invalid endpoints or requests
function handleInvalidEndpoint(req, res, next) {
    const error = new Error('Invalid endpoint or request');
    error.status = 404;
    next(error);
}
class MiddlewareLoader {
    static init(app) {
        app.use(handleInvalidEndpoint);

        app.use((err, req, res, next) => {
            if (process.env.NODE_ENV === 'development') {
                if (err) {

                    if (process.env.NODE_ENV === 'development') {
                        console.error(err);
                    }

                    const errorData = {
                        status: err.status || 500,
                        error: err.message || 'Internal Server Error'
                    }

                    res.send(structureResponse(errorData, 0, 'Something Went Wrong'));

                    next();
                } else {
                    next();
                }
            }
        });
    }
}


module.exports = { MiddlewareLoader };
