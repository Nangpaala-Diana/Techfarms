const mongoose = require("mongoose");

exports.connectDb = async () => {
    
         await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("mongoDb connected");
   
       
    
};

