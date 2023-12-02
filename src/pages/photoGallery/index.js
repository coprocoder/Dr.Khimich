import * as React from 'react'
import { Container, ImageList, ImageListItem, Typography } from '@mui/material'
import { imgConfig } from './photo.сonfig'
import './styles.scss'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

export default function PhotoGallery() {
  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Фотогалерея</Typography>
      <ImageList variant='quilted'>
        {imgConfig.map((item) => (
          <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
            <img
              {...srcset(item.img, 150, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
