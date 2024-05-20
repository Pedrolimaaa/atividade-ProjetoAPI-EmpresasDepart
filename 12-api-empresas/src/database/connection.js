const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;

if (!uri) {
    throw new Error('A URI do banco de dados não está definida.');
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const DBConnect = async () => {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error('Erro ao conectar ao banco Mongo:', error);
    }
};

module.exports = DBConnect;

console.log('DB_URI:', process.env.DB_URI); 
