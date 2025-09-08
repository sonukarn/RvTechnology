import {
  Brain,
  Smartphone,
  Layers,
  Globe,
  Blocks,
  BadgeDollarSign,
  Gamepad2,
  Users,
  ShoppingCart,
  Megaphone,
} from "lucide-react"; // ✅ icons
import {
  SiFlutter,
  SiReact,
  SiApple,
  SiAndroid,
  SiSwift,
  SiKotlin,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiRubyonrails,
  SiShopify,
  SiWoocommerce,
  SiMagento,
  SiPrestashop,
  SiWordpress,
  SiDrupal,
  SiJoomla,
} from "react-icons/si";
import { FaBookOpen } from "react-icons/fa";

export const NAV_ITEMS = [
  {
    title: "Services",
    path: "/services",
    submenu: [
      {
        title: "Microsoft 365",
        path: "/services/microsoft365",
        icon: <Brain size={16} />,
      },
      {
        title: "Mobile Development",
        path: "/services/mobile",
        icon: <Smartphone size={16} />,
      },
      {
        title: "On Demand Solutions",
        path: "/services/on-demand",
        icon: <Layers size={16} />,
      },
      {
        title: "Web Development",
        path: "/services/web",
        icon: <Globe size={16} />,
      },
      {
        title: "Blockchain Development",
        path: "/services/blockchain",
        icon: <Blocks size={16} />,
      },
      {
        title: "NFT Development Company",
        path: "/services/nft",
        icon: <BadgeDollarSign size={16} />,
      },
      {
        title: "Game Development",
        path: "/services/game",
        icon: <Gamepad2 size={16} />,
      },
      {
        title: "Hire Developers",
        path: "/services/hire",
        icon: <Users size={16} />,
      },
      {
        title: "E-commerce Development",
        path: "/services/ecommerce",
        icon: <ShoppingCart size={16} />,
      },
      {
        title: "Digital Marketing Services",
        path: "/services/marketing",
        icon: <Megaphone size={16} />,
      },
    ],
  },

  {
    title: "Technologies",
    megaMenu: true,
    submenu: [
      {
        heading: "Mobile App Development",
        items: [
          { title: "Flutter", path: "/flutter", icon: <SiFlutter /> },
          { title: "React Native", path: "/react-native", icon: <SiReact /> },
          { title: "iOS", path: "/ios", icon: <SiApple /> },
          { title: "Android", path: "/android", icon: <SiAndroid /> },
          { title: "Swift", path: "/swift", icon: <SiSwift /> },
          { title: "Kotlin", path: "/kotlin", icon: <SiKotlin /> },
        ],
        extra: {
          heading: "Game Development",
          items: [
            { title: "Unity 3D", path: "/unity", icon: <Gamepad2 size={16} /> },
          ],
        },
      },
      {
        heading: "Website Development",
        items: [
          { title: "React Js", path: "/react", icon: <SiReact /> },
          { title: "Vue Js", path: "/vue", icon: <SiVuedotjs /> },
          { title: "Angular Js", path: "/angular", icon: <SiAngular /> },
          {
            title: "Typescript Js",
            path: "/typescript",
            icon: <SiTypescript />,
          },
          { title: "PHP", path: "/php", icon: <SiPhp /> },
          { title: "Node Js", path: "/node", icon: <SiNodedotjs /> },
          { title: "Python", path: "/python", icon: <SiPython /> },
          { title: "Laravel", path: "/laravel", icon: <SiLaravel /> },
          { title: "Ruby on Rails", path: "/rails", icon: <SiRubyonrails /> },
        ],
      },
      {
        heading: "Ecommerce",
        items: [
          { title: "Shopify", path: "/shopify", icon: <SiShopify /> },
          {
            title: "Woocommerce",
            path: "/woocommerce",
            icon: <SiWoocommerce />,
          },
          { title: "Magento", path: "/magento", icon: <SiMagento /> },
          { title: "Prestashop", path: "/prestashop", icon: <SiPrestashop /> },
        ],
        extra: {
          heading: "CMS Development",
          items: [
            { title: "WordPress", path: "/wordpress", icon: <SiWordpress /> },
            { title: "Drupal", path: "/drupal", icon: <SiDrupal /> },
            { title: "Joomla", path: "/joomla", icon: <SiJoomla /> },
            { title: "Thinkific", path: "/thinkific", icon: <FaBookOpen /> },
          ],
        },
      },
    ],
  },

  { title: "Industries", path: "/industries", submenu: [] },
  { title: "MicroSoft 365", path: "/microsoft-365", submenu: [] },
  { title: "Insights", path: "/insights", submenu: [] },
  { title: "Company", path: "/company", submenu: [] },
];
