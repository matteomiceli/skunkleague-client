<template>
  <div>
    <table class="w-full table-fixed mx-auto mt-8">
      <tr class="bg-gray-200">
        <th class="text-left">Name</th>
        <th class="text-right w-14">Points</th>
        <th class="text-right w-24">Win/Loss</th>
      </tr>
      <tr v-for="player in players" :key="player.id">
        <td
          class="text-left text-blue-700 overflow-ellipsis overflow-hidden min-w-36 whitespace-nowrap block"
        >
          <a :href="'player/' + player.ID">{{ player.Alias }} ({{ player.FirstName }})</a>
        </td>
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
