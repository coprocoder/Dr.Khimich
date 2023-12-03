const serviceTemplate = [
  {
    name: 'Химич Игорь Александрович',
    state: 'Врач стоматолог-терапевт',
    description: 'Описание врача Химич',
    image: require('assets/images/doctors/doctor-1.jpg'),
  }, {
    name: 'Саркисян Гоар Левиковна',
    state: 'Врач стоматолог',
    description: 'Описание врача Саркисян',
    image: require('assets/images/doctors/doctor-2.jpg'),
  }, {
    name: 'Ананько Наталья Дмитриевна',
    state: 'Врач стоматолог',
    description: 'Описание врача Ананько',
    image: require('assets/images/doctors/doctor-3.jpg'),
  },
]

export const doctorsConfig = [
  ...serviceTemplate,
  ...serviceTemplate
]
