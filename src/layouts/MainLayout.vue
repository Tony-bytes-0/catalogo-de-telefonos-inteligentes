<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Catalogo de Toyota</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Tipos de vehiculos </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "SUV",
    caption: "Ver SUVs disponibles",
    icon: "mdi-car-estate",
    link: "/",
  },
  {
    title: "Sedan",
    caption: "Ver sedanes disponibles",
    icon: "mdi-car-side",
    link: "/sedan",
  },
  {
    title: "Hatchback",
    caption: "Ver Hatchbacks disponibles",
    icon: "mdi-car-hatchback",
    link: "/hatchback",
  },
  {
    title: "Camioneta",
    caption: "Ver Camionetas disponibles",
    icon: "mdi-car-lifted-pickup",
    link: "/pickup",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
