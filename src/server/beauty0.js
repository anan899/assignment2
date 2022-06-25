const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const BeautyData = require("./preload");

// Get all beauty
router.get('/', (req, res) =>{
     res.json(BeautyData);
});

// get Single beauty by her Name
/*router.get('/:Name',(req,res)=>{
    const found = BeautyData.some(beauty=>beauty.Name === req.params.Name);
    if (found){
        res.json(BeautyData.filter(beauty=>beauty.Name === req.params.Name));
    }else{
        res.status(404).json({msg: `No beauty with the id ${req.params.Name}`});
    }
})*/

// get Single beauty by her id
router.get('/:id',(req,res)=>{
    const found = BeautyData.some(beauty=>beauty.id === parseInt(req.params.id));
    if (found){
        res.json(BeautyData.filter(beauty=>beauty.id === parseInt(req.params.id)));
    }else{
        res.status(404).json({msg: `No beauty with the id ${req.params.id}`});
    }
})

// create a single beauty
router.post('/',(req,res)=>{
    const newBeauty={
        id: uuid.v4(),
        Name: req.body.Name,
        Spouse: req.body.Spouse,
        Title: req.body.Title,
        Introduction: req.body.Intro
    }
    if(!newBeauty.Name){
        res.status(400).json({msg: 'Please include a name'});
    }
    BeautyData.push(newBeauty);
    res.json(BeautyData);

})

// update a single Beauty
router.put('/:id', (req,res)=>{
    const found = BeautyData.some(beauty=>beauty.id === parseInt(req.params.id));
    if(found){
        const updBeauty = req.body;
        BeautyData.forEach(beauty=>{
            if (beauty.id === parseInt(req.params.id)){
                beauty.Name = updBeauty.Name ? updBeauty.Name : beauty.Name;
                beauty.Spouse = updBeauty.Spouse ? updBeauty.Spouse : beauty.Spouse;
                beauty.Title = updBeauty.Title? updBeauty.Title : beauty.Title;
                beauty.Introduction = updBeauty.Introduction? updBeauty.Introduction : beauty.Introduction;

                res.json({msg:'Beauty updated', beauty});
            }
        });
    }else{
        res.status(404).json({msg: `No beauty with the id ${req.params.id}`});

    }
})

// Delete Beauty
router.delete('/:id',(req,res)=>{
    const found = BeautyData.some(beauty=>beauty.id === parseInt(req.params.id));
    if (found){
        res.json({
            msg:'Beauty deleted',
            BeautyData:BeautyData.filter(beauty=>beauty.id !== parseInt(req.params.id))
        });
    }else{
        res.status(404).json({msg: `No beauty with the id ${req.params.id}`});
    }
})


module.exports = router;