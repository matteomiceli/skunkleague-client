<template>
  <div class="mt-24">
    <h1 class="text-3xl font-semibold">Add Player</h1>
    <div class="inputs flex flex-col mt-2 w-3/6 space-y-2">
      <input
        placeholder="nickname"
        type="text"
        class="border border-gray-400 py-1"
        v-model="alias"
      />
      <input
        placeholder="first name"
        type="text"
        class="border border-gray-400 py-1"
        v-model="firstName"
      />
      <input
        placeholder="last name"
        type="text"
        class="border border-gray-400 py-1"
        v-model="lastName"
      />
      <input
        placeholder="code"
        type="password"
        class="border border-gray-400 py-1 w-2/6"
        v-model="accessCode"
      />
    </div>
    <button @click="createPlayer">New Player</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data(): {
    baseUrl: string;
    alias: string;
    firstName: string;
    lastName: string;
    accessCode: string;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      alias: "",
      firstName: "",
      lastName: "",
      accessCode: "",
    };
  },

  methods: {
    async createPlayer() {
      const res = await fetch(this.baseUrl + "players/add", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({
          player: { alias: this.alias, firstName: this.firstName, lastName: this.lastName },
          accesscode: this.accessCode,
        }),
      });
      const status = res.ok;
      console.log(status);
    },
  },
});
</script>
