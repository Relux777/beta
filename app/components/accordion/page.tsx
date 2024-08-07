'use client'


export default function Accordians() {
    const handleClick = (index: number) => {
        const lists = document.querySelectorAll('.list');
        lists.forEach((list, i) => {
          if (i === index) {
            list.classList.toggle('active');
          } else {
            list.classList.remove('active');
          }
        });
    };
    
      return (
        <div className='accordions'>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(0)}><span>Необходимые документы?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Необходимые документы при приеме на работу это - Паспорт (с пропиской или временной регистрацией на территории РФ)</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(1)}><span>Какие сроки выплаты зарплаты?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Заработная плата оплачивается 2 раза в месяц (1, 15 числа)</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(2)}><span>Будет ли обучение?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Обязательно! Все сотрудники проходят обучение на рабочем месте с опытным наставником и полным погружением в наши процессы.</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(3)}><span>Сколько длится стажировка?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Стажировка начинается после сдачи экзамена, длится она 4 дня. Стажировка оплачиваемая</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(4)}><span>Есть ли у вас возрастное ограние?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Берём мужчин (до 45 лет), так и женщин (до 40 лет)</div></div>
          </div>
        </div>
        )
  }
  
