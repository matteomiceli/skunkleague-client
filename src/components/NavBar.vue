<template>
  <nav class="flex justify-center items-center w-full h-10 space-x-4 text-lg">
    <router-link to="/" class="hover:text-gray-600">Players</router-link>
    <!-- <router-link to="/about">About</router-link> | -->
    <div>|</div>
    <router-link to="/games" class="hover:text-gray-600">Games</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
