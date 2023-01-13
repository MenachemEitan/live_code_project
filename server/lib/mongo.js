const { MongoClient } = require('mongodb');
// const {mongo_uri} = require('../.env')

const mongo_uri ="mongodb+srv://menahemEitan:Qpmz13798264@patadoption.7a2vlju.mongodb.net/?retryWrites=true&w=majority";

let live_code = {}

MongoClient.connect(mongo_uri, { useUnifiedTopology: true }).then((client, err) => {
    if(err){
        console.log("unable to connect to db ");
        return
    }
    else{ console.log("monog connect");
    live_code = client.db('live_code')} 
   


});




module.exports = {
    mongo_collection :(name)=>{
        return live_code.collection(name)
    }

}
