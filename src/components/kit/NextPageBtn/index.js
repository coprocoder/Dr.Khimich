import React, { useEffect, useState } from 'react'
import TweenOne from 'rc-tween-one'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './styles.scss'

export const NextPageBtn = ({ id }) => {
  const defaultOpacity = 1
  const [opacity, setOpacity] = useState(defaultOpacity)

  // Opacity observer
  useEffect(() => {
    const handleScroll = () => {
      setOpacity(defaultOpacity - (window.pageYOffset / window.screen.height) * 4)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='nextPageBtn' style={{ opacity: opacity }}
         onClick={() => {
           const section = document.querySelector(`#${id}`)
           section.scrollIntoView({ behavior: 'smooth', block: 'start' })
         }}>
      <TweenOne key='icon' className='nextPageBtnContent'
                animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}>
        <KeyboardArrowDownIcon />
      </TweenOne>
    </div>
  )
}