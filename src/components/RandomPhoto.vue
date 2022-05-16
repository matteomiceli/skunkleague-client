<template>
  <div class="w-full mx-auto">
    <img class="w-80 mb-24" :src="this.url + this.query" :alt="'random image of ' + query" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data(): {
    url: string;
  } {
    return {
      url: "https://source.unsplash.com/random?",
    };
  },

  props: ["query"],
});
</script>
