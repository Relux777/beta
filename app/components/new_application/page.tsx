'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function New_application () {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [floor, setFloor] = useState('');
    const [working, setWorking] = useState('');


      const handleChange_name = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
    
        // Регулярное выражение для проверки на буквенные символы (кириллические и латинские)
        const onlyLetters = /^[А-Яа-яA-Za-z]+$/;
    
        // Если ввод соответствует буквам или поле пустое, обновляем состояние
        if (value === '' || onlyLetters.test(value)) {
            setName(value);
        }
    };

    const formatPhoneNumber = (input: string) => {
        const cleaned = ('' + input).replace(/\D/g, ''); // Оставляем только цифры
        let formatted = '';
      
        for (let i = 0; i < cleaned.length; i++) {
          if (i === 1 || i === 4 || i === 7 || i === 9) {
            formatted += ' '; // Добавляем пробелы после определенного количества цифр
          }
          formatted += cleaned[i];
        }
      
        setPhoneNumber(formatted);
      };
  
    const handleChange_phoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        formatPhoneNumber(e.target.value);
    };

    const handleChange_date = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, ''); // Удаляем все не-цифры
        let formattedDate = '';
    
        for (let i = 0; i < input.length; i++) {
          if (i === 2 || i === 4) {
            formattedDate += '.';
          }
          formattedDate += input[i];
        }
    
        setDate(formattedDate);
    };

    const handleChange_floor = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFloor(e.target.value);
    };

    const handleChange_working = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setWorking(e.target.value);
    };
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            name,
            date,
            phoneNumber,
            floor,
            working
           
            // Добавьте остальные поля формы сюда
        };
        

        // Отправка уведомления в Telegram
        const telegramBotToken = '6404643817:AAG-Ci3rVBx0IcP3ngLL70CxSzU-kvl4WVo';
        const chatGroupId = '-1002167273158';

        try {

            const message = `Новая заявка!\n\nИмя: ${formData.name}\nНомер телефона: ${formData.phoneNumber}\nДата рождения: ${formData.date}\nПол: ${formData.floor}\nМетод работы: ${formData.working}`;
            const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatGroupId}&text=${encodeURIComponent(message)}`);

            setAlertText('Заявка успешна отправлена!');
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false); // Убрать класс active через 5 секунд
            }, 5000);
        } catch (error) {
            console.error('Ошибка при отправке данных в Telegram:', error);

            // Ошибка при отправке
            setAlertText('Произошла ошибка при отправке данных в Telegram.');
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false); // Убрать класс active через 5 секунд
            }, 5000);
        }
    };


    return (
      <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Имя' value={name} onChange={handleChange_name} maxLength={40} required />
            <input type="text" placeholder='Телефон'value={phoneNumber} onChange={handleChange_phoneNumber} minLength={15} maxLength={15} required />
            <input type="text" placeholder='Дата рождения' value={date} onChange={handleChange_date} minLength={10} maxLength={10} required />
            <select value={floor} onChange={handleChange_floor} required>
                <option value="">Выберите свой пол</option>
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>  
            </select>
            <select value={working} onChange={handleChange_working} required>
                <option value="">Выберите метод работы</option>
                <option value="местный персонал">Местный персонал</option>
                <option value="Вахтовый метод (15 дней)">Вахтовый метод (15 дней)</option>
                <option value="Вахтовый метод (20 дней)">Вахтовый метод (20 дней)</option>
                <option value="Вахтовый метод (30 дней)">Вахтовый метод (30 дней)</option>
                <option value="Вахтовый метод (45 дней)">Вахтовый метод (45 дней)</option>
                <option value="Вахтовый метод (60 дней)">Вахтовый метод (60 дней)</option>  
            </select>
            <div className='flex confirmation' >
                <input type="checkbox" id="horns" name="horns" required />
                <label htmlFor="horns"> Нажимая на кнопку отправить, я принимаю <Link href='/agreements/'>пользовательское соглашение</Link> и <Link href='/agreements/privacy'>политика конфиденциальности</Link></label>
            </div>
            <button type="submit" className="btn-1">Записаться на собеседование</button>
            
        </form>
    
      <div className={`alert flex align-center ${showAlert ? 'show' : ''}`}><i className="fa-duotone fa-badge-check"></i> {alertText}<div className={`progress ${showAlert ? 'show' : ''}`}></div></div>


      </>
    )
}