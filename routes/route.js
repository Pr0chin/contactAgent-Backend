/*Routes is just like Controller*/
const express = require('express');
const router = express.Router();

const Register = require('../models/register')

 router.get('/register',(req,res,next)=>{
    Register.find(function(err,register){
        res.json(register);
        console.log(register);
    });
    // var registerCheck = new Register();
    // registerCheck.first_name="Sachin";
    // registerCheck.last_name="Maharjan";
    // registerCheck.phone="9845645646"
    // registerCheck.save();
 });

 router.route('/register').post(function (req, res) {
    let newRegistration = new Register(req.body);
    newRegistration.save()
      .then(newRegistration => {
        res.status(200).json({'newRegistration': 'Registered successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
//  router.post('/register',(req,res)=>{
//    let newRegistration = new Register({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     phone: req.body.phone
//    });

//    newRegistration.save((err,contact)=>{
//        if(err){
//            res.json({msg:'failed to post data'});
//        }else{
//            res.json({msg:'regisrtered'});
//        }
//    });
// })

router.delete('/register/:id',(req,res,next)=>{
   alert("herer i am");
    Register.remove({_id:req.param.id}, function(err,result){
        
        if(err){
            console.log("error is here",err)
            res.json({err});
        }else{
            console.log("result is here",result)
            res.json(result);
        }
    });
})


 module.exports=router;