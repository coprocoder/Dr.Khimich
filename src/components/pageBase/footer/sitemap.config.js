export const sitemapConfig = [
  {
    groupName: 'Информация',
    itemList: [
      { name: 'О нас', link: '/' },
      { name: 'Врачи', link: '/#/prices' },
      { name: 'Отзывы', link: '/#/rates' },
      { name: 'Галерея', link: '/#/photos' },
      { name: 'Контакты', link: '/#/contacts' }
    ]
  },
  {
    'groupName': "Услуги",
    'itemList': [
      { name: 'Цены', link: '/#/prices' },
      { name: 'Гарантии', link: '/#/guarantees' },
      // TODO: страницы с каждой услуги: описание, цены, врачи, фото
    ],
  },
  {
    groupName: 'Документы',
    itemList: [
      { name: 'Лицензии и сертификаты', link: '/' }, // TODO page
      { name: 'Нормативные документы', link: '/' }, // TODO page
      { name: 'Налоговый вычет', link: '/' } // TODO page
    ]
  }
]