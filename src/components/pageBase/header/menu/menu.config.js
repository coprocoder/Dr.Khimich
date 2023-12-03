import InfoIcon from '@mui/icons-material/Info'
import SellIcon from '@mui/icons-material/Sell'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const menuConfig = [
  {
    link: `${process.env.PUBLIC_URL}/#/about`,
    label: 'О нас',
    icon: InfoIcon
  }, {
    link: `${process.env.PUBLIC_URL}/#/prices`,
    label: 'Цены',
    icon: SellIcon
  }, {
    link: `${process.env.PUBLIC_URL}/#/rates`,
    label: 'Отзывы',
    icon: ThumbUpIcon
  }, {
    link: `${process.env.PUBLIC_URL}/#/contacts`,
    label: 'Контакты',
    icon: LocalPhoneIcon
  }
]
