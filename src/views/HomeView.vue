<template>
  <div class="home">
    <PlayerTable :players="this.players" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerTable from "../components/PlayerTable.vue";
import { Player } from "../types/player";

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
      this.players = players;
    }
  },

  components: {
    PlayerTable,
  },
});
</script>
