const MongoClient = require("mongodb").MongoClient;

let Lead, Visitor;

MongoClient.connect(
    process.env.SUBLINE_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, client)=>{
        let db = client.db("business");
        Lead = db.collection("leads");
        Visitor = db.collection("visitors");
    }
)

module.exports = {
    main: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "main"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/home.html`);
    },

    rentYourKitchen: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "rentyourkitchen"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/rentYourKitchen.html`);
    },

    kitchenRental: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "kitchenrental"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/kitchenRental.html`);
    },

    kitchenCo: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "kitchenco"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/kitchenCo.html`);
    },

    kitchenCooks: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "kitchencooks"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/kitchenCooks.html`);
    },

    inventoryManagement: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "inventorymanagement"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/inventoryManagement.html`);
    },

    kytchnDelivery: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "kytchndelivery"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/kytchnDelivery.html`);
    },

    kytchnOrder: function(req, res){
        let visitor = {
            ip: req.header("x-forwarded-for") || req.connection.remoteAddress,
            dateTime: new Date(),
            page: "kytchnorder"
        }
        Visitor.insertOne(visitor).catch(()=>{});
        return res.sendFile(`${__dirname}/views/kytchnOrder.html`);
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