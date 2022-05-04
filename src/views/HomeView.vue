<template>
  <div class="home">
    <button class="mt-24 ml-12 text-blue-600">
      <router-link to="/player/add">New Player</router-link>
    </button>
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
