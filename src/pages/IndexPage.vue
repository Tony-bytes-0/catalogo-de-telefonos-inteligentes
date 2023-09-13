<template>
  <q-page class="flex flex-center">
    <CarCard v-for="tlf in carList" v-bind="tlf" :tlf="tlf" :key="tlf.name" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CarCard from "components/CarCard.vue";

const carList = [
  { model: 'Samsung A03', ram: '3/4 Gb, ', processor:' Ocho nucleos a 1,6GHz ', size: '6,5 pulgadas HDR+ Notch', 
    battery: '5.000 mAh', disk: '64 Gb', camera:'Principal: 48 megapíxeles frontal: 5 megapíxeles', 
    img:"https://www.ivoo.com/media/catalog/product/cache/e49da67936f0c145c5a11cb19f60f5bc/1/2/12000008014_smartphone_a03_a035_6.5__ips_hd_32_3gb_48mp_2_camaras_azul_2_.png"
  },

  { model: 'Samsung A20', ram: '3Gb', processor:'Exynos 7884 1.6GHz', size: 'Pantalla: 6.4", 720 x 1560 pixels', 
    battery: '4000 mAh', disk: '32GB', camera:'Cámara: Dual, 13MP+5MP', 
    img:'https://images.samsung.com/is/image/samsung/latin-feature-minimal-design-that-s-easy-on-the-eyes-156933411?$FB_TYPE_A_MO_JPG$'
  },

  { model: 'Samsung Galaxy 23S', ram: '8 o 12 GB de RAM', processor:'Qualcomm Snapdragon 8 Gen 2 Adreno 740', 
    size: 'AMOLED de 6,8 pulgadas Resolución QHD+ a 3.080 x 1.440', 
    battery: '5.000 mAh Carga rápida de 45W Carga inalámbrica de 15W', disk: '256, 512 o 1 TB', 
    camera:'Principal: 200 megapíxeles f/1.7 OIS Angular: 12 megapíxeles f2.2 120º 13mm', 
    img:'https://images.samsung.com/es/smartphones/galaxy-s23-ultra/buy/03_Color_Selection/S23Ultra_Basic_Color/S23Ultra_Green_MO.jpg'
  },

  { model: 'Samsung Galaxy Z Fold4', ram: '12 GB', processor:'Qualcomm Snapdragon 8+ Gen 1', 
    size: 'PANTALLA INTERIORDynamic AMOLED 2X de 7,6 pulgadas 120 Hz Resolución de 2.176 x 1.812 píxeles PANTALLA EXTERIOR Dynamic AMOLED 2X de 6,2 pulgadas 120 Hz Resolución de 2.316 x 904 píxeles', 
    battery: '4.400 mAhCarga rápida de 25 W', disk: '256 / 512 / 1.024 GB', camera:'Selfie: 10 MP f/2.2 Cámara bajo pantalla: 4 MP f/1.8', 
    img:'https://images.samsung.com/es/smartphones/galaxy-z-fold4/buy/03_Product-Image_Basic-Color/1_Q4_KV_MO_Graygreen.jpg'
  }
];

export default defineComponent({
  name: "IndexPage",
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
