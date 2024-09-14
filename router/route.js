import express from "express"
const router = express.Router();

router.get('/',(req,res)=>{
  res.send("Hello Guys! User Get")
});
router.post('/insert',(req,res)=>{
  res.send("Hello Guys! User Insert")
});
router.put('/update',(req,res)=>{
  res.send("Hello Guys! User Update")
});
router.delete('/delete',(req,res)=>{
  res.send("Hello Guys! User Delete")
});

export default router;
