<template>
  <q-page class="flex flex-center">
    <CarCard v-for="tlf in carList" v-bind="tlf" :tlf="tlf" :key="tlf.name" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CarCard from "components/CarCard.vue";

const carList = [
  {
    model: " Xiaomi POCO M4 Pro",
    ram: "4GB/6GB ",
    processor: "Mediatek Dimensity 810 2.4GHz ",
    size: ' 6.6", 1080 x 2400 pixels',
    battery: " 5000 mAh",
    disk: " 64GB/128GB",
    camera: "Dual, 50MP+8MP ",
    img: " https://comunicaplus.net/wp-content/uploads/2021/12/poco-m4-pro-2.jpg",
  },
  {
    model: "Xiaomi Mi Mix 4 ",
    ram: " 8GB/12GB",
    processor: " Snapdragon 888+ 3GHz",
    size: ' 6.67", 1080 x 2400 pixels',
    battery: " 4500 mAh ",
    disk: "128/256/512GB ",
    camera: " Triple, 108MP+8MP+13MP",
    img: "https://i.blogs.es/6e8d48/e8bkgmgweaaxrzy/840_560.jpeg",
  },
  {
    model: " Xiaomi Poco X4 Pro",
    ram: "  6GB/8GB",
    processor: "Snapdragon 695 2.2GHz ",
    size: ' 6.67", 1080 x 2400 pixels',
    battery: " 5000 mAh",
    disk: "128GB/256GB ",
    camera: " Triple, 108MP+8MP+2MP",
    img: " https://i.blogs.es/bb0e90/poco-x4-pro-5g---colores/1366_2000.jpeg",
  },
  {
    model: "Xiaomi Redmi Note 12 Pro ",
    ram: "6 u 8 GB LPDDR4X ",
    processor: "MediaTek Dimensity 1080 ",
    size: " Panel Flow AMOLED de 6,67 pulgadas Resolución FullHD+ de 2.400 x 1.080 píxeles Refresco de 120 Hz Pico de brillo de 900 nits",
    battery: " 5.000 mAh Carga de 67 W",
    disk: "128 o 256 GB UFS 2.2 ",
    camera:
      " Principal: IMX766 de 50 Mpx f/1.88, OIS Gran angular: 8 Mpx f/2.2 Macro: 2 Mpx f/2.4. Frontal: 16 megapíxeles f/2.45",
    img: " https://i.blogs.es/81cfd8/xiaomi-redmi/1366_2000.webp",
  },
  {
    model: "",
    ram: "",
    processor: "",
    size: "",
    battery: "",
    disk: "",
    camera: "",
    img: "",
  },
];

export default defineComponent({
  name: "PickupPage",
  components: {
    CarCard,
  },

  setup() {
    return {
      carList,
    };
  },
});
</script>
