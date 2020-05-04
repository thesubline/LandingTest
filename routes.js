const renderer = require("./renderer");

module.exports = function(app){
    app.get("/", renderer.main);
    app.get("/kitchenrental", renderer.kitchenRental);
    app.get("/kitchenco", renderer.kitchenCo);
    app.get("/kitchencooks", renderer.kitchenCooks);
    
    app.post("/lead", renderer.addLead);
}