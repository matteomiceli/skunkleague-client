/* eslint-disable */
<template>
  <router-link v-if="link" :to="link">
    <button
      type="button"
      :disabled="disabled"
      :class="`${
        small ? 'px-2 py-1 text-sm' : 'px-3 py-2'
      } bg-green-700 text-white rounded hover:bg-opacity-80 disabled:bg-gray-300`"
    >
      {{ text }}
    </button>
  </router-link>
  <button
    v-else
    :disabled="disabled"
    type="button"
    :class="`${
      small ? 'px-2 py-1 text-sm' : 'px-3 py-2'
    } bg-green-700 text-white rounded hover:bg-opacity-80 disabled:bg-gray-300`"
    @click="onClickEvent"
  >
    <div>{{ text }}</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["text", "link", "small", "onClick", "disabled"],

  mounted() {
    console.log(this.disabled);
  },

  methods: {
    onClickEvent() {
      this.$emit("onClick");
    },
  },
});
</script>
