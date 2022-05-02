<template>
  <div class="games mt-24">
    <GamesTable :games="games" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GamesTable from "../components/GamesTable.vue";
import { Game } from "../types/game";

export default defineComponent({
  name: "GamesView",

  data(): {
    baseUrl: string;
    games: Game[] | null;
    selectedRound: Game[] | null;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      games: null,
      selectedRound: null,
    };
  },

  async mounted() {
    const res = await fetch(this.baseUrl + "games");
    const games: Game[] = await res.json();
    this.games = games;
    console.log(games);
  },

  components: {
    GamesTable,
  },
});
</script>
