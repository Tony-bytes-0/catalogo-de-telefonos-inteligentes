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
    name: "Toyota Tacoma",
    type: "Pickup",
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toyota-tacoma-trd-pro-1622745476.jpg",
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
