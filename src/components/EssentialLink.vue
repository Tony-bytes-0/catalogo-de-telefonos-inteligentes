<template>
  <q-item clickable tag="a" @click="$router.push(link)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="primary" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: { type: String, default: "", }, link: {type: String, default: "",},

    model: { type: String, default: "", },

    ram: { type: String, default: "", },

    processor: { type: String, default: "#", },

    size: { type: String, default:"" },

    disk: { type: String, default:"" },

    battery: {type: String, default:"" },

    camera:{type: String, default:""},

    icon: {
      type: String,
      default: "",
    },
    img:{ type: String, default:'#'}
  },
});
</script>
