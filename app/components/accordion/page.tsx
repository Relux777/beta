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
            <div className='title flex justify-space align-center' onClick={() => handleClick(0)}><span>Какие документы необходимы для оформления?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Паспорт (с пропиской или временной регистрацией на территории РФ)</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(1)}><span>Как часто выплачивается заработная плата?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Заработная плата оплачивается 2 раза в месяц (1, 15 числа)</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(2)}><span>Будет ли обучение?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Обязательно! Все сотрудники проходят обучение на рабочем месте с опытным наставником и полным погружением в наши процессы.</div></div>
          </div>
          <div className='list'>
            <div className='title flex justify-space align-center' onClick={() => handleClick(3)}><span>Сколько длится стажировка?</span><i className="fa-duotone fa-circle-down fa-bounce"></i></div>
            <div className='body'><div className="text">Стажировка начинается после сдачи экзамена, длится она 10 дней. Стажировка оплачиваемая</div></div>
          </div>
        </div>
        )
  }
  
