const {MongoClient}=require('mongodb')
const MONGO_URL='mongodb://localhost:27017';
const DB_NAME='tododb';
async function write_task(){
    const client=await MongoClient.connect(MONGO_URL)
    const tododb=client.db(DB_NAME)
   const todos=tododb.collection('todos')
   const result=await todos.insertOne({task:'an improtant task',
priority:'2',owner:'manager'})
console.log(result)}
write_task()