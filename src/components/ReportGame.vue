<template>
  <div class="flex flex-wrap">
    <label class="text-sm mr-1" for="winner">Winner:</label>
    <select class="w-24 text-sm" name="winner" id="winner">
      <option value="" selected>--</option>
      <option v-for="player in game.players" :value="player.id" :key="player.id">
        {{ player.alias }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["reportResults", "game"],
});
</script>
