const jwt = require('jsonwebtoken');

const adminJwtMiddleware =(req,res,next)=>{
console.log("inside the adminJwtMiddleware");
  const token = req.headers.authorization.split(" ")[1]
  console.log(token);
 try{
     const jwtResponse = jwt.verify(token,process.env.JWTSECRET)
     console.log(jwtResponse);
     req.payload = jwtResponse.userMail 
     req.role = jwtResponse.role
     if(jwtResponse.role=="admin"){
     next()
     }else{
      res.status(401).json("unauthorized user")
     }
   }catch(err){
     res.status(401).json("invalid token",err)
   }

}
module.exports=adminJwtMiddleware