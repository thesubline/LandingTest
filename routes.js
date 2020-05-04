const renderer = require("./renderer");

module.exports = function(app){
    app.get("/", renderer.main);
    app.get("/kitchenrental", renderer.kitchenRental);
    app.get("/kitchenco", renderer.kitchenCo);
    app.get("/kitchencooks", renderer.kitchenCooks);
    app.get("/inventorymanagement", renderer.inventoryManagement);
    app.get("/kytchndelivery", renderer.kytchnDelivery);
    
    app.post("/lead", renderer.addLead);
}