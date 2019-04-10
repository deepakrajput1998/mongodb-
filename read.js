const {MongoClient}=require('mongodb')
const MONGO_URL='mongodb://localhost:27017';
const DB_NAME='tododb';
async function read_task(){
    const client=await MongoClient.connect(MONGO_URL,{ useNewUrlParser: true } )

    const tododb=client.db(DB_NAME)
    const todos=tododb.collection('todos')
    const todoArr=await todos.find({priority:2}).toArray()
    
    todoArr.forEach((todo)=>console.log(JSON.stringify(todo))) 
}
read_task();