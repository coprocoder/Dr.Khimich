import InfoIcon from "@mui/icons-material/Info";
// import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";

export const menuConfig = {
  home: {
    link: ` ${process.env.PUBLIC_URL}/`,
    label: "О нас",
    icon: InfoIcon,
  },
  // pricing: {
  //   link: `${process.env.PUBLIC_URL}/#/pricing`,
  //   label: "Цены",
  //   icon: SellIcon,
  // },
  products: {
    link: `${process.env.PUBLIC_URL}/#/products`,
    label: "Товары",
    icon: CategoryIcon,
  },
};
