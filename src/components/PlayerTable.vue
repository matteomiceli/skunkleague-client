<template>
  <div>
    <table class="w-full mx-auto mt-8">
      <tr class="bg-gray-200">
        <th class="text-left">Name</th>
        <th class="text-right">Points</th>
        <th class="text-right">Win/Loss</th>
      </tr>
      <tr v-for="player in players" :key="player.id">
        <td class="text-left">{{ player.Alias }}</td>
        <td class="text-right">{{ player.Points }}</td>
        <td class="text-right">
          {{
            player.Wins
              ? Math.round((player.Wins / (player.Wins + player.Losses)) * 100) + "%"
              : "0%"
          }}
        </td>
      </tr>
    </table>
    <p class="w-full flex justify-center mt-12" v-if="!players">Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["players"],
});
</script>
