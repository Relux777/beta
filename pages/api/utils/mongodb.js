import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://relux1337:relux1337@ozongradus.gobevpm.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    const database = client.db('OzonGradus');
    return { db: database };
  } catch (error) {
    // Обработка ошибок при подключении к базе данных
    console.error('Ошибка подключения к базе данных:', error);
    throw new Error('Проблема при подключении к базе данных');
  }
}

export { connectToDatabase };