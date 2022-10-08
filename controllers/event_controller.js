const events = require('express').Router()
const db = require('../models')
const{event} = db

//Find all events 

events.get('/',async(req,res)=>{
    try{
        const foundEvents = await event.findAll()
        res.status(200).json(foundEvents)
    }catch(error){
        res.status(500).json(error)
    }
})

//FIND SPECIFIC EVENT 
events.get('/:id', async (req,res)=>{
    try{
        const foundEvent = await event.findOne({
            where:{event_id:req.params.id}
        })
        res.status(200).json(foundBand)
    }catch(error){
        res.status(500).json(error)
    }
})

//create an event 

events.post('/',async (req,res)=>{
    try{
        const newEvent = await event.create(req.body)
        res.status(200).json({
            message:'Successfully inserted a new event',
            data:newEvent
        })
    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE An event 
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE AN EVENT 

events.delete('/:id', async(req,res)=>{
    try{
        const deleteEvent = await event.destroy({
            where:{
                event_id:req.params.id
            }
        })
        res.status(200).jason({
            message: `Successfully deleted ${deleteEvent} event`
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = events