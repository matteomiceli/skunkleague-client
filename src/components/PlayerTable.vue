<template>
  <div>
    <table class="w-full sm:w-4/6 mx-auto mt-12">
      <tr class="bg-gray-200">
        <th class="text-left">Name</th>
        <th class="text-right">Points</th>
        <th class="text-right">Win/Loss</th>
      </tr>
      <tr v-for="player in players" :key="player.id">
        <td class="text-left">{{ player.Alias }}</td>
        <td class="text-right">{{ player.Points }}</td>
        <td class="text-right">
          {{ player.Wins || player.Losses ? player.Wins / player.Losses : "--" }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["players"],
});
</script>
