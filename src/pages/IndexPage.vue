<template>
  <q-page class="flex flex-center">
    <CarCard v-for="car in carList" v-bind="car" :car="car" :key="car.name" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CarCard from "components/CarCard.vue";

const carList = [
  {
    name: "Toyota Corolla Cross",
    type: "SUV",
    img: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_2a2fda0516594833ab3cbd5392adf34b.jpg",
  },
  {
    name: "Toyota GR 4Runner",
    type: "SUV",
    img: "https://aglomerado.digital/wp-content/uploads/2023/02/Toyota-GR-4Runner-2025-surge-em-CGI-como-um-SUV-Sequoia-menor-e-mais-agressivo-3.jpg",
  },
  {
    name: "Toyota Compact Cruiser",
    type: "SUV",
    img: "https://www.motortrend.com/uploads/2022/06/Toyota_Compact_Cruiser_EV_SUV_Concept_7.jpg",
  },
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
