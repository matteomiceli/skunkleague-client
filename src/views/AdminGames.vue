<template>
  <div class="mt-24">
    <h1 class="text-3xl font-semibold">Add Game</h1>
    <div class="inputs flex flex-col mt-2 w-3/6 space-y-2">
      <label for="player1">Player 1</label>
      <select v-model="player1" name="player1" id="player1" class="py-1">
        <option value="" selected>--</option>
        <option v-for="player in players" :value="player.Alias" :key="player._id">
          {{ player.Alias }}
        </option>
      </select>
      <p>VS</p>
      <label for="player1">Player 2</label>
      <select v-model="player2" name="player2" id="player2" class="py-1">
        <option value="" selected>--</option>
        <option v-for="player in players" :value="player.Alias" :key="player._id">
          {{ player.Alias }}
        </option>
      </select>
      <input
        placeholder="round"
        type="text"
        class="border border-gray-400 py-1 w-16"
        v-model="round"
      />
    </div>
    <p :class="`${error ? 'visible' : 'invisible'} text-red-500 my-2`">Fields cannot be empty</p>
    <button @click="createGame">Create Game</button>
  </div>
</template>

<script lang="ts">
import { Player } from "@/types/player";
import { defineComponent } from "vue";

export default defineComponent({
  data(): {
    baseUrl: string;
    players: Player[] | null;
    player1: Player | null;
    player2: Player | null;
    accessCode: string;
    round: string;
    error: string;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      players: null,
      player1: null,
      player2: null,
      accessCode: "",
      round: "",
      error: "",
    };
  },

  async mounted() {
    if (!this.players) {
      const res = await fetch(this.baseUrl + "players");
      const players: Player[] = await res.json();
      this.players = players;
    }
  },

  methods: {
    async createGame() {
      if (this.round && this.player1 && this.player2 && this.accessCode) {
        const res = await fetch(this.baseUrl + "players/add", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            // **
            game: { alias: this.alias, firstName: this.firstName, lastName: this.lastName },
            accesscode: this.accessCode,
          }),
        });
        const status = res.ok;

        if (status) {
          this.error = false;
        } else {
          this.error = true;
        }
      } else {
        this.error = true;
      }
    },
  },
});
</script>
