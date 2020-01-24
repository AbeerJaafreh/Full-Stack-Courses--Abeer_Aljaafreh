const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://abeer:1417317@cluster0-yfh31.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection to the Atlas Cluster is successful!')
    })
    .catch((err) => console.error(err));

const db = mongoose.connection;


db.on("error", function () {
    console.log("mongoose connection error");
    console.log("____________________________");
});
db.once("open", function () {
    console.log("mongoose connected successfully");
    console.log("____________________________");
});

const ContactUs = new Schema({
    first_name: {
        type: String
    },
    email: {
        type: String,
    },
    message: {
        type: String
    },
})

module.exports = ContactUs = mongoose.model('contactus', ContactUs);



const contactus = (cb, obj) => {
    ContactUs.create(
        obj,
        (err, doc) => {
            if (err) {
                console.log(err)
            }
            else {
                cb(doc)
            }
        }
    )
}



module.exports = {
    contactus,

};
