import { MongoClient } from 'mongodb';

exports.handler = async (event, context) => {
  try {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const startBlock = Number(event.queryStringParameters.startBlock);
    const endBlock = Number(event.queryStringParameters.endBlock);
    await client.connect();
    const database = client.db('emissions');
    const transactions = await database
      .collection('transactions')
      .find({
        $and: [
          {
            $expr: {
              $gt: [{ $toInt: '$blockNumber' }, startBlock],
            },
          },
          {
            $expr: {
              $lt: [{ $toInt: '$blockNumber' }, endBlock],
            },
          },
        ],
      })
      .toArray();
    return { statusCode: 200, body: JSON.stringify(transactions) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching transactions' }),
    };
  }
};