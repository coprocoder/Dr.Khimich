import React from 'react'
import './map.scss'

export default function YandexMap() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a href='https://yandex.ru/maps/org/stomkompleks/1000819788/?utm_medium=mapframe&utm_source=maps'
         style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Стомкомплекс</a>
      <a
        href='https://yandex.ru/maps/62/krasnoyarsk/category/dental_clinic/184106132/?utm_medium=mapframe&utm_source=maps'
        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Стоматологическая клиника в
        Красноярске</a>
      <a
        href='https://yandex.ru/maps/62/krasnoyarsk/category/dental_laboratory/65565837500/?utm_medium=mapframe&utm_source=maps'
        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 28 }}>Зуботехническая лаборатория в
        Красноярске</a>
      <iframe
        src='https://yandex.ru/map-widget/v1/?ll=92.848133%2C56.015639&mode=poi&poi%5Bpoint%5D=92.847946%2C56.015777&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1000819788&z=19.68'
        width={'100%'} height='400' frameBorder='1' allowFullScreen='true' style={{ position: 'relative' }}></iframe>
    </div>
  )
}