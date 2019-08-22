const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Game = require('../models/game.js');


// which format we will be using

// url encoded
router.use(bodyParser.urlencoded({extended:true}));
// json
router.use(bodyParser.json());


// ****SAVE GAME ****
// The call back function is to return the saved object again in the response object
router.post('/api/games',function(req,res){
    Game.create(req.body,function(err,game){
        if(err) return err;
        res.json(game);
    })
});

// ****GET ALL GAME ****
router.get('/api/games',function(req,res){
    Game.find(function (err,games){
        if(err) return err;
        res.json(games);
    })
});

// Get single game by id
router.get('/api/games/:id',function(req,res){
    Game.findById(req.params.id, function(err,game){
        if(err) return err;
        res.json(game);
    })
});

router.put('/api/games/:id',function(req,res){
    Game.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,game){
        if(err) return err;
        res.json(game);
    })
});

router.delete('/api/games/:id',function(req,res){
    Game.findByIdAndRemove(req.params.id,function(err,game){
        if(err) return err;
        res.json(game);
    })
});




module.exports = router;