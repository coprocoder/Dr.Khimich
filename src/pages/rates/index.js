import React, { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import './rates.scss'

const Rates = () => {
  useEffect(() => {
    !function(d, s) {
      var js, fjs = d.getElementsByTagName(s)[0]
      js = d.createElement(s)
      js.async = 1
      js.src = '//widget.flamp.ru/loader.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script')


  }, [])

  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Отзывы</Typography>
      <a className='flamp-widget' href='//krasnoyarsk.flamp.ru/firm/dr_khimich_stomatologiya-985690699504671'
         data-flamp-widget-type='responsive-new' data-flamp-widget-id='985690699504671' data-flamp-widget-width='100%'
         data-flamp-widget-count='10'>Отзывы о нас на Флампе</a>
    </Container>
  )
}

export default Rates