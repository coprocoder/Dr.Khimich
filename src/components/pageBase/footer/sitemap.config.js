export const sitemapConfig = [
  {
    groupName: 'Информация',
    itemList: [
      { name: 'О нас', link: '/' },
      { name: 'Врачи', link: '/#/prices' },
      { name: 'Отзывы', link: '/#/rates' },
      { name: 'Контакты', link: '/#/contacts' }
    ]
  },
  {
    'groupName': "Услуги",
    'itemList': [
      { name: 'Цены', link: '/#/prices' },
      { name: 'Гарантии', link: '/' }, // TODO page
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