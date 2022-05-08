<template>
  <div class="home">
    <div class="w-full flex justify-between">
      <h1 class="text-3xl font-semibold">Players</h1>
      <Button text="New Player" link="/player/add" />
    </div>
    <PlayerTable :players="this.players" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerTable from "../components/PlayerTable.vue";
import { Player } from "../types/player";
import Button from "../components/Button.vue";

export default defineComponent({
  name: "HomeView",

  data(): {
    baseUrl: string;
    players: Player[] | null;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      players: null,
    };
  },

  async mounted() {
    if (!this.players) {
      const res = await fetch(this.baseUrl + "players");
      const players: Player[] = await res.json();

      players.sort((a, b) => {
        if (a.Points !== undefined && b.Points !== undefined) {
          return b.Points - a.Points;
        }
        return 0;
      });
      this.players = players;
    }
  },

  components: {
    PlayerTable,
    Button,
  },
});
</script>
