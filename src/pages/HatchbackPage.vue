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
    name: "Toyota Yaris",
    type: "Hatchback",
    img: "https://ca-times.brightspotcdn.com/dims4/default/058f66b/2147483647/strip/true/crop/1280x720+0+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbb%2F8f%2Ffc4f7a334cf4b0fcdb2744dc27d9%2Fcorolla-hatchback-2.jpg",
  },
];

export default defineComponent({
  name: "HatchbackPage",
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
