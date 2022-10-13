const Stages = require('express').Router()
const db = require('../models')
const{stage,event} = db

//FIND ALL STAGES

Stages.get('/', async (req,res)=>{
    try{
        const foundStages = await stage.findAll()
        res.status(200).json(foundStages)
    }catch(error){
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC STAGE 
Stages.get('/:id', async(req,res)=>{
    try{
        const foundStage = stage.findOne({
            where:{
                stage_id:req.params.id
            },
            include:{
            model:event,
            as:"events"   
    }
})
        res.status(200).json(foundStage)
    }catch(error){
        res.status(500).json(error)
    }
})

//create a stage

Stages.post('/',async(req,res)=>{
    try{
        const newStage = await stage.create(req.body)
        res.status(200).json({
            message:'Successfully inserted a new stage',
            data:newStage
        })
    }catch(error){
        res.status(500).json(error)
    }
})

//update a stage

Stages.put('/:id', async(req,res)=>{
    try{
        const updatestage = await stage.update(req.body,{
            where:{
                stage_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully updated ${updatestage} stage`
        })
    }catch(err){
       res.status(500).json(err) 
    }
})

//DELETE A STAGE

Stages.delete('/:id', async(req,res)=>{
    try{
        const deleteStage = stage.destroy({
            where:{
                stage_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully deleted ${deleteStage}`
        })
    }catch(err){
      res.status(500).json(err)
    }
})

module.exports= Stages