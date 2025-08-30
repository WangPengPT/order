
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const { ObjectId } = require('mongodb');

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

    static async withTransaction(fn) {
        const session = client.startSession();
        try {
            session.startTransaction();
            const result = await fn(session);
            await session.commitTransaction();
            return result;
        } catch (err) {
            await session.abortTransaction();
            throw err;
        } finally {
            await session.endSession();
        }
    }

    static async get(table,id, defValue, session = null) {

        const collection = db.collection(table);
        const users = await collection.find({ id: id }, { session }).toArray();

        if (users && users[0]) return users[0]

        return defValue
    }

    static async set(table, value, session = null) {
        const collection = db.collection(table);
        if (value.id) {
            await collection.updateOne({ id: value.id }, { $set:  value }, { upsert: true, session });
        }
        else {
            await collection.insertOne(value, { session });
        }
    }

 static async del(table, id, session = null) {
  const collection = db.collection(table);
  return await collection.deleteOne({ id: id }, { session });
}


    static async getAll(table, session = null) {
        const collection = db.collection(table);
        const users = await collection.find({}, { session }).toArray();
        return users
    }

    static async setValue(table, key,value, session = null) {
        const collection = db.collection(table);
        await collection.updateOne({ id: value.id }, { $set: {id: key, value: value} }, { upsert: true, session });
    }

    static async getValue(key,defValue, session = null) {
        const collection = db.collection("key_value");
        const users = await collection.find({ id: key }, { session }).toArray();

        if (users && users[0]) return users[0].value

        return defValue
    }

    static async find(table, q, session = null) {

        const collection = db.collection(table);
        const datas = await collection.find(q, { session }).toArray();

        if (datas) return datas

        return []
    }

    static async findOne(table, q, session = null) {

        const collection = db.collection(table);
        const data = await collection.findOne(q, { session });
        return data
    }

    static async updateById(table, id, updatedData, session = null) {
        const collection = db.collection(table);
        return await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedData },
            { session }
  );
}
    static async cleanTable(table, session = null) {
        await db.collection(table).deleteMany({}, { session })
    }

}

module.exports = DB;