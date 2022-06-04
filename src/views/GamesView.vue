<template>
  <div class="flex mb-12 justify-between">
    <h1 class="text-3xl font-semibold">Upcoming Games</h1>
    <div class="flex items-center border border-gr px-1 rounded">
      <label for="round">Week:</label>
      <select name="round" id="round" class="ml-2 w-12" v-model="roundSelect">
        <option v-for="i in highestRound" :value="highestRound - (i - 1)" :key="i">
          {{ highestRound - (i - 1) }}
        </option>
      </select>
    </div>
  </div>
  <div v-if="games" class="games">
    <div v-for="game in gamesInRound" :key="game._id">
      <GamesCard :game="game" />
    </div>
    <p class="w-full flex justify-center mt-12" v-if="!games">Loading...</p>
  </div>
  <p class="w-full flex justify-center mt-12" v-else>No games scheduled</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GamesCard from "../components/GamesCard.vue";
import { Game } from "../types/game";

export default defineComponent({
  name: "GamesView",

  data(): {
    baseUrl: string;
    games: Game[] | null;
    gamesInRound: Game[] | null;
    highestRound: number;
    round: number;
    roundSelect: string;
    startingWeek: Date;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      games: null,
      gamesInRound: null,
      highestRound: 0,
      round: 1,
      roundSelect: "",
      startingWeek: new Date("May 16, 2022"),
    };
  },

  updated() {
    if (parseInt(this.roundSelect) !== this.round) {
      this.round = parseInt(this.roundSelect);
      this.gamesInRound = this.filterRound();
    }
  },

  async mounted() {
    if (!this.games) {
      const res = await fetch(this.baseUrl + "games");
      const games: Game[] = await res.json();
      this.games = games;
      this.highestRound = this.getHighestRound();
      this.roundSelect = this.round.toString();
      this.incrementWeek();
      this.gamesInRound = this.filterRound();
    }
  },

  methods: {
    filterRound(): Game[] | null {
      const gamesInRound: Game[] | undefined = this.games?.filter((game) => {
        return game.round === this.round;
      });

      gamesInRound?.sort((a) => {
        return a.winner ? 1 : -1;
      });

      if (gamesInRound) {
        return gamesInRound;
      } else {
        return this.games;
      }
    },

    getHighestRound(): number {
      let highestRound = 1;
      this.games?.forEach((game) => {
        if (game.round > highestRound) {
          highestRound = game.round;
        }
      });
      return highestRound;
    },

    // incomplete
    incrementWeek() {
      const currDate = Date.now();
      let difference = currDate - this.startingWeek.getTime();
      const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
      difference -= daysDifference * 1000 * 60 * 60 * 24;
    },
  },

  components: {
    GamesCard,
  },
});
</script>
