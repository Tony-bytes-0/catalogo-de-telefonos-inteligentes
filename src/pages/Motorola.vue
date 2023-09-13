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
    model: "Motorola Moto G Stylus ",
    ram: " 4GB",
    processor: "Snapdragon 665 2GHz ",
    size: '6.4", 1080 x 2300 pixels ',
    battery: " 4000 mAh ",
    disk: " 128GB ",
    camera: "Triple, 48MP+16MP+2MP ",
    img: "https://cdn.smart-gsm.com/blog/wp-content/uploads/2020/12/Motorola-Moto-G-Stylus-2021-1.jpg",
  },
  {
    model: " Motorola Edge 20",
    ram: "8GB ",
    processor: " Snapdragon 778G 2.4GHz",
    size: ' 6.7", 1080 x 2400 pixels',
    battery: "4000 mAh",
    disk: " 128GB/256GB",
    camera: " Triple, 108MP+8MP+16MP ",
    img: "https://www.motorola.com.gt/arquivos/edge20lite00.png",
  },
  {
    model: "Motorola Moto G5 P ",
    ram: " 2GB/3GB/4GB",
    processor: "Snapdragon 625 2GHz ",
    size: ' 5.2", 1080 x 1920 pixels',
    battery: "3000 mAh ",
    disk: "32GB/64GB ",
    camera: "12 MP ",
    img: "https://m.media-amazon.com/images/I/61voYsPhFTL.jpg",
  },
  {
    model: " Motorola G8 Power",
    ram: "4GB ",
    processor: " Snapdragon 665 2GHz",
    size: '6.4", 1080 x 2300 pixels ',
    battery: " 5000 mAh",
    disk: "64GB ",
    camera: " Cuádruple, 16MP+8MP +8MP+2MP",
    img: "https://m.media-amazon.com/images/I/61N0erAMG-L.jpg",
  },
  // {
  //   model: "",
  //   ram: "",
  //   processor: "",
  //   size: "",
  //   battery: "",
  //   disk: "",
  //   camera: "",
  //   img: "",
  // },
];

export default defineComponent({
  name: "SedanPage",
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
