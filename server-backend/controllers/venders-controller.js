const mongoose = require('mongoose');

const Vender = mongoose.model('Vender', {
    id: Number,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
    website: String,
    vendername: String,
    companyname: String,
    companyaddress1: String,
    companyaddress2: String,
    companycity: String,
    companystate: String,
    companyzipcode: String
});

// the Vender to create should come from the request body
const create = (req, res) => {

    const newVender = req.body;

    Vender.create(newVender, function (err, doc) {
        console.log(err);
        console.log(doc);
        console.log("Vender Created!!")
        res.json({ message: 'New Vender has been Created' });
    })
}
//***************** READ ************** User / Get all Users
const allVenders = (req, res) => {
    Vender.find({}).exec((err, vender) => {
        res.json({ message: "Get all Venders", vender: vender });
    });
};
//********************************************************/
//******************* READ One User ***************By Object ID
const getById = (req, res) => {
    const id = req.params.id;

    Vender.findOne({ _id: id }).exec((err, vender) => {
        //res.json({ message: "Users - Get By Id", user});
        if (!vender) {
            res.status(404).json({ message: "Could not find a vender with that id." });
        } else if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(vender);
            console.log("Vender_id: " + id + " returned");
        }
    });
};
//*********************************************************/
//******************* UPDATE ************************- Update a users record
const update = (req, res) => {
    const vender_id = req.params.id;

    Vender.findByIdAndUpdate({ _id: vender_id }, req.body).exec((err, vender) => {
        if (!vender) {
            res.status(404).json({ message: "Could not find a vender with that id." });
        } else if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(vender);
            console.log("updated!!");
        }
    });
};
//*************************************************************/
//******************* DELETE *****************************- Delete a users record
const destroy = (req, res) => {
    const vender_id = req.params.id;

    Vender.deleteOne({ _id: vender_id }).exec((err,vender) => {
        if (!vender) {
            res.status(404).json({ message: "Could not find a vender with that id." });
        } else if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Vender Deleted" });
        }
    });
};
//****************************************************************/


module.exports = { create, getById, allVenders, update, destroy }

