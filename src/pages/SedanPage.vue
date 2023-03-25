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
    name: "Toyota Corolla",
    type: "Sedan",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/2021_Toyota_Corolla_SE_Hatchback.jpg",
  },
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
