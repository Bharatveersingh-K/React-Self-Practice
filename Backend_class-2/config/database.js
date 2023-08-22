const mongoose=require("mongoose")
require("dotenv").config()

const dbConnect=()=>{
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("DB connection is Successful"))
.catch((err)=>{
    console.log("Issue is in the DB connection!");
    console.error(err.message);
    process.exit(1);
})
}
module.exports=dbConnect;