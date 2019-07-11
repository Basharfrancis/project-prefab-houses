// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
const cors = require('cors')
const nodemailer = require('nodemailer');

app.use(express.static('./Public'))

const multer = require('multer');
const storge = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'Public/')
    },
    filename:function(req,file,cb){
      cb(null,Date.now()+'-'+file.originalname)
    }
  });
const upload = multer({storage:storge})


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.use(cors());

// for the form
app.post('/contact',(req,res)=>{

   const transport = {
       service :"Gmail",
       auth:{
           user: "prefab.houses.lb@gmail.com",
           pass :"Pass4prefab"
       }
   }
    const transporter = nodemailer.createTransport(transport);
    const option = {
        from : `${req.body.name} : <${req.body.email}>`,
        to :"fadel.ibrahim.it@gmail.com",
        subject :"Hello Mr. Omar",
        html : `<h3>Message Contact</h3>
                   <ul>
                       <li>Name :${req.body.name}</li>
                       <li>Phone Number :${req.body.phoneNumber}</li>
                       <li>Email :${req.body.email}</li>
                   </ul>
                   <h3>Message</h3>
                   <p>${req.body.message}</p>
        `
    }
    transporter.sendMail(option , (err,info)=>{
        err ? console.log(err) : console.log("Email has sent....")
    })
   })
   

// READ ALL
app.get("/api/users", (req, res, next) => {
    var sql = "select * from products"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        });
      });
});

// READ ONE
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from products where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
}); 
//Read lower price image 
app.get('/api/users/slider',(req,res,next) =>{
    var sql = "select image from products ORDER by price ASC LIMIT 4"
    var params = []
    db.all(sql,params, (err ,rows) =>{
        if(err){
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows})
    });
})

// CREATE
app.post("/api/user/",upload.single('image'), (req, res, next) => {
    var errors=[]
    if (!req.body.title){
        errors.push("No title specified");
    }
    if (!req.body.description){
        errors.push("No description specified");
    }
    if (!req.body.price){
        errors.push("No price specified");
    }
    if (!req.body.construction_time){
        errors.push("No construction_time specified");
    }
    if (!req.body.categorie){
        errors.push("No categorie specified");
    }
   
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        construction_time: req.body.construction_time,
        categorie: req.body.categorie,
        image: req.file.filename

    }
    var sql ='INSERT INTO products (title, description, price, construction_time, categorie, image) VALUES (?,?,?,?,?,?)'
    var params =[data.title, data.description, data.price, data.construction_time, data.categorie, data.image]
  
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

// UPDATE
app.patch("/api/user/:id", upload.single('image'), (req, res, next) => {
    var data = {
        title: req.body.title,
        description: req.body.description,
        price : req.body.price,
        construction_time: req.body.construction_time,
        categorie: req.body.categorie,
        image: req.file.filename
    }
    db.run(
        `UPDATE products SET 
           title = COALESCE(?,title), 
           description = COALESCE(?,description), 
           price = COALESCE(?,price),
           construction_time = COALESCE(?,construction_time),
           categorie = COALESCE(?,categorie),
           image = COALESCE(?,image)
           WHERE id = ?`,
        [data.title, data.description, data.price, data.construction_time, data.categorie, data.image, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

// DELETE
app.delete("/api/user/:id", (req, res, next) => {
    db.run(
        'DELETE FROM products WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

// curl -X DELETE http://localhost:8000/api/user/1
// curl --request PATCH http://localhost:8000/api/user/1?name=test
