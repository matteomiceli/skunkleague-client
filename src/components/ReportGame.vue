<template>
  <div class="flex flex-wrap space-x-4 my-4 text-sm mx-3 items-center">
    <div>
      <label for="winner">Winner:</label>
      <select class="w-24" name="winner" id="winner" v-model="winner">
        <option value="" selected>--</option>
        <option v-for="player in game.players" :value="player.id" :key="player.id">
          {{ player.alias }}
        </option>
      </select>
    </div>
    <div>
      <label class="ml-2" for="points1">{{ players[0].alias }} pts:</label>
      <input type="number" class="w-12 bg-gray-100" v-model="players[0].points" />
    </div>
    <div>
      <label class="ml-2" for="points1">{{ players[1].alias }} pts:</label>
      <input type="number" class="w-12 bg-gray-100" v-model="players[1].points" />
    </div>
    <input type="password" class="w-24 bg-gray-100" placeholder="code" v-model="accesscode" />
    <Button @onClick="submitResult" text="Report" :small="true" />
  </div>
  <p class="text-red-500 text-sm my-2 mx-3">{{ error }}</p>
  <p class="text-green-500 text-sm my-2 mx-3">{{ success }}</p>
</template>

<script lang="ts">
import { PlayerResult } from "@/types/game";
import { defineComponent } from "vue";
import Button from "../components/Button.vue";

export default defineComponent({
  props: ["reportResults", "game"],

  data(): {
    baseUrl: string;
    error: string;
    success: string;
    winner: string;
    players: PlayerResult[];
    accesscode: string;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      error: "",
      success: "",
      winner: "",
      players: [this.game.players[0], this.game.players[1]],
      accesscode: "",
    };
  },

  methods: {
    async submitResult() {
      const res = await fetch(this.baseUrl + "games/result", {
        mode: "cors",
        method: "PATCH",
        body: JSON.stringify({
          game: {
            gameId: this.game._id,
            winner: this.winner,
            players: this.players,
          },
          accesscode: this.accesscode,
        }),
      });
      const status = res.ok;
      status
        ? (this.success = "Game results recorded")
        : (this.error = "Error reporting game result");
    },
  },
  components: { Button },
});
</script>
