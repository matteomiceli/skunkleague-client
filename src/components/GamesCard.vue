<template>
  <div
    :class="`${
      game.winner ? 'border border-green-700' : 'border border-gray-300'
    } flex flex-col mx-auto mb-2 rounded-lg`"
  >
    <div
      :class="`flex justify-between cursor-pointer bg-gray-100 p-3 ${
        isExpanded ? 'rounded-t-lg' : 'rounded-lg'
      }`"
      @click="() => expandGame()"
    >
      <div>
        {{ game.players[0].alias }} <span class="text-yellow-600">vs</span>
        {{ game.players[1].alias }}
      </div>
      <div v-if="!game.winner">
        <button>report result</button>
      </div>
      <div v-else>scores and stuff</div>
    </div>
    <div v-if="isExpanded || game.winner" class="p-2">
      <div v-if="!game.winner">
        <ReportGame :reportResults="reportResults" :game="game" />
      </div>
      <div v-else>
        <GameResult :game="game" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Game } from "../types/game";
import ReportGame from "./ReportGame.vue";
import GameResult from "./GameResult.vue";

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
