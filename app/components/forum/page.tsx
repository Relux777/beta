'use client'

import { useState } from 'react';
import Image from 'next/image';
import good from '../../../public/img/index/good.svg';

export default function Forum() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthYear: '',
    phoneNumber: '',
    gender: '',
    
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          birthYear: '',
          phoneNumber: '',
          gender: '',
        });
        setAlertText('Вы успешно отправили заявку');
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } else {
        setAlertText('Что-то пошло не так. Попробуйте ещё раз.');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setAlertText('Что-то пошло не так. Попробуйте ещё раз.');
      setShowAlert(true);
    }
  };

  return (
    <div>
      <form className='forum' onSubmit={handleSubmit}>
        <div>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder='Имя' />
        </div>
        <div>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder='Фамилия' />
        </div>
        <div>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Выберите свой пол</option>
          <option value="мужской">Мужской</option>
          <option value="женский">Женский</option>
        </select>
        </div>
        <div>
          <input type="date" id="birthYear" name="birthYear" value={formData.birthYear} onChange={handleChange} required placeholder='Дата рождения' />
        </div>
        <div>
          <input type="number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} min={8} minLength={8} required pattern="[0-9]{10}" placeholder='Номер телефона' />
        </div>
        <div>
          <button type="submit" className='btn-1'>Отправить</button>
        </div>
      </form>


      {showAlert && (
        <div className={`alert ${showAlert ? 'show' : ''}`}>
        {alertText}
        <Image src={good} alt="GoodAlert" width={20} height={20} />
      </div>
      )}
    </div>
  );
}
