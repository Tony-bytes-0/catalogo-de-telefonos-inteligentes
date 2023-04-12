<template>
  <q-card class="my-card q-ma-lg">
    <div></div>
    <img :src="tlf.img" /> 

    <q-card-section>
      <div class="text-h6">{{ tlf.model }}</div>
      <div class="text-subtitle2">Tamaño: {{ tlf.size }}</div>
      <div class="text-subtitle2">Memoria Ram: {{ tlf.ram }}</div>
      <div class="text-subtitle2">Procesador: {{ tlf.processor }}</div>
      <div class="text-subtitle2">Capacidad de la Bateria: {{ tlf.battery }}</div>
      <div class="text-subtitle2">Capacidad de almacenamiento: {{ tlf.disk }}</div>
      <div class="text-subtitle2">Camara: {{ tlf.camera }}</div>

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
    tlf: {
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
