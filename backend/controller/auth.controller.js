// const db = require("../loader/database.loader");
class AuthController {
    register = async (req, res, next) => {
        req.body._id = new Date().getTime();
        try {
            await db.collection("users").insertOne(req.body);
            res.json("User Registered Successfully!");
        } catch (error) {
            console.log(error);
            res.status(403).json("Error in Inserting Doc");
        }
    };

    login = async (req, res, next) => {
        try {
            const data = await db
                .collection("users")
                .find(req.body, {
                    projection: { _id: 1, Fname: 1, lname: 1, userage: 1, gender: 1, isAdmin: 1 },
                })
                .toArray();

            res.json(data);
        } catch (error) {
            res.status(403).json(error);
        }
    };

}

module.exports = new AuthController();
