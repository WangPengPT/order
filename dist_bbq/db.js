
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db = undefined

class DB {

    // define table name of user
    static user = "user";
    static server = "server";

    static async init() {
        try {
            console.log('Connected to MongoDB');
            await client.connect();

            let nameData = "default"
            if(process.env.SAVE_ADDR){
                nameData = process.env.SAVE_ADDR.split("/")
                nameData = nameData[nameData.length - 1];
            }
            const dbName = "db-" + nameData;
            db = client.db(dbName);
            
            console.log('Connected to MongoDB OK!');
        } catch (error) {
            console.error('Connection error:', error);
        }
    }

    static async get(table,id, defValue) {

        const collection = db.collection(table);
        const users = await collection.find({ id: id }).toArray();

        if (users && users[0]) return users[0]

        return defValue
    }

    static async set(table, value) {
        const collection = db.collection(table);
        if (value.id) {
            await collection.updateOne({ id: value.id }, { $set:  value }, { upsert: true });
        }
        else {
            await collection.insertOne(value);
        }
    }

    static async del(table, id) {
        const collection = db.collection(table);
        await collection.deleteOne({ id: id });
    }


    static async getAll(table) {
        const collection = db.collection(table);
        const users = await collection.find({}).toArray();
        return users
    }

    static async setValue(key,value) {
        const collection = db.collection(table);
        await collection.updateOne({ id: value.id }, { $set: {id: key, value: value} }, { upsert: true });
    }

    static async getValue(key,defValue) {
        const collection = db.collection("key_value");
        const users = await collection.find({ id: key }).toArray();

        if (users && users[0]) return users[0].value

        return defValue
    }

    static async find(table, q) {

        const collection = db.collection(table);
        const datas = await collection.find(q).toArray();

        if (datas) return datas

        return []
    }

}

module.exports = DB;