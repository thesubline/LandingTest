module.exports = {
    main: function(req, res){
        return res.redirect("/pc2igamwg2");
    },

    first: function(req, res){
        return res.sendFile(`${__dirname}/views/first.html`);
    }
}