import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Calculator() {
  const [totalProfit, setTotalProfit] = useState(0);
  const [kurs, setKurs] = useState(0);

  useEffect(() => {
    const averageProductionElement = document.querySelector(
      'input[name="averageProduction"]'
    ) as HTMLInputElement;
    const averageProduction = parseFloat(averageProductionElement.value);
    let rate;

    if (averageProduction <= 69) {
      rate = 34;
    } else if (averageProduction >= 70 && averageProduction <= 99) {
      rate = 37;
    } else if (averageProduction >= 100 && averageProduction <= 149) {
      rate = 39;
    } else if (averageProduction >= 150) {
      rate = 41;
    } else {
      rate = 0;
    }

    setKurs(rate);

    const numberOfShiftsElement = document.querySelector(
      'input[name="numberOfShifts"]'
    ) as HTMLInputElement;
    const numberOfShifts = parseFloat(numberOfShiftsElement.value);
    const total = averageProduction * rate * numberOfShifts;
    setTotalProfit(isNaN(total) ? 0 : total);
  }, []);

  const handleSubmit = (form: HTMLFormElement) => {
    const numberOfShiftsElement = form.querySelector(
      'input[name="numberOfShifts"]'
    ) as HTMLInputElement;
    const averageProductionElement = form.querySelector(
      'input[name="averageProduction"]'
    ) as HTMLInputElement;

    const numberOfShifts = parseFloat(numberOfShiftsElement.value);
    const averageProduction = parseFloat(averageProductionElement.value);

    let rate;
    if (averageProduction <= 69) {
      rate = 34;
    } else if (averageProduction >= 70 && averageProduction <= 99) {
      rate = 37;
    } else if (averageProduction >= 100 && averageProduction <= 149) {
      rate = 39;
    } else if (averageProduction >= 150) {
      rate = 41;
    } else {
      rate = 0;
    }

    const total = averageProduction * rate * numberOfShifts;

    setTotalProfit(isNaN(total) ? 0 : total);
    setKurs(rate);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = e.currentTarget.form;

    if (form) {
      handleSubmit(form);
    }
  };

  const handleSubmitWrapper = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e.currentTarget);
  };

  const formattedTotalProfit = totalProfit.toLocaleString('ru-RU');

  return (
    <form onSubmit={handleSubmitWrapper}>
      <select required>
        <option value="1">Размещение</option>
      </select>
      <input type="number" name="numberOfShifts" placeholder="Кол-во смен" required />
      <input
        type="number"
        name="averageProduction"
        placeholder="Средняя выработка %"
        required
        onChange={handleChange}
      />

      <div className="flex justify-space align-center">
        <h3>Итого: {formattedTotalProfit} рублей</h3>
        <div>
          Курс: <b>{kurs}</b> рубля
        </div>
      </div>
      <div>
        Вся <Link href="/payment/">информация</Link> о выплатах
      </div>
    </form>
  );
}
