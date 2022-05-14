<template>
  <div v-if="player">
    <h1 class="text-3xl font-semibold">{{ player.Alias }}</h1>
    <h3 class="text-xl text-gray-600">{{ player.FirstName }} {{ player.LastName }}</h3>
    <div class="flex w-36 justify-between mt-2">
      <p>
        Wins: <span class="font-bold text-green-500">{{ player.Wins }}</span>
      </p>
      |
      <p>
        Losses: <span class="font-bold text-red-500">{{ player.Losses }}</span>
      </p>
    </div>

    <h2 class="text-2xl font-semibold mt-12 mb-3">Match History</h2>
    <div v-if="games">
      <div v-for="game in games" :key="game._id">
        <GamesCard :game="game" />
      </div>
    </div>
    <p class="w-full flex justify-center mt-12" v-else>No matches played</p>
  </div>
  <p class="w-full flex justify-center mt-12" v-else>Loading...</p>
</template>

<script lang="ts">
import router from "@/router";
import { Game } from "@/types/game";
import { Player } from "@/types/player";
import { defineComponent } from "vue";
import GamesCard from "../components/GamesCard.vue";

export default defineComponent({
  data(): {
    player: Player | null;
    games: Game | null;
    matchHistory: Game[] | null;
    baseUrl: string;
  } {
    return {
      player: null,
      games: null,
      matchHistory: null,
      baseUrl: "https://skunkleague.herokuapp.com/",
    };
  },
  async mounted() {
    try {
      const res = await fetch(this.baseUrl + "players/" + this.$route.params.id);
      const player = await res.json();
      this.player = player;

      const res2 = await fetch(this.baseUrl + "players/" + this.$route.params.id + "/games");
      const games = await res2.json();

      games?.sort((a: Game) => {
        if (a.winner) {
          return 1;
        }
        return -1;
      });

      this.games = games;
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  },
  components: { GamesCard },
});
</script>
