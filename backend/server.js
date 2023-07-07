const { MongoClient } = require("mongodb");
const { ExpressLoader } = require("./loader/express.loader");
const { RoutesLoader } = require("./loader/routes.loader");
const { MiddlewareLoader } = require('./loader/middleware.loader.js');
require('dotenv').config();

const version = "v1";
const app = ExpressLoader.init();

const initDatabase = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = new MongoClient(String(process.env.MONGO_SRV), options);
        await client.connect();

        console.log("MongoDB Atlas connected successfully!");

        global.db = client.db("gymusers");
    } catch (error) {
        console.log("Error connecting to MongoDB Atlas:", error);
    }
};

// Initialize the database and load other components
const initializeApp = async () => {
    await initDatabase();
    RoutesLoader.initRoutes(app, version);
    MiddlewareLoader.init(app);

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}!`);
    });
};

initializeApp();
