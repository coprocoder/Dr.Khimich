import React, { useRef } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { Box } from '@mui/material'
import ShadowBlur from '../kit/shadowBlur'

const API_KEY = '50918224-0c7c-4126-a2eb-9d6a58a1af7b'
const center = [56.015777, 92.847946]

const YandexMap = ({sx}) => {
  const mapRef = useRef()

  return (
    <ShadowBlur sx={sx}>
      <YMaps
        query={{
          load: 'package.full',
          apikey: API_KEY
        }}
      >
        <Map
          instanceRef={mapRef}
          state={{
            center: center,
            zoom: 17,
            controls: ['zoomControl']
          }}
          // TODO: size props
          // width='100vw'
          // height='50vh'
          width={'100%'}
          height={'100%'}
          modules={['control.ZoomControl']}
        >
          <Placemark
            onClick={() => {
              // const url = 'https://yandex.ru/maps/org/stomkompleks/1000819788/?utm_medium=mapframe&utm_source=maps';
              const url = 'https://2gis.ru/krasnoyarsk/firm/985690699504671'
              window.open(url, '_blank')
            }}
            defaultGeometry={center}
            options={{
              iconImageSize: [10, 10],
              iconColor: 'red',
              preset: 'islands#blueHeartIcon'
            }}
          />
        </Map>
      </YMaps>
    </ShadowBlur>
  )
}

export default YandexMap