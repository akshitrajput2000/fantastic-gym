const express = require("express");
const cors = require("cors");

class ExpressLoader {
    static init() {
        const app = express();

        app.use(express.json());

        app.use(cors());
        app.options("*", cors());

        return app;
    }
}

module.exports = { ExpressLoader };