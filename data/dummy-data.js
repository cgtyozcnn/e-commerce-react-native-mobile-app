import Product from "../models/Product";

export const PRODUCTS = [
  new Product(
    0,
    "Lenovo IdeaPad 3 14 Laptop",
    "14.0 FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue",
    require("../assets/products/product-laptop.jpg"),
    423.9
  ),
  new Product(
    1,
    "Logitech 920-008813 MK270 Wireless Keyboard and Mouse Combo",
    "Keyboard and Mouse Included, 2.4GHz Dropout-Free Connection, Long Battery Life (Frustration-Free Packaging)",
    require(`../assets/products/product-keyboard.jpg`),
    123.5
  ),
  new Product(
    2,
    "Samsung Electronics Galaxy Note 20 Ultra 5G",
    "128GB of Storage, Mobile Gaming Smartphone, Long-Lasting Battery, Mystic Bronze",
    require(`../assets/products/product-mobile.jpg`),
    1123.5
  ),
  new Product(
    3,
    "Beats Studio3 Wireless Over-Ear Headphones",
    "The Beats Skyline Collection - Midnight Black",
    require(`../assets/products/product-headphone.jpg`),
    123.5
  ),
  new Product(
    4,
    "Wireless Charger, Fast Wireless Charging Stand",
    "2-in-1 Wireless Charging Station Dock for iPhone 11 Pro/Max/X/Xs/XR/AirPods2, Samsung Galaxy Note/Watch/Buds",
    require(`../assets/products/product-charger.jpg`),
    29.99
  ),
];
