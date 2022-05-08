/* eslint-disable */
<template>
  <router-link v-if="link" :to="link">
    <button
      type="button"
      :class="`${
        small ? 'px-2 py-1 text-sm' : 'px-3 py-2'
      } bg-green-700 text-white rounded hover:bg-opacity-80`"
    >
      {{ text }}
    </button>
  </router-link>
  <button
    v-else
    type="button"
    :class="`${
      small ? 'px-2 py-1 text-sm' : 'px-3 py-2'
    } bg-green-700 text-white rounded hover:bg-opacity-80`"
    @click="onClickEvent"
  >
    <div>{{ text }}</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["text", "link", "small", "onClick"],

  methods: {
    onClickEvent() {
      this.$emit("onClick");
    },
  },
});
</script>
