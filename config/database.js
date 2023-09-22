const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect =() => {
    mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology:true,
})
.then(()=> console.log("DB connection is sucessful"))
.catch((error)=>{
    console.log("Issue in Db Connection");
    console.error(error.message);
    process.exit(1);
});
}

module.exports = dbConnect;