const renderer = require("./renderer");

module.exports = function(app){
    app.get("/", renderer.main);
    app.get("/pc2igamwg2", renderer.first);
    
    app.post("/lead", renderer.addLead);
}