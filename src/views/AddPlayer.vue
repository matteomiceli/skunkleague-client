<template>
  <div class="mt-24">
    <h1 class="text-3xl font-semibold mb-6">Add Player</h1>
    <div class="inputs flex flex-col mt-2 w-64 space-y-2">
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
    <p :class="`${error ? 'visible' : 'invisible'} text-red-500 my-2`">Fields cannot be empty</p>
    <Button text="Add Player" @onClick="createPlayer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../components/Button.vue";

export default defineComponent({
  data(): {
    baseUrl: string;
    alias: string;
    firstName: string;
    lastName: string;
    accessCode: string;
    error: boolean;
  } {
    return {
      baseUrl: "https://skunkleague.herokuapp.com/",
      alias: "",
      firstName: "",
      lastName: "",
      accessCode: "",
      error: false,
    };
  },

  methods: {
    async createPlayer() {
      if (this.alias && this.firstName && this.lastName && this.accessCode) {
        const res = await fetch(this.baseUrl + "players/add", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            player: { alias: this.alias, firstName: this.firstName, lastName: this.lastName },
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

  components: {
    Button,
  },
});
</script>
