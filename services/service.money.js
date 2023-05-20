import { client } from '../index.js';
import { ObjectId } from "mongodb";

export async function getMoney(request) {
    return await client.db('mango').collection('money').find(request.query).toArray();
}

export async function getMoneybyid(id) {
    return await client
        .db("mango")
        .collection("money")
        .findOne({ id: id });
}

export async function DeleteMoney(id) {
    return await client
        .db("mango")
        .collection("money")
        .deleteOne({ _id: ObjectId(id) });
}

export async function UpdateMoney(id, data) {
    return await client
        .db("mango")
        .collection("money")
        .updateOne({ id: id }, { $set: data });
}

export async function createMoney(data) {
    return await client.db('mango').collection('money').insertOne(data);
}
