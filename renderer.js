const MongoClient = require("mongodb").MongoClient;

let Lead;

MongoClient.connect(
    process.env.SUBLINE_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, client)=>{
        let db = client.db("business");
        Lead = db.collection("leads");
    }
)

module.exports = {
    main: function(req, res){
        return res.redirect("/kitchenrental");
    },

    kitchenRental: function(req, res){
        return res.sendFile(`${__dirname}/views/kitchenRental.html`);
    },

    kitchenCo: function(req, res){
        return res.sendFile(`${__dirname}/views/kitchenCo.html`);
    },

    kitchenCooks: function(req, res){
        return res.sendFile(`${__dirname}/views/kitchenCooks.html`);
    },

    addLead: function(req, res){
        Lead.insertOne(req.body)
            .then((response)=>{
                return res.json({});
            })
            .catch((err)=>{
                return res.json("Error: unable to save data");
            });
    }
}