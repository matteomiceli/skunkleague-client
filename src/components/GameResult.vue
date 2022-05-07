<template>
  <div class="flex">
    <p>
      Winner <span class="text-green-500">{{ getWinner() }}</span
      >!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["game"],

  methods: {
    getWinner(): string {
      return this.game.players[0].alias;
    },
  },
});
</script>
