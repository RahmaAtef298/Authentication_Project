 const express = require('express');
 const jwt = require('jsonwebtoken');
 const router = express.Router();
 const mongoose=require('mongoose');

 require("../Models/user");

 let UserSchema = mongoose.model("user");

 function verifyToken(request,response,next){
   if(!request.headers.autherization){
     return request.status(401).send('Unautherized Token');
   }
   let token = request.headers.autherization.split(' ')[1];
   if(token === null){
    return request.status(401).send('Unautherized Token');
   }
   let payload = jwt.verify(token,'secretKey');
   if(!payload){
    return request.status(401).send('Unautherized Token');
   }
   request.userId=payload.subject;
   next()
 }

 router.get('/',(request,response) => {
    response.send('From api Router')
 });

 router.post('/register',(request,response) => {
     let UserData = request.body
     let user =new UserSchema(UserData);
    //  let UserData = new UserSchema({
    //     user_ID:request.body.user_ID,
    //     email:request.body.email,
    //     password:request.body.password,
    //  });
    user.save((error,registerUser)=>{
         if(error){
             console.log(error);
         }else{
             let payload = { subject : registerUser._id};
             let token = jwt.sign(payload , 'secretkey');
             response.status(200).send({token});
         }
     })
 })

 router.post('/login',(request,response) => {
    let UserData = request.body;

    UserSchema.findOne({email:UserData.email},(error,user)=>{
        if(error){
            console.log(error);
        }  else{
            if(!user){
                response.status(401).send('Invalid Email')
            }else
                if(user.password !== UserData.password){
                    response.status(401).send('Invalid Password')
                }else{
                    let payload = { subject : user._id};
                    let token = jwt.sign(payload , 'secretkey');
                    response.status(200).send({token});
                }
        }
    })
 })

 router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

  router.get('/special', verifyToken , (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

 module.exports=router;