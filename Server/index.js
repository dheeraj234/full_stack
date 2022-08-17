const express= require("express");
const bodyParser= require("body-parser");
const cors= require("cors");
const app = express();

const mysql = require("mysql");
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'cruddatabase',
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

app.post("/api/insert",(req,res)=>{
    const Name=req.body.Name;
    const Email=req.body.Email;
    const Age=req.body.Age;
    console.log('rendering gettt')
    const sqlInsert = "INSERT INTO `table` (`Name`,`Email`,`Age`) VALUES(?,?,?);"
    console.log(sqlInsert);
    console.log(db)
    db.query(sqlInsert,[Name,Email,Age],(err,results)=>{
        if(err) {
            console.log(err);
            res.send("error....");
        }
        console.log(results)
        res.send("hello world");
    })
});


app.listen(3001,()=>{
    console.log("server has started on port 3001");
})