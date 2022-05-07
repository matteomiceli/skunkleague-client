<template>
  <div class="games mt-24">
    <h1 class="text-3xl font-semibold mb-12">Upcoming Games</h1>
    <div
      v-for="game in games"
      :key="game._id"
      :class="`${
        game.winner ? 'border border-green-700' : 'border border-gray-300'
      } flex flex-col w-4/6 mx-auto p-2`"
    >
      <GamesTable :game="game" />
    </div>
    <p class="w-full flex justify-center mt-12" v-if="!games">Loading...</p>
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
    round: number;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      games: null,
      selectedRound: null,
      round: 1,
    };
  },

  async mounted() {
    if (!this.games) {
      const res = await fetch(this.baseUrl + "games");
      const games: Game[] = await res.json();
      this.games = games;
      this.round = this.setRound();
    }
  },

  methods: {
    setRound(): number {
      let highestRound = 1;
      this.games?.forEach((game) => {
        if (game.round > highestRound) {
          highestRound = game.round;
        }
      });
      return highestRound;
    },
  },

  components: {
    GamesTable,
  },
});
</script>
