class UserController {

    allUser = async (req, res, next) => {
        try {
            const data = await db
                .collection("users")
                .find({}, { projection: { userpass: 0 } })
                .toArray();

            res.json(data);
        } catch (error) {
            res.status(403).json(error);
        }
    };

    uemailcheck = async (req, res, next) => {
        try {
            const data = await db
                .collection("users")
                .find({ uemail: req.params.uemail }, { projection: { _id: 1 } })
                .toArray();

            res.json(data);
        } catch (error) {
            res.status(403).json(error);
        }
    };

    uuemailcheck = async (req, res, next) => {
        try {
            const data = await db
                .collection("users")
                .find({ uemail: req.params.uemail }, { projection: { _id: 1 } })
                .toArray();

            res.json(data);
        } catch (error) {
            res.status(403).json(error);
        }
    };

    getUser = async (req, res, next) => {
        try {
            const data = await db
                .collection("users").find({ _id: Number(req.params.userid) })
                .toArray();
            res.json(data);
        } catch (error) {
            res.status(403).json(error);
        }

    }

    profile = async (req, res, next) => {
        try {
            const data = await db
                .collection("users")
                .find({ _id: Number(req.params.userid) }, { projection: { userpass: 0 } })
                .toArray()
            res.json(data);
        } catch (error) {
            res.status(403).json(error);
        }
    };

    updateuser = async (req, res, next) => {
        const condition = { _id: req.body._id };
        const newValues = { $set: { Fname: req.body.Fname, lname: req.body.lname, userage: req.body.userage, uemail: req.body.uemail, level: req.body.level, gender: req.body.gender, pack: req.body.pack, isbath: req.body.isbath, isdietplan: req.body.isdietplan, istrain: req.body.istrain, date: req.body.date } }

        try {
            const result = await db.collection("users").updateOne(condition, newValues);
            res.json("User data updated successfully");
        } catch (error) {
            res.status(403).json(error);
        }
    };

    deleteuser = async (req, res, next) => {
        try {
            await db.collection("users")
                .deleteOne({ _id: Number(req.params.userid) })
            res.json("Users deleted successfully");
        } catch (error) {
            res.status(403).json(error)
        }
    };

    searchuser = async (req, res, next) => {
        try {
            if (req.params.searchtxt != undefined) {
                var search = new RegExp(req.params.searchtxt, "i");
                var searchCond = { Fname: search };

            } else {
                var searchCond = null;
            }

            const data = await db.collection("users")
                .find(searchCond)
                .toArray()
            res.json(data)

        } catch (error) {
            res.status(403).json(error);
        }
    }

}
module.exports = new UserController()