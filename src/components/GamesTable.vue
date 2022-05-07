<template>
  <div class="flex justify-between">
    <div>
      {{ game.players[0].alias }} <span class="text-yellow-600">vs</span>
      {{ game.players[1].alias }}
    </div>
    <div v-if="!game.winner">
      <button @click="() => expandGame()">report winner</button>
    </div>
    <div v-else>scores and stuff</div>
  </div>
  <div v-if="isExpanded || game.winner">
    <div v-if="!game.winner">
      <ReportGame :reportResults="reportResults" :game="game" />
    </div>
    <div v-else>
      <GameResult :game="game" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Game } from "../types/game";
import ReportGame from "../components/ReportGame.vue";
import GameResult from "../components/GameResult.vue";

export default defineComponent({
  props: ["game"],

  data(): {
    isExpanded: boolean;
  } {
    return {
      isExpanded: false,
    };
  },

  methods: {
    reportResults(game: Game) {
      console.log(game._id);
    },
    expandGame() {
      this.isExpanded = !this.isExpanded;
    },
  },

  components: { GameResult, ReportGame },
});
</script>
