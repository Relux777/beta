import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/pages/api/utils/mongodb'
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const { db } = await connectToDatabase();

      const collection = db.collection('OzonGradus');
      await collection.insertOne({
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthYear: formData.birthYear,
        phoneNumber: String(formData.phoneNumber),
        gender: formData.gender
      });

      // Отправка уведомления в Telegram
      const telegramBotToken = '6404643817:AAG-Ci3rVBx0IcP3ngLL70CxSzU-kvl4WVo';
      const chatId = '5544889197';

      const message = `Новая заявка!\nИмя: ${formData.firstName}\nФамилия: ${formData.lastName}\nДата рождения: ${formData.birthYear}\nНомер телефона: ${formData.phoneNumber}\nПол: ${formData.gender}`;

      const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

      await fetch(telegramApiUrl, { method: 'POST' });

      res.status(201).json({ message: 'Заявка успешно отправлена' });
    } catch (error) {
      console.error('Ошибка при обработке формы:', error);
      res.status(500).json({ message: 'Что-то пошло не так. Попробуйте ещё раз.' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}