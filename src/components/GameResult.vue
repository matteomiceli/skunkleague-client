<template>
  <div class="flex">
    <p>
      Winner <span class="text-green-500">{{ winner?.alias }}</span
      >!
    </p>
    <p class="text-gray-500 text-sm ml-1">(+{{ winner?.points }})</p>
  </div>
</template>

<script lang="ts">
import { PlayerResult } from "@/types/game";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["game"],

  data(): {
    winner: PlayerResult | null;
  } {
    return { winner: null };
  },

  mounted() {
    this.winner =
      this.game.players[0].id === this.game.winner ? this.game.players[0] : this.game.players[1];
  },

  methods: {},
});
</script>
