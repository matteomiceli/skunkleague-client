<template>
  <div class="mt-24">
    <h1 class="text-3xl font-semibold">Add Game</h1>
    <div class="inputs flex flex-col mt-2 w-3/6 space-y-2">
      <label for="player1">Player 1</label>
      <select v-model="player1" name="player1" id="player1" class="py-1">
        <option value="" selected>--</option>
        <option v-for="player in players" :value="player" :key="player._id">
          {{ player.Alias }}
        </option>
      </select>
      <p>VS</p>
      <label for="player1">Player 2</label>
      <select v-model="player2" name="player2" id="player2" class="py-1">
        <option value="" selected>--</option>
        <option v-for="player in players" :value="player" :key="player._id">
          {{ player.Alias }}
        </option>
      </select>
      <label for="round">Round:</label>
      <input name="round" type="number" class="border border-gray-400 py-1 w-16" v-model="round" />
      <input
        placeholder="code"
        type="password"
        class="border border-gray-400 py-1 w-28"
        v-model="accessCode"
      />
    </div>
    <p class="text-red-500 my-2">{{ error }}</p>
    <p class="text-green-500 mb-2">{{ success }}</p>
    <Button @onClick="createGame" text="Create Game" />
  </div>
</template>

<script lang="ts">
import { Player } from "@/types/player";
import { defineComponent } from "vue";
import Button from "../components/Button.vue";

export default defineComponent({
  data(): {
    baseUrl: string;
    players: Player[] | null;
    player1: Player | null;
    player2: Player | null;
    accessCode: string;
    round: string;
    error: string;
    success: string;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      players: null,
      player1: null,
      player2: null,
      accessCode: "",
      round: "",
      error: "",
      success: "",
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
        const res = await fetch(this.baseUrl + "games/add", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            game: {
              players: [
                {
                  alias: this.player1.Alias,
                  id: this.player1.ID,
                  points: 0,
                },
                {
                  alias: this.player2.Alias,
                  id: this.player2.ID,
                  points: 0,
                },
              ],
              round: this.round,
            },
            accesscode: this.accessCode,
          }),
        });
        const status = res.ok;

        if (status) {
          this.error = "";
          this.success = "Game created!";
        } else {
          this.error = "Error creating game";
        }
      } else {
        this.error = "Fields cannot be left empty";
      }
    },
  },

  components: { Button },
});
</script>
