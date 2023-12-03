const serviceTemplate = [
  {
    name: 'Химич Игорь Александрович',
    state: 'Врач стоматолог-терапевт',
    description: 'Описание врача Химич',
    image: require('assets/images/doctors/doctor-1.jpg'),
    linkProfile: 'https://prodoctorov.ru/krasnoyarsk/vrach/241349-himich/',
  }, {
    name: 'Саркисян Гоар Левиковна',
    state: 'Врач стоматолог',
    description: 'Описание врача Саркисян',
    image: require('assets/images/doctors/doctor-2.jpg'),
    linkProfile: 'https://prodoctorov.ru/krasnoyarsk/vrach/1052828-sarkisyan/',
  }, {
    name: 'Ананько Наталья Дмитриевна',
    state: 'Врач стоматолог',
    description: 'Описание врача Ананько',
    image: require('assets/images/doctors/doctor-3.jpg'),
    linkProfile: 'https://stomcomplex24.ru/#doctors',
  },
]

export const doctorsConfig = [
  ...serviceTemplate,
  ...serviceTemplate
]
