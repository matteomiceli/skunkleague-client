<template>
  <div
    :class="`${
      game.winner ? 'border border-gray-400 opacity-50' : 'border border-gray-400'
    } flex flex-col mx-auto mb-2 rounded-lg`"
  >
    <div
      :class="`flex justify-between bg-gray-100 p-3 ${isExpanded ? 'rounded-t-lg' : 'rounded-lg'} ${
        !game.winner ? 'cursor-pointer' : ''
      }`"
      @click="() => expandGame()"
    >
      <div class="font-semibold text-lg">
        {{ game.players[0].alias }} <span class="text-yellow-600 font-normal">vs</span>
        {{ game.players[1].alias }}
      </div>
      <div v-if="!game.winner">
        <button>report result</button>
      </div>
      <div v-else>
        Winner: <span class="font-bold"> {{ this.getWinner().alias }} </span>
        <span class="text-sm font-normal">(+{{ this.getWinner().points }})</span>
      </div>
    </div>
    <div v-if="isExpanded || game.winner">
      <div v-if="!game.winner">
        <ReportGame :reportResults="reportResults" :game="game" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Game } from "../types/game";
import ReportGame from "./ReportGame.vue";

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
    getWinner() {
      return this.game.players[0].id === this.game.winner
        ? this.game.players[0]
        : this.game.players[1];
    },
  },

  components: { ReportGame },
});
</script>
