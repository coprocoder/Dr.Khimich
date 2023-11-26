import InfoIcon from "@mui/icons-material/Info";
import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";

export const menuConfig = {
  products: {
    link: `${process.env.PUBLIC_URL}/#/products`,
    label: "Товары",
    icon: CategoryIcon,
  },
  prices: {
    link: `${process.env.PUBLIC_URL}/#/prices`,
    label: "Цены",
    icon: SellIcon,
  },
  contacts: {
    link: `${process.env.PUBLIC_URL}/#/contacts`,
    label: "Контакты",
    icon: SellIcon,
  },
};
