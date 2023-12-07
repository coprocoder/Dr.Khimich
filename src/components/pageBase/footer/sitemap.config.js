export const sitemapConfig = [
  {
    groupName: 'Информация',
    itemList: [
      { name: 'О нас', link: `${process.env.PUBLIC_URL}/` },
      { name: 'Врачи', link: `${process.env.PUBLIC_URL}/#/prices` },
      { name: 'Отзывы', link: `${process.env.PUBLIC_URL}/#/rates` },
      { name: 'Галерея', link: `${process.env.PUBLIC_URL}/#/photos` },
      { name: 'Контакты', link: `${process.env.PUBLIC_URL}/#/contacts` }
    ]
  },
  {
    groupName: 'Услуги',
    itemList: [
      { name: 'Цены', link: `${process.env.PUBLIC_URL}/#/prices` },
      { name: 'Гарантии', link: `${process.env.PUBLIC_URL}/#/guarantees` }
      // TODO: страницы с каждой услуги: описание, цены, врачи, фото
    ]
  },
  {
    groupName: 'Документы',
    inProgress: true,
    itemList: [
      { name: 'Лицензии и сертификаты', link: `${process.env.PUBLIC_URL}/` }, // TODO page
      { name: 'Нормативные документы', link: `${process.env.PUBLIC_URL}/` }, // TODO page
      { name: 'Налоговый вычет', link: `${process.env.PUBLIC_URL}/` } // TODO page
    ]
  }
]