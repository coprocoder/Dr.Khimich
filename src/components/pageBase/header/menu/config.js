import InfoIcon from "@mui/icons-material/Info";
import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";

export const menuConfig = [
  {
    link: `${process.env.PUBLIC_URL}/#/prices`,
    label: 'Цены',
    icon: SellIcon,
  }, {
    link: `${process.env.PUBLIC_URL}/#/rates`,
    label: 'Отзывы',
    icon: CategoryIcon,
  }, {
    link: `${process.env.PUBLIC_URL}/#/contacts`,
    label: 'Контакты',
    icon: InfoIcon,
  }
]
