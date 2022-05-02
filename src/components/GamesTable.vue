<template>
  <div
    v-for="game in games"
    :key="game._id"
    :class="`${
      game.winner ? 'border border-green-700' : 'border border-gray-400'
    } flex justify-between w-4/6 mx-auto p-2`"
  >
    <div>{{ game.players[0].alias }} vs {{ game.players[1].alias }}</div>
    <div v-if="!game.winner">report winner</div>
    <div v-else>scores and stuff</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["games"],
});
</script>
