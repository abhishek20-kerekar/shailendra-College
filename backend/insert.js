const express = require("express");

const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

async function Insert() {
    await client.connect();
    console.log("Connected to MongoDB");

    //Databases Name
    const db = client.db("Demo");

    //Collection Name
    const collection = db.collection("demoStudent");

    app.post("/insert", async (req, res)=>{
    const Rollno = req.body.rollno;
    const Name = req.body.name;
    const City = req.body.city;
    const Age = req.body.age;
    
    const data={
        rollno:Rollno,
        name:Name,
        city:City,
        age:Age
    }

    await collection.insertOne(data);
    res.send("Data Inserted Successfully");

    })

    app.listen(4983, ()=>console.log("Server Runnig"));

}

Insert();