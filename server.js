const PORT =8080
const express=require("express")
const cors=require("cors")
const app=express()

app.use(express.json());
app.use(cors({ origin: "http://localhost:8080", optionsSuccessStatus: 200 }));

app.get('/post' , async(req,res)=>{
	
	try{
	res.send({
	"Doctors":{
	"name": "name"
	}
	})

	}
})