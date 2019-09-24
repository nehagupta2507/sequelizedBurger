const express = require("express");
const router = express.Router();
const burgers = require("../models/burger");

router.get("/", function(req, res){
	burgers.selectAll(function(data){
		let hbsObject = {
            burger_data: data
        };
		res.render('index', hbsObject);
	});
});

router.post("/api/burgers", function(req, res){
	burgers.create(req.body.burger_name, function(data){
		res.redirect("/");
	});
});

router.put('/api/burgers/:id', function(req, res){
	let condition = "id = " + req.params.id;
	console.log(req);	
	burgers.update({"devoured": req.body.devoured}, condition, function(data){
		if (data.changedRows === 0) {
			return res.status(404).end();
		}
		res.status(202).end();
	  });
});

router.delete('/api/burgers/:id', function(req, res){
	let condition = `id = ${req.params.id}`;
	burgers.delete(condition, function(data){
		res.json(data);
	  });
});
module.exports = router;