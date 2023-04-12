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
    model: " Iphone Xs",
    ram: "6Gb ",
    processor: " A15 ",
    size: "	OLED 5,8 pulgadas Super Retina HD ",
    battery: "Carga rápida 18W e inalámbrica MagSafe 15W Conexión Lightning ",
    disk: " 128 / 256 / 512 GB",
    camera: "CÁMARAS TRASERAS",
    Principal:
      "12MP, f/1.6, OIS, QuadLED flash Secundaria gran angular: 12MP, f/2.4 Vídeo: 4K Dolby Vision, 1080p/240fps, HDR, modo cinemático CÁMARA FRONTAL 12MP, f/1,9, TOF 3D, slow-motion, AF",
    img: "https://webonline.macstore.mx/img/sku/IPHONE313_FZ.jpg",
  },
  {
    model: "Iphone 14",
    ram: "6 GB",
    processor: "Apple A15",
    size: "Pantalla Super Retina XDR Pantalla OLED de 6.1 pulgadas (diagonal) sin marco Resolución de 2532 x 1170 pixeles a 460 ppi",
    battery: "Carga rápida 18W e inalámbrica MagSafe 15W Conexión Lightning",
    disk: "128 GB 256 GB 512 GB",
    camera:
      "Principal: 12MP, f/1.6, OIS, QuadLED flash Secundaria gran angular: 12MP, f/2.4 Vídeo: 4K Dolby Vision, 1080p/240fps, HDR, modo cinemático",
    img: "https://elcomercio.pe/resizer/enOIb9nLXpq5BwTo7jICFCBiSAk=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4WZRKAOCFBFVVOAMMWMMOUXYNQ.jpg",
  },
  {
    model: "iPhone 12",
    ram: "4/6 Gb",
    processor: "Apple A14 Bionic, 5nm NPU Neural Engine de 4ª gen",
    size: "OLED Retina 2.532 x 1.170 píxeles, Super Retina XDR, 19.5:9 460ppp True-tone",
    battery: "Carga rápida 18W e inalámbrica MagSafe 15W",
    disk: " 64 / 128 / 256 GB",
    camera:
      "CÁMARAS TRASERAS Principal: 12MP, f/1.6, OIS, QuadLED flash Secundaria gran angular: 12MP, f/2.4 Vídeo: 4K Dolby Vision, 1080p/240fps, HDR CÁMARA FRONTAL 12MP, f/2.2, TOF 3D, slow-motion",
    img: "https://d1eh9yux7w8iql.cloudfront.net/product_images/None_bb1e34e0-4112-46f4-b7e0-7394beba3f40.jpg",
  },
  {
    model: "iPhone SE",
    ram: "2GB RAM",
    processor:
      "CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia GPU de 4 núcleos Neural Engine de 16 núcleos",
    size: "Pantalla widescreen LCD Multi-Touch de 4.7 pulgadas (diagonal) con tecnología IPS",
    battery: "Standard, Li-Ion 1642 mAh",
    disk: "16/64GB memoria interna",
    camera: "Cámara gran angular de 12 MP, Cámara de 7 MP",
    img: "https://media.gq.com.mx/photos/63fe1d170afbb2d40923a80f/master/w_1600,c_limit/iphone%20se.jpg",
  },
];

export default defineComponent({
  name: "IphonePage",
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
