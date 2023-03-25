<template>
  <q-card class="my-card q-ma-lg">
    <img :src="car.img" />

    <q-card-section>
      <div class="text-h6">{{ car.name }}</div>
      <div class="text-subtitle2">{{ car.type }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn color="secondary" class="q-ma-xs"> Comprar </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarCard",
  props: {
    car: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
});
</script>
