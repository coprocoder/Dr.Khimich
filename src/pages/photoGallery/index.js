import * as React from 'react'
import { Container, ImageList, ImageListItem, Typography } from '@mui/material'
import { imgConfig } from './photoConfig'
import './styles.scss'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  }
}

export default function PhotoGallery() {
  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Фотогалерея</Typography>
      <ImageList
        sx={{
          // width: '100%',
          // height: 450
        }}
        variant='quilted'
      >
        {imgConfig.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
