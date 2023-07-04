var fs = require('fs');
var easyinvoice = require('easyinvoice');

class CartController {

    cart = async (req, res, next) => {
        try {
            const { _id, date, pack, level, isdietplan, istrain, payment, isbath, paid, coupon } = req.body;

            const condition = { _id };
            const newValues = { $set: { date, pack, level, isdietplan, istrain, payment, isbath, paid, coupon } };

            const result = await db.collection("users").updateOne(condition, newValues);

            if (result.modifiedCount === 0) {
                return res.status(404).json("User data not found");
            }

            res.json("User data updated successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    createInvoice = async (req, res, next) => {

        // console.log(req.body)

        // return
        var data = {

            "client": {
                "company": "Client Corp",
                "address": "Clientstreet 456",
                "zip": "4567 CD",
                "city": "Clientcity",
                "country": "Clientcountry"
            },

            // Now let's add our own sender details
            "sender": {
                "company": "Sample Corp",
                "address": "Sample Street 123",
                "zip": "1234 AB",
                "city": "Sampletown",
                "country": "Samplecountry"
            },
            "images": {
                logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
            },
            "information": {
                // Invoice number
                "number": "2021.0001",
                // Invoice data
                "date": "12-12-2021",
                // Invoice due date
                "due-date": "31-12-2021"
            },
            "products": [
                {
                    "quantity": "2",
                    "description": "Test1",
                    "tax-rate": 6,
                    "price": 33.87
                },
                {
                    "quantity": "4",
                    "description": "Test2",
                    "tax-rate": 21,
                    "price": 10.45
                }
            ],
            "bottomNotice": "Kindly pay your invoice within 15 days.",
            "settings": { "currency": "USD" },
            "translate": {},
            "customize": {}

        };
        easyinvoice.createInvoice(data, function (result) {
            //The response will contain a base64 encoded PDF file
            var pdf = result.pdf;

            //Now let's save our invoice to our local filesystem
            fs.writeFileSync("invoice.pdf", pdf, 'base64');
        });
    }

}
module.exports = new CartController()