import type { Metadata } from 'next'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/map/page'), { ssr: false })


export const metadata: Metadata = {
  title: 'Маршруты',
  description: 'Вся подробная информация о маршрутах.',
}

const data = [
  { id: 1, date: "6:55 / 18:55", description: "Магазин Тэмле" },
  { id: 2, date: "7:00 / 19:00", description: "ост. Чехова" },
  { id: 3, date: "7:10 / 19:10", description: "Автовокзал Мирный" },
  { id: 4, date: "7:15 / 19:15", description: "ост. Березка" },
  { id: 5, date: "7:20 / 19:20", description: "д. Айша" },
  { id: 6, date: "7:25 / 19:25", description: "ост. Ильинское" },
  { id: 7, date: "7:27 / 19:27", description: "ост. Раифа" },
  { id: 8, date: "7:35 / 19:35", description: "прибытие в ПСЦ" }
];

const data2 = [
  { id: 1, date: "6:15 / 18:15",  description: "отправление ( ост. Тихая)"},
  { id: 2, date: "6:16 / 18:16",  description: "ост . Кабанова" },
  { id: 3, date: "6:18 / 18:18",  description: "ост. Солнечный"},
  { id: 4, date: "6:22 / 18:22",  description: "ост.Горгаз"},
  { id: 5, date: "6:26 / 18:26",  description: "ост. 7-я школа "},
  { id: 6, date: "6:28 / 18:28",  description: "ост.Дружба" },
  { id: 7, date: "6:29 / 18:28",  description: "ост.Маяк" },
  { id: 8, date: "6:32 / 18:32",  description: "ост.Тандем" },
  { id: 9, date: "6:35 / 18:35",  description: "ост.Центральный рынок" },
  { id: 10, date: "6:37 / 18:37",  description: "ост.Детский Мир" },
  { id: 11, date: "6:39 / 18:39",  description: "ост.Площадка" },
  { id: 12, date: "6:41 / 18:41",  description: "ост.Баня" },
  { id: 13, date: "6:43 / 18:43",  description: "ост.Магазин" },
  { id: 14, date: "7:10 / 19:10",  description: "ост.Автовокзал Мирный" },
  { id: 15, date: "7:30 / 19:30",  description: "Новая тура" }
];

const data3 = [
  { id: 1, date: "6:40 / 18:40",  description: "ост. ст. метро Проспект Победы"},
  { id: 2, date: "6:45 / 18:45",  description: "ост. Альберта Камалеева (Академика Сахарова)" },
  { id: 3, date: "6:48 / 18:48",  description: "ост. Агропромышленный парк"},
  { id: 4, date: "6:50 / 18:50",  description: "ост. Губкина"},
  { id: 5, date: "6:52 / 18:52",  description: "ост. Академика Арбузова "},
  { id: 6, date: "6:55 / 18:55",  description: "ост.Адоратского" },
  { id: 7, date: "7:00 / 19:00",  description: "ост. Мусина (Парк Хаус)" },
  { id: 8, date: "7:30 / 19:30",  description: "Прибытие в ПСЦ" }
];


const data4 = [
  { id: 1, date: "6:50 / 18:50",  description: "ул. Волгоградская"},
  { id: 2, date: "6:55 / 18:55",  description: "ост. Разъезд Восстания" },
  { id: 3, date: "7:00 / 19:00",  description: "Горьковское шоссе ост. Школа"},
  { id: 4, date: "7:10 / 19:10",  description: "ост. Бахэтле"},
  { id: 5, date: "7:40 / 19:40",  description: "прибытие в ПСЦ "},
];

const data5 = [
  { id: 1, date: "7:01 / 19:01",  description: "ост. Наиля Юсупова"},
  { id: 2, date: "7:03 / 19:03",  description: "ост. Хабинская" },
  { id: 3, date: "7:08 / 19:08",  description: "ост. Айрата Асланова"},
  { id: 4, date: "7:12 / 19:12",  description: "ост. Тансык"},
  { id: 5, date: "7:30 / 19:30",  description: "прибытие в ПСЦ "},
];

const data6 = [
  { id: 1, date: "6:10 / 18:10",  description: "Столбище , Советская 139 (Магнит)"},
  { id: 2, date: "6:13 / 18:13",  description: "Советская"},
  { id: 3, date: "6:18 / 18:18",  description: "с.Усады"},
  { id: 4, date: "6:26 / 18:26",  description: "Общежитие РКБ"},
  { id: 5, date: "6:30 / 18:30",  description: "Баки Урманче"},
  { id: 6, date: "6:34 / 18:34",  description: "Завод Искож"},
  { id: 7, date: "6:39 / 18:39",  description: "Пл.Вахитого"},
  { id: 8, date: "6:45 / 18:45",  description: "Саид Галеев"},
  { id: 9, date: "6:53 / 18:53",  description: "Клары Цеткин (ост. Урицкого)"},
  { id: 10, date: "6:58 / 18:58",  description: "ст.Лагерная"},
  { id: 11, date: "7:03 / 19:03",  description: "ост. Новое Аракчино"},
  { id: 12, date: "7:05 / 19:05",  description: "Школа No8"},
  { id: 13, date: "7:19 / 19:19",  description: "ДК Железнодорожников"},
  { id: 14, date: "7:25 / 19:25",  description: "Железнодорожный техникум"},
  { id: 15, date: "7:30 / 19:30",  description: "Прибытие Технополис Новая Тура"},
];

const data7 = [
  { id: 1, date: "6:40 / 18:40",  description: "ост.Максимова"},
  { id: 2, date: "6:42 / 18:42",  description: "Лукина"},
  { id: 3, date: "6:46 / 18:46",  description: "Молодежная"},
  { id: 4, date: "6:54 / 18:54",  description: "Жилплощадка"},
  { id: 5, date: "7:00 / 19:00",  description: "остановка Жилой массив Ремплер"},
  { id: 6, date: "7:05 / 19:05",  description: "остановка Воронино"},
  { id: 7, date: "7:10 / 19:10",  description: "Хибинская"},
  { id: 8, date: "7:12 / 19:12",  description: "Альфии Авзаловой"},
  { id: 9, date: "7:30 / 19:30",  description: "Прибытие Технополис Новая Тура"}
];

export default function GeneralInfo() {
  return (
    <div className='content'>
      <section>
          <div className='container'>
            <div className='flex'>
              <div className='w-6'>
                <div className='block'>
                <h1>Маршрут № 1 <span>(Зеленодольск - НоваяТура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <div className='block'>
                <h1>Маршрут № 2 <span>(Волжск - Зеленодольск - Новая Тура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <div className='block'>
                <h1>Маршрут № 3 <span>(Казань - Проспект Победы - Новая Тура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data3.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <div className='block'>
                <h1>Маршрут № 4 <span>(Казань м Яшлек - Новая Тура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data4.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <div className='block'>
                <h1>Маршрут № 5 <span>(Казань Салават - Новая Тура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data5.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <div className='block'>
                <h1>Маршрут № 6 <span>(Столбище - Новая Тура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data6.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div><div className='block'>
                <h1>Маршрут № 7 <span>(Максимова - Новая Тура)</span></h1>
                <table>
                  <thead>
                    <tr>
                      <th>Время прибытия</th>
                      <th>Место прибытия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data7.map((item) => (
                      <tr key={item.id}>
                        <td className='text_center'>{item.date}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
              <div className='w-6'>
                  <div className='block'>
                    <h1>Наш адресс:</h1>
                    <span>Респ. Татарстан, р-н Зеленодольский, с. Новая Тура, 19</span> <br /><br />
                    <Map />
                  </div>
                  <div className='block'>
                    <h1>Общественный транспорт</h1>
                    <span>Для пешехода, если едет со стороны Казани: доезжает на автобусе 117 либо 104 до остановки Рынок Новая Тура. Двигается
                    параллельно рынку по дороге, по направлению к ФФ. Проходит КПП и спускается вниз (по асфальтной дороге). Здание ФФ
                    синего цвета. с розовой полоской. Спустившись вниз, кандидат увидит парковку. На ее территории стоит 2х этажное здание,
                    на нем написано БЮРО ПРОПУСКОВ. Отдел персонала находится на 2ом этаже, кабинет No6.
                    Для пешехода, если едет со стороны Зеленодольска:
                    С автовокзала Мирный, автобус No 104, до остановки Рынок Новая тура.</span>
                  </div>
                  <div className='block'>
                    <h1>Собственное авто</h1>
                    <span>Въезд со стороны трассы М-7. Поворот на Объект 784. Кандидат доезжает до пункта КПП . Звонит в Отдел персонала и
                    сообщает номер автомобиля. На территории парковки стоит 2х этажное здание, на нем написано БЮРО ПРОПУСКОВ.
                    Отдел персонала находится на 2ом этаже, кабинет No6.</span>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  