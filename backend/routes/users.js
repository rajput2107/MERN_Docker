const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');

const User = require('../model/User');

//@route    POST /users
//@desc     Register User
//@Access   Public

router.post('/',[
    check('fname','First Name is required').not().isEmpty(),
    check('lname','Last Name is required').not().isEmpty(),
    check('age','Age is required').not().isEmpty(),
    check('salary','Salary is required').not().isEmpty()
],
async (req,res)=>{
    console.log(req.body);                                                               
    const errors = validationResult(req);
    if(!errors.isEmpty()){                                                                   
        return res.status(400).json({errors:errors.array()});                        
    }


    const {fname,lname,age,salary} = req.body;                                         
    try{

    
        let user = await User.findOne({fname});                                     

        if(user){
           return res.send('User Already Exists');
        }

            user = new User({
                fname,
                lname,
                age,
                salary
            });


            await user.save(); 
            res.send('User Registered');
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});





module.exports = router;